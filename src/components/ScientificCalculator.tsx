import { useState, useCallback, useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  DialogTrigger,
  DialogOverlay,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

// ── helpers ────────────────────────────────────────────────────────────────
const factorial = (n) => {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
};

const safeEval = (expr) => {
  try {
    const sanitized = expr
      .replace(/π/g, "Math.PI")
      .replace(/e(?![a-zA-Z])/g, "Math.E")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/asin\(/g, "Math.asin(")
      .replace(/acos\(/g, "Math.acos(")
      .replace(/atan\(/g, "Math.atan(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/ln\(/g, "Math.log(")
      .replace(/√\(/g, "Math.sqrt(")
      .replace(/\^/g, "**")
      .replace(/(\d+)!/g, (_, n) => factorial(parseInt(n)).toString());
    // eslint-disable-next-line no-new-func
    const result = new Function("return " + sanitized)();
    if (!isFinite(result)) return "Error";
    const rounded = Math.round(result * 1e10) / 1e10;
    return rounded.toString();
  } catch {
    return "Error";
  }
};

// ── button definitions ──────────────────────────────────────────────────────
const BUTTONS = [
  // row 1 – memory / mode
  { label: "Rad", value: "RAD", type: "mode" },
  { label: "(", value: "(", type: "paren" },
  { label: ")", value: ")", type: "paren" },
  { label: "%", value: "/100", type: "fn" },

  // row 2 – trig
  { label: "sin", value: "sin(", type: "fn" },
  { label: "cos", value: "cos(", type: "fn" },
  { label: "tan", value: "tan(", type: "fn" },
  { label: "xʸ", value: "^", type: "op" },

  // row 3 – inverse trig
  { label: "sin⁻¹", value: "asin(", type: "fn" },
  { label: "cos⁻¹", value: "acos(", type: "fn" },
  { label: "tan⁻¹", value: "atan(", type: "fn" },
  { label: "x²", value: "^2", type: "fn" },

  // row 4 – log / sqrt
  { label: "log", value: "log(", type: "fn" },
  { label: "ln", value: "ln(", type: "fn" },
  { label: "√", value: "√(", type: "fn" },
  { label: "1/x", value: "1/(", type: "fn" },

  // row 5 – constants
  { label: "π", value: "π", type: "const" },
  { label: "e", value: "e", type: "const" },
  { label: "n!", value: "!", type: "fn" },
  { label: "abs", value: "Math.abs(", type: "fn" },

  // row 6 – digits + ops
  { label: "7", value: "7", type: "num" },
  { label: "8", value: "8", type: "num" },
  { label: "9", value: "9", type: "num" },
  { label: "÷", value: "/", type: "op" },

  { label: "4", value: "4", type: "num" },
  { label: "5", value: "5", type: "num" },
  { label: "6", value: "6", type: "num" },
  { label: "×", value: "*", type: "op" },

  { label: "1", value: "1", type: "num" },
  { label: "2", value: "2", type: "num" },
  { label: "3", value: "3", type: "num" },
  { label: "−", value: "-", type: "op" },

  { label: "0", value: "0", type: "num" },
  { label: ".", value: ".", type: "num" },
  { label: "+/−", value: "NEG", type: "fn" },
  { label: "+", value: "+", type: "op" },
];

// ── styles (minimal white theme) ──────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600&display=swap');

  :root{
    --bg:        #ffffff;
    --surface:   #ffffff;
    --surface2:  #f8fafc;
    --border:    #e6e9ef;
    --accent:    #2563eb; /* blue */
    --text:      #0f172a;
    --muted:     #6b7280;
    --green:     #16a34a;
    --red:       #ef4444;
  }

  *{ box-sizing: border-box; margin:0; padding:0 }

  .calc-root{
    font-family: 'Outfit', sans-serif;
    background: transparent;
    min-height: auto;
    display: block;
    padding: 0;
  }

  .calc-shell{
    width: 100%;
    max-width: 380px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(16,24,40,0.06);
    margin: 0 auto;
  }

  /* display */
  .calc-display{
    padding: 18px 18px 12px;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    position: relative;
  }

  .display-mode{ font-size:10px; color:var(--muted); margin-bottom:6px }
  .display-expr{ font-family: 'Space Mono', monospace; font-size:13px; color:var(--muted); min-height:20px; text-align:right; margin-bottom:6px }
  .display-result{ font-family:'Space Mono', monospace; font-size:28px; font-weight:700; color:var(--text); text-align:right; min-height:36px }
  .display-result.error{ color:var(--red); font-size:20px }

  /* actions */
  .calc-actions{ display:flex; gap:8px; padding:10px 12px; background:transparent }
  .action-btn{ flex:1; padding:8px 0; border:1px solid var(--border); border-radius:8px; background:var(--surface2); color:var(--text); font-size:13px; cursor:pointer }
  .action-btn.clear{ color:var(--red); border-color:#fcebea }
  .action-btn.equals{ background:var(--accent); color:white; border-color:var(--accent); font-weight:700 }

  /* grid */
  .calc-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:6px; padding:12px; background:transparent }
  .calc-btn{ padding:12px 8px; border-radius:10px; border:1px solid var(--border); background:var(--surface2); color:var(--text); font-size:14px; cursor:pointer }
  .calc-btn:active{ transform:scale(0.98) }

  .calc-btn.op{ color:var(--accent); font-weight:600 }
  .calc-btn.fn{ color:var(--muted) }
  .calc-btn.const{ color:var(--text) }

  .calc-history{ padding:8px 12px; min-height:28px; border-top:1px solid var(--border); display:flex; gap:8px; overflow-x:auto }
  .history-label{ font-size:10px; color:var(--muted); letter-spacing:1px; text-transform:uppercase }
  .history-item{ font-family:'Space Mono', monospace; font-size:12px; color:var(--muted); padding:4px 8px; border-radius:6px; background:var(--surface2); cursor:pointer }
`;

// ── component ───────────────────────────────────────────────────────────────
interface ScientificCalculatorProps {
  trigger?: React.ReactNode;
}

export default function ScientificCalculatorModal({
  trigger,
}: ScientificCalculatorProps) {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [isDeg, setIsDeg] = useState(false);
  const [justEvaled, setJustEvaled] = useState(false);

  const appendToExpr = useCallback(
    (val) => {
      setResult("");
      setJustEvaled(false);
      setExpression((prev) => {
        if (justEvaled && /[\d.πe]/.test(val)) return val; // start fresh after =
        return prev + val;
      });
    },
    [justEvaled],
  );

  const evaluate = useCallback(() => {
    if (!expression) return;
    const ans = safeEval(expression);
    if (ans !== "Error") {
      setHistory((h) => [`${expression} = ${ans}`, ...h].slice(0, 6));
    }
    setResult(ans);
    setJustEvaled(true);
  }, [expression]);

  const clearAll = () => {
    setExpression("");
    setResult("");
    setJustEvaled(false);
  };
  const backspace = () => {
    setExpression((prev) => prev.slice(0, -1));
    setJustEvaled(false);
  };

  // keyboard support
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Enter" || e.key === "=") evaluate();
      else if (e.key === "Escape" || e.key === "Delete") clearAll();
      else if (e.key === "Backspace") backspace();
      else if (/[\d\+\-\*\/\.\(\)\^%]/.test(e.key)) appendToExpr(e.key);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [evaluate, appendToExpr]);

  const handleBtn = (btn) => {
    if (btn.value === "RAD") {
      setIsDeg((d) => !d);
      return;
    }
    if (btn.value === "NEG") {
      setExpression((prev) => (prev ? `-(${prev})` : ""));
      return;
    }
    if (btn.value === "=") {
      evaluate();
      return;
    }
    appendToExpr(btn.value);
  };

  const displayResult = result;
  const isError = result === "Error";
  const hasResult = result && !isError;

  return (
    <DialogPrimitive.Root>
      <DialogTrigger asChild>
        {trigger ?? (
          <button className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors">
            Calc
          </button>
        )}
      </DialogTrigger>

      <DialogPrimitive.Portal>
        <DialogOverlay />

        <DialogPrimitive.Content className="fixed right-0 top-0 z-50 h-full w-full sm:w-[420px] max-w-full p-6 bg-white shadow-lg sm:rounded-l-lg overflow-y-auto">
          <DialogClose asChild>
            <button className="absolute right-4 top-4 rounded-sm opacity-80 hover:opacity-100">
              <X className="h-4 w-4" />
            </button>
          </DialogClose>

          <style>{styles}</style>
          <div className="calc-root">
            <div className="calc-shell">
              {/* display */}
              <div className="calc-display">
                <div className="display-mode">
                  {isDeg ? "DEG" : "RAD"} · SCI
                </div>
                <div className="display-expr">{expression || "0"}</div>
                <div
                  className={`display-result ${isError ? "error" : ""} ${hasResult ? "has-result" : ""}`}
                >
                  {displayResult || (expression ? "" : "0")}
                </div>
              </div>

              {/* action row */}
              <div className="calc-actions">
                <button className="action-btn clear" onClick={clearAll}>
                  AC
                </button>
                <button className="action-btn" onClick={backspace}>
                  ⌫
                </button>
                <button
                  className="action-btn"
                  onClick={() => appendToExpr("(")}
                >
                  ( )
                </button>
                <button className="action-btn equals" onClick={evaluate}>
                  =
                </button>
              </div>

              {/* button grid */}
              <div className="calc-grid">
                {BUTTONS.map((btn, i) => (
                  <button
                    key={i}
                    className={`calc-btn ${btn.type}`}
                    onClick={() => handleBtn(btn)}
                    title={btn.value}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* history */}
              {history.length > 0 && (
                <div className="calc-history">
                  <span className="history-label">hist</span>
                  {history.map((h, i) => (
                    <span
                      key={i}
                      className="history-item"
                      onClick={() => {
                        const ans = h.split(" = ")[1];
                        setExpression(ans);
                        setResult("");
                        setJustEvaled(false);
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
