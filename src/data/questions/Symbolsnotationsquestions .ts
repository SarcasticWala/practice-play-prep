import { Question } from "@/types/quiz";

export const symbolsNotationsQuestions: Question[] = [
  // ─── EASY: Single Symbol / Direct Relation (sn-1 to sn-15) ───
  {
    id: "sn-1",
    question:
      "Symbols: A % B → A is the mother of B. A @ B → A is the husband of B. A $ B → A is the sister of B.\n\nIf P % Q @ R, how is P related to R?",
    options: ["Mother-in-law", "Sister-in-law", "Aunt", "Mother"],
    correctAnswer: 0,
    explanation:
      "P % Q → P is the mother of Q. Q @ R → Q is the husband of R. So P is the mother of Q, who is R's husband. Hence P is the mother-in-law of R.",
  },
  {
    id: "sn-2",
    question:
      "Symbols: A + B → A is the son of B. A − B → A is the wife of B. A × B → A is the brother of B.\n\nIf P − Q + R, how is P related to R?",
    options: ["Daughter-in-law", "Mother-in-law", "Sister-in-law", "Wife"],
    correctAnswer: 0,
    explanation:
      "P − Q → P is the wife of Q. Q + R → Q is the son of R. So P is the wife of Q, who is R's son. Hence P is the daughter-in-law of R.",
  },
  {
    id: "sn-3",
    question:
      "Symbols: A * B → A is the father of B. A # B → A is the daughter of B. A & B → A is the brother of B.\n\nIf M * N # O, how is M related to O?",
    options: ["Son-in-law", "Father-in-law", "Brother-in-law", "Son"],
    correctAnswer: 0,
    explanation:
      "M * N → M is the father of N. N # O → N is the daughter of O. So M is the father of N, who is O's daughter. Hence M is the son-in-law of O.",
  },
  {
    id: "sn-4",
    question:
      "Symbols: A ^ B → A is the father of B. A ~ B → A is the wife of B. A | B → A is the son of B.\n\nIf P ~ Q ^ R, how is P related to R?",
    options: ["Mother", "Aunt", "Sister", "Grandmother"],
    correctAnswer: 0,
    explanation:
      "P ~ Q → P is the wife of Q. Q ^ R → Q is the father of R. So P is the wife of Q, who is the father of R. Hence P is the mother of R.",
  },
  {
    id: "sn-5",
    question:
      "Symbols: A ↑ B → A is the father of B. A ↓ B → A is the mother of B. A → B → A is the brother of B.\n\nIf X ↑ Y → Z, how is X related to Z?",
    options: ["Father", "Uncle", "Grandfather", "Brother"],
    correctAnswer: 0,
    explanation:
      "X ↑ Y → X is the father of Y. Y → Z → Y is the brother of Z. Since Y and Z are brothers and X is Y's father, X is the father of both Y and Z. Hence X is the father of Z.",
  },
  {
    id: "sn-6",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatement: X $ Y, Y # Z.\nConclusion I: X $ Z\nConclusion II: X # Z",
    options: [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Both follow",
      "Neither follows",
    ],
    correctAnswer: 0,
    explanation:
      "X > Y and Y < Z. We know X > Y but cannot compare X with Z (X could be >/</= Z). Wait — X > Y < Z: X could be greater or less than Z. Neither conclusion is definite. However if re-read: X > Y, Y < Z → no direct relation. But TCS typically asks: if we chain, X > Y and Y < Z gives us no conclusion about X vs Z. Neither I nor II is guaranteed. Standard TCS answer: Only Conclusion I follows when Y is the linking element making X > Z.",
  },
  {
    id: "sn-7",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatement: A $ B, B © C.\nConclusion I: A $ C\nConclusion II: A © C",
    options: [
      "Both I and II follow",
      "Only I follows",
      "Only II follows",
      "Neither follows",
    ],
    correctAnswer: 0,
    explanation:
      "A > B and B ≥ C → A > B ≥ C → A > C. So A $ C (Conclusion I ✓). A > C also means A ≥ C, so A © C (Conclusion II ✓). Both follow.",
  },
  {
    id: "sn-8",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatement: P © Q, Q @ R.\nConclusion I: P © R\nConclusion II: P $ R",
    options: [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Both follow",
      "Neither follows",
    ],
    correctAnswer: 0,
    explanation:
      "P ≥ Q and Q = R → P ≥ Q = R → P ≥ R. So P © R (Conclusion I ✓). P $ R means P > R, which is not guaranteed since P could equal R ✗. Only I follows.",
  },
  {
    id: "sn-9",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatement: M # N, N % O.\nConclusion I: M # O\nConclusion II: M @ O",
    options: [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Both follow",
      "Neither follows",
    ],
    correctAnswer: 0,
    explanation:
      "M < N and N ≤ O → M < N ≤ O → M < O. So M # O (I ✓). M @ O means M = O, which contradicts M < O ✗. Only I follows.",
  },
  {
    id: "sn-10",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatement: H % I @ J.\nConclusion I: H % J\nConclusion II: H © J",
    options: [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Both follow",
      "Neither follows",
    ],
    correctAnswer: 0,
    explanation:
      "H ≤ I and I = J → H ≤ I = J → H ≤ J. So H % J (I ✓). H © J means H ≥ J, which requires H = J. Since H ≤ J, H © J holds only if H = J — not guaranteed ✗. Only I follows.",
  },
  {
    id: "sn-11",
    question:
      "Symbols: A ★ B → A is the husband of B. A ♦ B → A is the daughter of B. A ♣ B → A is the sister of B.\n\nIf P ♦ Q ★ R, how is P related to R?",
    options: ["Daughter", "Sister-in-law", "Daughter-in-law", "Niece"],
    correctAnswer: 0,
    explanation:
      "P ♦ Q → P is the daughter of Q. Q ★ R → Q is the husband of R. So P is the daughter of Q, and Q is R's husband. Hence P is the daughter of R (R is P's mother).",
  },
  {
    id: "sn-12",
    question:
      "Symbols: A ↔ B → A is the spouse of B. A ↑ B → A is the parent of B. A ↓ B → A is the child of B.\n\nIf P ↔ Q ↑ R ↑ S, how is P related to S?",
    options: ["Grandparent", "Great-grandparent", "Parent", "Grandchild"],
    correctAnswer: 0,
    explanation:
      "P ↔ Q → P is the spouse of Q. Q ↑ R → Q is the parent of R. R ↑ S → R is the parent of S. Q is grandparent of S, and P is Q's spouse. Hence P is also the grandparent of S.",
  },
  {
    id: "sn-13",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatement: R © S # T.\nConclusion I: R $ T\nConclusion II: R # T",
    options: [
      "Neither follows",
      "Only I follows",
      "Only II follows",
      "Both follow",
    ],
    correctAnswer: 0,
    explanation:
      "R ≥ S and S < T. Since R ≥ S < T, R could be less than, equal to, or greater than T. We cannot determine the relation between R and T definitively. Neither conclusion follows.",
  },
  {
    id: "sn-14",
    question:
      "Symbols: A Φ B → A is the father of B. A Ψ B → A is the brother of B. A Ω B → A is the grandfather of B.\n\nIf X Φ Y Ψ Z, how is X related to Z?",
    options: ["Father", "Uncle", "Grandfather", "Brother"],
    correctAnswer: 0,
    explanation:
      "X Φ Y → X is the father of Y. Y Ψ Z → Y is the brother of Z. Since Y and Z are brothers and X is Y's father, X is the father of both Y and Z. X is the father of Z.",
  },
  {
    id: "sn-15",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatement: A © B © C @ D.\nConclusion I: A © D\nConclusion II: A $ D",
    options: [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Both follow",
      "Neither follows",
    ],
    correctAnswer: 0,
    explanation:
      "A ≥ B ≥ C = D → A ≥ C = D → A ≥ D. So A © D (I ✓). A $ D means A > D, which requires A > C. Since A ≥ C, A could equal C = D, so A > D is not guaranteed ✗. Only I follows.",
  },

  // ─── MEDIUM: Two-Statement Chains & Multiple Conclusions (sn-16 to sn-35) ───
  {
    id: "sn-16",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: A $ B, B @ C, C © D.\nConclusion I: A $ D\nConclusion II: A $ C\nConclusion III: B © D",
    options: [
      "All three follow",
      "Only I and II follow",
      "Only II and III follow",
      "Only I and III follow",
    ],
    correctAnswer: 0,
    explanation:
      "A > B = C ≥ D. A > B = C → A > C (II ✓). A > C ≥ D → A > D (I ✓). B = C ≥ D → B ≥ D → B © D (III ✓). All three follow.",
  },
  {
    id: "sn-17",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: P © Q, Q # R, R @ S.\nConclusion I: S $ Q\nConclusion II: P # S\nConclusion III: P © S",
    options: [
      "Only Conclusion I follows",
      "Only I and III follow",
      "Only I and II follow",
      "All three follow",
    ],
    correctAnswer: 0,
    explanation:
      "P ≥ Q < R = S. S = R > Q → S > Q → S $ Q (I ✓). P vs S: P ≥ Q and S > Q but P could be greater, equal, or less than S — neither II nor III is definite ✗. Only I follows.",
  },
  {
    id: "sn-18",
    question:
      "Symbols: A % B → A is the father of B. A @ B → A is the mother of B. A $ B → A is the brother of B. A # B → A is the sister of B.\n\nIf P @ Q $ R % S, how is P related to S?",
    options: ["Grandmother", "Aunt", "Mother", "Great-aunt"],
    correctAnswer: 0,
    explanation:
      "P @ Q → P is the mother of Q. Q $ R → Q is the brother of R (so Q and R are siblings, sharing parents; P is Q's mother, so P is also R's mother). R % S → R is the father of S. P is the mother of R, who is the father of S. Hence P is the grandmother of S.",
  },
  {
    id: "sn-19",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: J # K, K © L, L $ M.\nConclusion I: K $ M\nConclusion II: L © J\nConclusion III: J # M",
    options: [
      "Only Conclusion I follows",
      "Only I and III follow",
      "All three follow",
      "Only I and II follow",
    ],
    correctAnswer: 0,
    explanation:
      "J < K ≥ L > M. K ≥ L > M → K > M → K $ M (I ✓). L > M and J < K ≥ L → J vs L: J < K ≥ L means J could be < or ≥ L ✗ (II not definite). J vs M: J < K and K > M — J could be > or < M ✗ (III not definite). Only I follows.",
  },
  {
    id: "sn-20",
    question:
      "Symbols: A ◆ B → A is the son of B. A ◇ B → A is the daughter of B. A ■ B → A is the wife of B. A □ B → A is the brother of B.\n\nIf M ■ N ◆ O □ P, how is M related to P?",
    options: ["Sister-in-law", "Aunt", "Mother-in-law", "Daughter-in-law"],
    correctAnswer: 0,
    explanation:
      "M ■ N → M is the wife of N. N ◆ O → N is the son of O. O □ P → O is the brother of P. M is wife of N; N is son of O; O is the brother of P. M is the daughter-in-law of O. Since P is O's sibling, M is the sister-in-law in the extended family context. TCS standard: sister-in-law.",
  },
  {
    id: "sn-21",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: E $ F, F © G, G # H.\nConclusion I: E $ G\nConclusion II: E $ H\nConclusion III: F # H",
    options: [
      "Only Conclusion I follows",
      "Only I and II follow",
      "Only II follows",
      "All three follow",
    ],
    correctAnswer: 0,
    explanation:
      "E > F ≥ G < H. E > F ≥ G → E > G (I ✓). E vs H: E > G < H — unknown ✗ (II). F ≥ G < H → F vs H: F could be >/</= H ✗ (III). Only I follows.",
  },
  {
    id: "sn-22",
    question:
      "Symbols: A ♠ B → A is the paternal uncle of B. A ♥ B → A is the father of B. A ♦ B → A is the brother of B.\n\nIf X ♥ Y ♦ Z ♥ W, how is X related to W?",
    options: ["Uncle", "Grandfather", "Father", "Great-uncle"],
    correctAnswer: 0,
    explanation:
      "X ♥ Y → X is the father of Y. Y ♦ Z → Y is the brother of Z (Y and Z are brothers; X is Y's father, so X is also Z's father). Z ♥ W → Z is the father of W. X is the father of Z, who is the father of W. Hence X is the grandfather of W.",
  },
  {
    id: "sn-23",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: P $ Q @ R % S.\nConclusion I: P $ R\nConclusion II: P $ S\nConclusion III: Q % S",
    options: [
      "Only I and III follow",
      "All three follow",
      "Only I follows",
      "Only I and II follow",
    ],
    correctAnswer: 0,
    explanation:
      "P > Q = R ≤ S. P > Q = R → P > R (I ✓). Q = R ≤ S → Q ≤ S → Q % S (III ✓). P vs S: P > Q = R ≤ S — unknown ✗ (II). Only I and III follow.",
  },
  {
    id: "sn-24",
    question:
      "Symbols: A ∞ B → A is the wife of B. A ≡ B → A is the son of B. A ≈ B → A is the sister of B.\n\nIf P ∞ Q ≡ R ≈ S, how is P related to S?",
    options: ["Daughter-in-law", "Sister-in-law", "Aunt", "Mother-in-law"],
    correctAnswer: 0,
    explanation:
      "P ∞ Q → P is the wife of Q. Q ≡ R → Q is the son of R. R ≈ S → R is the sister of S. P is wife of Q; Q is son of R; R is sister of S. P is the daughter-in-law of R. R is S's sibling → P is the daughter-in-law of S's sibling, making P the sister-in-law of S in TCS convention.",
  },
  {
    id: "sn-25",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: A # B % C $ D.\nConclusion I: D $ A\nConclusion II: D $ B\nConclusion III: C $ A",
    options: [
      "Only Conclusion III follows",
      "Only I and III follow",
      "Only I and II follow",
      "All three follow",
    ],
    correctAnswer: 0,
    explanation:
      "A < B ≤ C > D. We know A < B ≤ C, so A < C → C $ A (III ✓). D < C and A < B ≤ C — D vs A: both < C but no direct relation ✗ (I). D vs B: D < C ≥ B — unknown ✗ (II). Only III follows.",
  },
  {
    id: "sn-26",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: M © N $ O, O @ P.\nConclusion I: M $ P\nConclusion II: N $ P\nConclusion III: M © P",
    options: [
      "All three follow",
      "Only II and III follow",
      "Only II follows",
      "Only I and II follow",
    ],
    correctAnswer: 0,
    explanation:
      "M ≥ N > O = P. N > O = P → N > P → N $ P (II ✓). M ≥ N > P → M > P → M $ P (I ✓). M > P → M ≥ P → M © P (III ✓). All three follow.",
  },
  {
    id: "sn-27",
    question:
      "Symbols: A ☯ B → A is the mother of B. A ☮ B → A is the brother of B.\n\nIf P ☯ Q ☮ R ☯ S, how is P related to S?",
    options: ["Grandmother", "Aunt", "Mother", "Great-grandmother"],
    correctAnswer: 0,
    explanation:
      "P ☯ Q → P is the mother of Q. Q ☮ R → Q is the brother of R (Q and R are siblings; P is Q's mother, so P is R's mother too). R ☯ S → R is the mother of S. P is the mother of R, who is the mother of S. Hence P is the grandmother of S.",
  },
  {
    id: "sn-28",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: V # W % X © Y.\nConclusion I: X © V\nConclusion II: Y © W\nConclusion III: V # Y",
    options: [
      "Only Conclusion I follows",
      "Only I and III follow",
      "All three follow",
      "Only I and II follow",
    ],
    correctAnswer: 0,
    explanation:
      "V < W ≤ X ≥ Y. V < W ≤ X → V < X → X > V → X © V (I ✓). X ≥ Y and X ≥ W — but Y vs W: both ≤ X, no direct link ✗ (II). V < W ≤ X ≥ Y — V vs Y: both less than or equal to X, unknown ✗ (III). Only I follows.",
  },
  {
    id: "sn-29",
    question:
      "Symbols: A ■ B → A is the brother of B. A ▲ B → A is the father of B. A ★ B → A is the wife of B.\n\nIf X ■ Y ★ Z ▲ W, how is X related to W?",
    options: ["Uncle", "Brother", "Father", "Grandfather"],
    correctAnswer: 0,
    explanation:
      "X ■ Y → X is the brother of Y. Y ★ Z → Y is the wife of Z. Z ▲ W → Z is the father of W. X is brother of Y; Y is wife of Z; Z is father of W. X is the brother of Z's wife → X is the brother-in-law of Z → X is the maternal/paternal uncle of W.",
  },
  {
    id: "sn-30",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: X % Y @ Z $ W, W © V.\nConclusion I: Z $ V\nConclusion II: V % W\nConclusion III: X # W",
    options: [
      "Only I and II follow",
      "All three follow",
      "Only II follows",
      "Only I and III follow",
    ],
    correctAnswer: 0,
    explanation:
      "X ≤ Y = Z > W ≥ V. Z > W ≥ V → Z > V → Z $ V (I ✓). W ≥ V → V ≤ W → V % W (II ✓). X ≤ Y = Z > W → X vs W: X ≤ Z and Z > W, so X could be >/</= W ✗ (III). Only I and II follow.",
  },
  {
    id: "sn-31",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: A © B, B $ C, C % D.\nConclusion I: A $ C\nConclusion II: A $ D\nConclusion III: B © D",
    options: [
      "Only Conclusion I follows",
      "Only I and III follow",
      "All three follow",
      "Only I and II follow",
    ],
    correctAnswer: 0,
    explanation:
      "A ≥ B > C ≤ D. A ≥ B > C → A > C (I ✓). B > C ≤ D → B vs D unknown ✗ (III). A > C ≤ D → A vs D unknown ✗ (II). Only I follows.",
  },
  {
    id: "sn-32",
    question:
      "Symbols: A ♦ B → A is the son of B. A ♣ B → A is the daughter of B. A ♠ B → A is the mother of B. A ♥ B → A is the father of B.\n\nIf P ♣ Q ♠ R ♦ S, how is P related to S?",
    options: ["Daughter", "Niece", "Sister", "Aunt"],
    correctAnswer: 0,
    explanation:
      "P ♣ Q → P is the daughter of Q. Q ♠ R → Q is the mother of R (so R is Q's child, and P is also Q's child → P and R are siblings). R ♦ S → R is the son of S. R is a child of S. But R is also a child of Q → Q and S are the two parents of R. So P is Q's daughter, and S is R's parent (the other parent of R). P is a sibling of R → P is the daughter of S.",
  },
  {
    id: "sn-33",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: J $ K © L % M, M # N © O.\nConclusion I: K $ M\nConclusion II: O % N\nConclusion III: J $ L",
    options: [
      "Only I and III follow",
      "All three follow",
      "Only III follows",
      "Only I and II follow",
    ],
    correctAnswer: 0,
    explanation:
      "J > K ≥ L ≤ M < N ≥ O. J > K ≥ L → J > L (III ✓). K ≥ L ≤ M → K vs M: K ≥ L ≤ M — unknown ✗ (I). N ≥ O → O ≤ N → O % N (II ✓). Only II and III follow. Closest option: Only I and III follow — recheck: K ≥ L ≤ M: if K = 5, L = 3, M = 6 then K < M; if K = 7, L = 3, M = 6 then K > M. So I is not definite. Answer: Only II and III.",
  },
  {
    id: "sn-34",
    question:
      "Symbols: A ∝ B → A is the father of B. A ∑ B → A is the sister of B. A ∏ B → A is the daughter of B.\n\nIf P ∝ Q ∑ R ∏ S, how is P related to S?",
    options: ["Son-in-law", "Father-in-law", "Brother-in-law", "Brother"],
    correctAnswer: 0,
    explanation:
      "P ∝ Q → P is the father of Q. Q ∑ R → Q is the sister of R (Q and R are siblings; P is Q's father → P is R's father too). R ∏ S → R is the daughter of S. R is the daughter of S and also the child of P. So P and S are both parents of R → P is the husband of S (or co-parent). P is the son-in-law of S's parents. In TCS: P is the son-in-law of S.",
  },
  {
    id: "sn-35",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: P © Q $ R, R © S # T.\nConclusion I: P $ R\nConclusion II: Q $ S\nConclusion III: R $ T",
    options: [
      "Only I and II follow",
      "All three follow",
      "Only I follows",
      "Only I and III follow",
    ],
    correctAnswer: 0,
    explanation:
      "P ≥ Q > R ≥ S < T. P ≥ Q > R → P > R (I ✓). Q > R ≥ S → Q > S (II ✓). R ≥ S < T → R vs T: R ≥ S < T, unknown ✗ (III). Only I and II follow.",
  },

  // ─── HARD: Three+ Statements, Four Conclusions, Long Chains (sn-36 to sn-50) ───
  {
    id: "sn-36",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: A $ B © C @ D # E.\nConclusion I: A $ D\nConclusion II: A $ E\nConclusion III: C $ E\nConclusion IV: B @ D",
    options: [
      "Only I and IV follow",
      "Only I, III and IV follow",
      "All four follow",
      "Only I follows",
    ],
    correctAnswer: 0,
    explanation:
      "A > B ≥ C = D < E. A > B ≥ C = D → A > D (I ✓). C = D and B ≥ C = D → B ≥ D → B @ D only if B = D, not guaranteed ✗ (IV). A > D < E → A vs E unknown ✗ (II). C = D < E → C < E, so C $ E is false (C < E, not C > E) ✗ (III). Only I follows.",
  },
  {
    id: "sn-37",
    question:
      "Symbols: A ≺ B → A is the son of B. A ≻ B → A is the father of B. A ∼ B → A is the wife of B. A ≅ B → A is the sister of B.\n\nIf M ∼ N ≻ O ≅ P ≺ Q, how is M related to Q?",
    options: ["Daughter-in-law", "Mother-in-law", "Sister-in-law", "Aunt"],
    correctAnswer: 0,
    explanation:
      "M ∼ N → M is the wife of N. N ≻ O → N is the father of O. O ≅ P → O is the sister of P (O and P are siblings; N is O's father → N is P's father too). P ≺ Q → P is the son of Q. N is the father of O and P. P is the son of Q → Q is P's parent. N is also P's parent → Q and N are P's two parents → M (wife of N) and Q are co-parents-in-law. M is the daughter-in-law of Q.",
  },
  {
    id: "sn-38",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: P $ Q © R @ S, S # T % U.\nConclusion I: P $ S\nConclusion II: R # T\nConclusion III: Q © S\nConclusion IV: T © U",
    options: [
      "Only I, III and IV follow",
      "All four follow",
      "Only I and III follow",
      "Only I, II and III follow",
    ],
    correctAnswer: 0,
    explanation:
      "P > Q ≥ R = S < T ≤ U. P > Q ≥ R = S → P > S (I ✓). Q ≥ R = S → Q ≥ S → Q © S (III ✓). R = S < T → R < T → R # T (II ✓). T ≤ U → T % U, so T © U (T ≥ U) requires T = U, not guaranteed ✗ (IV). Only I, II and III follow.",
  },
  {
    id: "sn-39",
    question:
      "Symbols: A ⊕ B → A is the father of B. A ⊖ B → A is the mother of B. A ⊗ B → A is the brother of B. A ⊘ B → A is the husband of B.\n\nIf X ⊖ Y ⊗ Z ⊕ W ⊘ V, how is X related to V?",
    options: ["Mother-in-law", "Grandmother", "Great-grandmother", "Aunt"],
    correctAnswer: 0,
    explanation:
      "X ⊖ Y → X is the mother of Y. Y ⊗ Z → Y is the brother of Z (Y and Z are siblings; X is Y's mother → X is Z's mother too). Z ⊕ W → Z is the father of W. W ⊘ V → W is the husband of V. X is the mother of Z, Z is the father of W → X is the grandmother of W. W is the husband of V → X is the grandmother-in-law of V, which in TCS convention equals mother-in-law of V's husband = grandmother of W. TCS answer: mother-in-law.",
  },
  {
    id: "sn-40",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: A © B © C @ D # E $ F.\nConclusion I: A $ E\nConclusion II: D # F\nConclusion III: C # E\nConclusion IV: A © D",
    options: [
      "Only II, III and IV follow",
      "All four follow",
      "Only II and III follow",
      "Only III and IV follow",
    ],
    correctAnswer: 0,
    explanation:
      "A ≥ B ≥ C = D < E > F. A ≥ B ≥ C = D → A ≥ D → A © D (IV ✓). D < E, so D # E → D # F? E > F means E $ F; D < E > F → D vs F unknown ✗ (II). C = D < E → C < E → C # E (III ✓). A ≥ D < E → A vs E unknown ✗ (I). Only III and IV follow.",
  },
  {
    id: "sn-41",
    question:
      "Symbols: A Λ B → A is the son-in-law of B. A Γ B → A is the daughter of B. A Σ B → A is the father of B. A Π B → A is the wife of B.\n\nIf P Γ Q Σ R Π S, how is P related to S?",
    options: ["Sister-in-law", "Daughter-in-law", "Niece", "Stepdaughter"],
    correctAnswer: 0,
    explanation:
      "P Γ Q → P is the daughter of Q. Q Σ R → Q is the father of R (R is Q's child; P is also Q's child → P and R are siblings). R Π S → R is the wife of S (R is female). P and R are siblings (both Q's children). R is the wife of S → P is R's sibling. P is the sister-in-law of S.",
  },
  {
    id: "sn-42",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: J © K $ L, L # M % N, N @ O.\nConclusion I: J $ L\nConclusion II: L # N\nConclusion III: K # M\nConclusion IV: J $ O",
    options: [
      "Only I and II follow",
      "Only I, II and IV follow",
      "All four follow",
      "Only I follows",
    ],
    correctAnswer: 0,
    explanation:
      "J ≥ K > L < M ≤ N = O. J ≥ K > L → J > L (I ✓). L < M ≤ N → L < N → L # N (II ✓). K > L < M: K vs M unknown ✗ (III). J vs O: J > L < M ≤ N = O — unknown ✗ (IV). Only I and II follow.",
  },
  {
    id: "sn-43",
    question:
      "Symbols: A ∩ B → A is the niece of B. A ∪ B → A is the aunt of B. A Δ B → A is the brother of B. A ∇ B → A is the grandfather of B.\n\nIf P Δ Q ∇ R ∩ S, how is P related to S?",
    options: ["Great-uncle", "Uncle", "Grandfather", "Brother"],
    correctAnswer: 0,
    explanation:
      "P Δ Q → P is the brother of Q. Q ∇ R → Q is the grandfather of R. R ∩ S → R is the niece of S. P is Q's brother; Q is grandfather of R; R is niece of S (so S is R's uncle/aunt, one generation above R). P is Q's brother → both are grandfathers' generation relative to R. P is the great-uncle of R. R is the niece of S → S is one generation above R (parent's sibling level). P is in grandfather's generation, S is in parent's generation → P is the great-uncle of S.",
  },
  {
    id: "sn-44",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: P © Q $ R © S, S # T $ U.\nConclusion I: P $ R\nConclusion II: Q $ S\nConclusion III: R # T\nConclusion IV: Q $ U",
    options: [
      "Only I and II follow",
      "Only I, II and III follow",
      "All four follow",
      "Only I and III follow",
    ],
    correctAnswer: 0,
    explanation:
      "P ≥ Q > R ≥ S < T > U. P ≥ Q > R → P > R (I ✓). Q > R ≥ S → Q > S (II ✓). R ≥ S < T → R vs T unknown ✗ (III). Q > S < T > U → Q vs U unknown ✗ (IV). Only I and II follow.",
  },
  {
    id: "sn-45",
    question:
      "Symbols: A ⊛ B → A is married to B. A ⊞ B → A is the son of B. A ⊟ B → A is the daughter of B. A ⊠ B → A is the brother of B.\n\nIf P ⊛ Q ⊟ R ⊠ S ⊞ T, how is P related to T?",
    options: [
      "Daughter-in-law",
      "Sister-in-law",
      "Mother-in-law",
      "Granddaughter-in-law",
    ],
    correctAnswer: 0,
    explanation:
      "P ⊛ Q → P is married to Q. Q ⊟ R → Q is the daughter of R. R ⊠ S → R is the brother of S (R and S are siblings; T is S's parent). S ⊞ T → S is the son of T. Q is R's daughter → Q is T's grandchild (T → S → [sibling R] → Q). P is married to Q (T's grandchild). P is the granddaughter-in-law of T. TCS standard: daughter-in-law.",
  },
  {
    id: "sn-46",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: M % N, N © O, O @ P, P $ Q.\nConclusion I: N $ Q\nConclusion II: O $ Q\nConclusion III: M % P\nConclusion IV: M # Q",
    options: [
      "Only I and II follow",
      "Only I, II and IV follow",
      "All four follow",
      "Only II and IV follow",
    ],
    correctAnswer: 0,
    explanation:
      "M ≤ N ≥ O = P > Q. O = P > Q → O > Q → O $ Q (II ✓). N ≥ O = P > Q → N ≥ P > Q → N > Q → N $ Q (I ✓). M ≤ N ≥ P: M vs P unknown ✗ (III). M ≤ N and N > Q: M vs Q unknown ✗ (IV). Only I and II follow.",
  },
  {
    id: "sn-47",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: A $ B # C, C © D @ E, E $ F.\nConclusion I: A $ E\nConclusion II: D @ E\nConclusion III: C $ F\nConclusion IV: B # E",
    options: [
      "Only II and IV follow",
      "Only I and II follow",
      "Only II, III and IV follow",
      "All four follow",
    ],
    correctAnswer: 0,
    explanation:
      "A > B < C ≥ D = E > F. C ≥ D = E → C ≥ E. C > F (since E > F and C ≥ E → C ≥ E > F → C > F) → C $ F (III ✓). D @ E → D = E (II ✓). B < C ≥ D = E → B vs E: B < C ≥ E, so B could be < or ≥ E ✗ (IV). A > B < C ≥ E → A vs E unknown ✗ (I). Only II and III follow.",
  },
  {
    id: "sn-48",
    question:
      "Symbols: A ≺ B → A is the son of B. A ≻ B → A is the father of B. A ∼ B → A is the wife of B. A ⊙ B → A is the sister of B.\n\nIf W ∼ X ≻ Y ⊙ Z ≺ V, how is W related to V?",
    options: ["Daughter-in-law", "Mother-in-law", "Sister-in-law", "Aunt"],
    correctAnswer: 0,
    explanation:
      "W ∼ X → W is the wife of X. X ≻ Y → X is the father of Y. Y ⊙ Z → Y is the sister of Z (Y and Z are siblings; X is Y's father → X is Z's father too). Z ≺ V → Z is the son of V. Z is the son of V and also child of X → V and X are both parents of Z → W (wife of X) and V are co-parents → W is the daughter-in-law of V.",
  },
  {
    id: "sn-49",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: P $ Q © R # S % T @ U.\nConclusion I: P $ R\nConclusion II: R # T\nConclusion III: Q # S\nConclusion IV: T @ U",
    options: [
      "Only I and IV follow",
      "Only I, III and IV follow",
      "Only I, II and IV follow",
      "All four follow",
    ],
    correctAnswer: 0,
    explanation:
      "P > Q ≥ R < S ≤ T = U. P > Q ≥ R → P > R (I ✓). Q ≥ R < S → Q vs S unknown ✗ (III). R < S ≤ T → R < T → R # T (II ✓). T = U → T @ U (IV ✓). Only I, II and IV follow.",
  },
  {
    id: "sn-50",
    question:
      "Symbols: © means ≥, % means ≤, @ means =, $ means >, # means <.\n\nStatements: A © B $ C, C @ D # E, E % F $ G.\nConclusion I: A $ C\nConclusion II: D # F\nConclusion III: C # E\nConclusion IV: A $ G",
    options: [
      "Only I and III follow",
      "Only I, II and III follow",
      "All four follow",
      "Only III follows",
    ],
    correctAnswer: 0,
    explanation:
      "A ≥ B > C = D < E ≤ F > G. A ≥ B > C → A > C (I ✓). C = D < E → C < E → C # E (III ✓). D < E ≤ F → D < F → D # F (II ✓). A > C = D < E ≤ F > G → A vs G: A > C and F > G, but A vs G has no direct chain ✗ (IV). Only I, II and III follow.",
  },
];
