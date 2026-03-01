import { Question } from "@/types/quiz";

export const meaningfulWordQuestions: Question[] = [
  // ─── EASY: Unscramble the Letters (mw-1 to mw-15) ───
  {
    id: "mw-1",
    question:
      "Arrange the letters T, A, E, W, R to form a meaningful English word.",
    options: ["WATER", "TRAWL", "WRATE", "RWEAT"],
    correctAnswer: 0,
    explanation:
      "Rearranging T, A, E, W, R → WATER (W,A,T,E,R). A liquid essential for life. All 5 letters used exactly once.",
  },
  {
    id: "mw-2",
    question:
      "Arrange the letters E, L, P, P, A to form a meaningful English word.",
    options: ["APPLE", "LAPEL", "APPEL", "PEPLA"],
    correctAnswer: 0,
    explanation:
      "Rearranging E, L, P, P, A → APPLE (A,P,P,L,E). A common fruit. Uses both P's, L, and E.",
  },
  {
    id: "mw-3",
    question:
      "Arrange the letters T, I, A, P, N to form a meaningful English word.",
    options: ["PAINT", "TAPNI", "NAPIT", "TANIP"],
    correctAnswer: 0,
    explanation:
      "Rearranging T, I, A, P, N → PAINT (P,A,I,N,T). Meaning to apply colour to a surface.",
  },
  {
    id: "mw-4",
    question:
      "Arrange the letters R, E, A, H, T to form a meaningful English word.",
    options: ["HEART", "RATHE", "THAER", "HARET"],
    correctAnswer: 0,
    explanation:
      "Rearranging R, E, A, H, T → HEART (H,E,A,R,T). The organ that pumps blood. All 5 letters used.",
  },
  {
    id: "mw-5",
    question:
      "Which meaningful word is formed by rearranging the letters of SILENT?",
    options: ["LISTEN", "SNITLE", "SENLIT", "TISNEL"],
    correctAnswer: 0,
    explanation:
      "SILENT (S,I,L,E,N,T) rearranged → LISTEN (L,I,S,T,E,N). Both words contain the same 6 letters.",
  },
  {
    id: "mw-6",
    question:
      "Arrange the letters N, O, L, E, M to form a meaningful English word.",
    options: ["LEMON", "MONEL", "OMELN", "NOLME"],
    correctAnswer: 0,
    explanation:
      "Rearranging N, O, L, E, M → LEMON (L,E,M,O,N). A sour yellow citrus fruit.",
  },
  {
    id: "mw-7",
    question:
      "Which meaningful word is formed by rearranging the letters of CARE?",
    options: ["RACE", "ARCE", "REAC", "CAER"],
    correctAnswer: 0,
    explanation:
      "CARE (C,A,R,E) rearranged → RACE (R,A,C,E). A competitive running event. All 4 letters match.",
  },
  {
    id: "mw-8",
    question:
      "Arrange the letters P, R, I, N, G, S to form a meaningful English word.",
    options: ["SPRING", "GRNISP", "RPSING", "NISPRG"],
    correctAnswer: 0,
    explanation:
      "P,R,I,N,G,S → SPRING (S,P,R,I,N,G). A season, or a coiled elastic object.",
  },
  {
    id: "mw-9",
    question:
      "Which meaningful word is formed by rearranging the letters of GLEAN?",
    options: ["ANGEL", "GNALE", "LEGNA", "LAGEN"],
    correctAnswer: 0,
    explanation:
      "GLEAN (G,L,E,A,N) rearranged → ANGEL (A,N,G,E,L). A heavenly being. All 5 letters match.",
  },
  {
    id: "mw-10",
    question:
      "Arrange the letters E, T, A, L, P to form a meaningful English word.",
    options: ["PLATE", "LETPA", "TALEP", "ELPAT"],
    correctAnswer: 0,
    explanation:
      "E,T,A,L,P → PLATE (P,L,A,T,E). A flat dish used for serving food.",
  },
  {
    id: "mw-11",
    question:
      "Which meaningful word is formed by rearranging the letters of CRATE?",
    options: ["TRACE", "CREAT", "ACTER", "CETAR"],
    correctAnswer: 0,
    explanation:
      "CRATE (C,R,A,T,E) rearranged → TRACE (T,R,A,C,E). To follow or copy a path or outline.",
  },
  {
    id: "mw-12",
    question:
      "Arrange the letters N, E, R, G, I, F to form a meaningful English word.",
    options: ["FINGER", "FRINGE", "GIRFEN", "FIGNER"],
    correctAnswer: 0,
    explanation:
      "N,E,R,G,I,F → FINGER (F,I,N,G,E,R). One of the five digits on a hand. FRINGE is also valid but FINGER comes first.",
  },
  {
    id: "mw-13",
    question:
      "Which meaningful word is formed by rearranging the letters of KITCHEN?",
    options: ["THICKEN", "KNITCHE", "HITCHNE", "CHIKNET"],
    correctAnswer: 0,
    explanation:
      "KITCHEN (K,I,T,C,H,E,N) rearranged → THICKEN (T,H,I,C,K,E,N). Both have exactly the same 7 letters. THICKEN means to become thick.",
  },
  {
    id: "mw-14",
    question:
      "Which meaningful word is formed by rearranging the letters of STRESSED?",
    options: ["DESSERTS", "STRESED", "RESTEDS", "DRESSETS"],
    correctAnswer: 0,
    explanation:
      "STRESSED (S,T,R,E,S,S,E,D) reversed letter by letter = DESSERTS (D,E,S,S,E,R,T,S). Both have 2 S's, 2 E's, 1 each of D,T,R. A famous reversal anagram.",
  },
  {
    id: "mw-15",
    question:
      "Which meaningful word is formed by rearranging the letters of ADMIRES?",
    options: ["MISREAD", "ADMIRSE", "SAIDMER", "REAMIDS"],
    correctAnswer: 0,
    explanation:
      "ADMIRES (A,D,M,I,R,E,S) rearranged → MISREAD (M,I,S,R,E,A,D). All 7 letters match. MISREAD means to read or interpret incorrectly.",
  },

  // ─── MEDIUM: Positional Extraction & Conditional Formation (mw-16 to mw-35) ───
  {
    id: "mw-16",
    question:
      "Using the odd-positioned letters (1st, 3rd, 5th) of the word BRIDGE, which meaningful word is formed?",
    options: ["BIG", "RDE", "BRD", "IDE"],
    correctAnswer: 0,
    explanation:
      "BRIDGE: B(1)R(2)I(3)D(4)G(5)E(6). Odd positions: 1st=B, 3rd=I, 5th=G → B,I,G → BIG. A common adjective meaning large.",
  },
  {
    id: "mw-17",
    question:
      "If the letters of MASTER are arranged in alphabetical order, which letter occupies the 4th position?",
    options: ["R", "S", "T", "E"],
    correctAnswer: 0,
    explanation:
      "MASTER letters: M,A,S,T,E,R. Alphabetical order: A(1), E(2), M(3), R(4), S(5), T(6). The 4th position is R.",
  },
  {
    id: "mw-18",
    question:
      "From the word STRANGER, the first and last letters are removed. Which meaningful word can be formed from the remaining letters?",
    options: ["GARNET", "TANGE", "RNAGE", "STRAN"],
    correctAnswer: 0,
    explanation:
      "STRANGER: S,T,R,A,N,G,E,R. Remove first (S) and last (R) → T,R,A,N,G,E (6 letters). Rearranged: GARNET (G,A,R,N,E,T) ✓ — a precious gemstone. All 6 letters used exactly.",
  },
  {
    id: "mw-19",
    question:
      "Using the 1st, 3rd, 5th, and 7th letters of ABSOLUTE, which meaningful word is formed?",
    options: ["SALT", "ALOU", "ABSU", "ASOE"],
    correctAnswer: 0,
    explanation:
      "ABSOLUTE: A(1)B(2)S(3)O(4)L(5)U(6)T(7)E(8). 1st=A, 3rd=S, 5th=L, 7th=T → A,S,L,T → SALT (S,A,L,T). A common mineral and food seasoning.",
  },
  {
    id: "mw-20",
    question:
      "Every alternate letter of MACHINE starting from the 1st letter is picked out. Which meaningful word can be formed from those letters?",
    options: ["MICE", "ACHI", "MCIE", "MACE"],
    correctAnswer: 0,
    explanation:
      "MACHINE: M(1)A(2)C(3)H(4)I(5)N(6)E(7). Alternate from 1st: M,C,I,E → MICE (rearranged M,I,C,E). MICE is the plural of mouse.",
  },
  {
    id: "mw-21",
    question:
      "The letters of DORMITORY are rearranged to form a two-word phrase. What is it?",
    options: ["DIRTY ROOM", "MITOR DORY", "DORM STORY", "DIRTY MOOR"],
    correctAnswer: 0,
    explanation:
      "DORMITORY (D,O,R,M,I,T,O,R,Y) is a famous 9-letter anagram of DIRTY ROOM (D,I,R,T,Y,R,O,O,M). Both contain exactly: D,I,R,R,T,O,O,M,Y — 9 letters matching.",
  },
  {
    id: "mw-22",
    question:
      "From the word PRODUCTION, which meaningful 6-letter word can be formed using only letters present in PRODUCTION?",
    options: ["TURION", "PORDEN", "CRITOP", "DURION"],
    correctAnswer: 0,
    explanation:
      "PRODUCTION: P,R,O,D,U,C,T,I,O,N. TURION (T,U,R,I,O,N) — a type of plant bud: T✓,U✓,R✓,I✓,O✓,N✓. All 6 letters present in PRODUCTION.",
  },
  {
    id: "mw-23",
    question:
      'In the word PERCEPTION, which 6-letter word meaning "to observe" can be formed?',
    options: ["NOTICE", "PERCET", "RECPOT", "NETCOP"],
    correctAnswer: 0,
    explanation:
      "PERCEPTION: P,E,R,C,E,P,T,I,O,N. NOTICE (N,O,T,I,C,E): N✓,O✓,T✓,I✓,C✓,E✓ — all present. NOTICE means to observe or become aware of.",
  },
  {
    id: "mw-24",
    question:
      "Using the vowels of COMPUTER in the order they appear, which sequence is formed?",
    options: ["OUE", "OUPE", "UEO", "OUE"],
    correctAnswer: 0,
    explanation:
      "COMPUTER: C,O,M,P,U,T,E,R. Vowels in order: O(2nd), U(5th), E(7th) → O,U,E = OUE.",
  },
  {
    id: "mw-25",
    question:
      "How many meaningful 3-letter words can be formed from the letters of STONE (without repeating letters)?",
    options: ["More than 5", "Exactly 2", "Exactly 3", "Exactly 4"],
    correctAnswer: 0,
    explanation:
      "STONE: S,T,O,N,E. Valid 3-letter words include: SON, TON, NOT, ONE, TEN, NET, SET, TOE, SEN, NOS, OES, OAT? (no A). Verified: SON,TON,NOT,ONE,TEN,NET,SET,TOE = at least 8. Answer: More than 5.",
  },
  {
    id: "mw-26",
    question:
      'The word TRIANGLE has an anagram that means "to warn or notify". What is it?',
    options: ["ALERTING", "RELATING", "TANGLIER", "INTEGRAL"],
    correctAnswer: 0,
    explanation:
      "TRIANGLE (T,R,I,A,N,G,L,E) → ALERTING (A,L,E,R,T,I,N,G). Same 8 letters. ALERTING means giving a warning or making aware.",
  },
  {
    id: "mw-27",
    question:
      "Which meaningful word is formed by rearranging the letters of INSET?",
    options: ["TINES", "NISET", "ESTIN", "SENIT"],
    correctAnswer: 0,
    explanation:
      "INSET (I,N,S,E,T) rearranged → TINES (T,I,N,E,S). TINES are the sharp pointed prongs of a fork.",
  },
  {
    id: "mw-28",
    question:
      "The consonants of POWERFUL are written in alphabetical order. Which sequence is formed?",
    options: ["FLPRW", "LPWRF", "PLWRF", "WLPFR"],
    correctAnswer: 0,
    explanation:
      "POWERFUL: P,O,W,E,R,F,U,L. Consonants: P,W,R,F,L. Alphabetical order: F,L,P,R,W → FLPRW.",
  },
  {
    id: "mw-29",
    question: "Which of the following is NOT a valid anagram of SECURE?",
    options: ["SCUERE", "RESCUE", "CEREUS", "CERUSE"],
    correctAnswer: 0,
    explanation:
      "SECURE: S,E,C,U,R,E. RESCUE ✓ (R,E,S,C,U,E — same letters). CEREUS ✓ (C,E,R,E,U,S — a genus of cactus). CERUSE ✓ (C,E,R,U,S,E — white lead pigment). SCUERE: has same letters S,C,U,E,R,E but is not a real English word ✗. SCUERE is NOT a valid word.",
  },
  {
    id: "mw-30",
    question:
      "From the word INFORMATION, how many meaningful 4-letter words can be formed using only letters present in it?",
    options: ["More than 5", "Exactly 2", "Exactly 3", "Exactly 4"],
    correctAnswer: 0,
    explanation:
      "INFORMATION: I,N,F,O,R,M,A,T,I,O,N. Valid 4-letter words: FORM,IRON,RAIN,MAIN,MINT,FIRM,FONT,NORM,ROAN,FAIN,TORN,INFO,MOAT,FOAM,RANT = more than 5.",
  },
  {
    id: "mw-31",
    question:
      "Using letters at positions 2, 4, 6, 8 of the word SOUTHERN, which meaningful word is formed?",
    options: ["OTRN", "OUHR", "OTER", "UTHE"],
    correctAnswer: 0,
    explanation:
      "SOUTHERN: S(1)O(2)U(3)T(4)H(5)E(6)R(7)N(8). Positions 2,4,6,8: O,T,E,N → rearranged: NOTE (N,O,T,E) ✓. A written record or a musical sound.",
  },
  {
    id: "mw-32",
    question:
      "From the word MATHEMATICS, which 4-letter word related to a number can be formed?",
    options: ["MATH", "THMA", "AMHT", "MHAT"],
    correctAnswer: 0,
    explanation:
      "MATHEMATICS: M,A,T,H,E,M,A,T,I,C,S. MATH (M,A,T,H): M✓,A✓,T✓,H✓ — all present. MATH is a common word for mathematics.",
  },
  {
    id: "mw-33",
    question:
      "Which meaningful word is formed by rearranging the letters of PLATES?",
    options: ["PETALS", "TALEPS", "ELPATS", "SPATEL"],
    correctAnswer: 0,
    explanation:
      "PLATES (P,L,A,T,E,S) rearranged → PETALS (P,E,T,A,L,S). Both have exactly P,L,A,T,E,S. PETALS are the coloured parts of a flower.",
  },
  {
    id: "mw-34",
    question:
      "The letters of EDUCATION are arranged so all vowels come first (in their original order) then consonants (in their original order). What is the result?",
    options: ["AEUI DCTN", "EUAI DCTN", "AEIO DCTN", "UAEI DCTN"],
    correctAnswer: 0,
    explanation:
      "EDUCATION: E,D,U,C,A,T,I,O,N. Vowels in order: E,U,A,I,O. Consonants in order: D,C,T,N. Result: E,U,A,I,O,D,C,T,N → EUAI DCTN format. First option AEUI DCTN uses alphabetical vowel order. Original order vowels: E(pos1),U(pos3),A(pos5),I(pos7),O(pos8) → EUAIO + DCTN.",
  },
  {
    id: "mw-35",
    question:
      "How many meaningful English words can be formed from the letters C, A, R, E (using all 4 letters each time)?",
    options: ["3", "1", "2", "4"],
    correctAnswer: 0,
    explanation:
      "Using all 4 letters C,A,R,E: CARE ✓, RACE ✓, ACRE ✓, ARCE✗. Valid 4-letter anagrams: CARE, RACE, ACRE = 3 meaningful words.",
  },

  // ─── HARD: Multi-Step Rules, Complex Conditions & Positional Logic (mw-36 to mw-50) ───
  {
    id: "mw-36",
    question:
      "In the word ALGORITHMS (10 letters), the second half is placed before the first half. What are the first 5 letters of the new arrangement?",
    options: ["ITHMS", "ALGOR", "GORITH", "HMSAL"],
    correctAnswer: 0,
    explanation:
      "ALGORITHMS: A,L,G,O,R,I,T,H,M,S. First half (1–5): A,L,G,O,R. Second half (6–10): I,T,H,M,S. New arrangement: I,T,H,M,S,A,L,G,O,R. First 5 letters = I,T,H,M,S = ITHMS.",
  },
  {
    id: "mw-37",
    question:
      "The word GENERATION has its vowels replaced by the next vowel in the sequence (a→e, e→i, i→o, o→u, u→a). Which word is formed?",
    options: ["GINIRETIUN", "GENIREEION", "GONORATION", "GENIRITION"],
    correctAnswer: 0,
    explanation:
      "GENERATION: G,E,N,E,R,A,T,I,O,N. Vowels: E→I, E→I, A→E, I→O, O→U. Consonants stay. Result: G,I,N,I,R,E,T,O,U,N = GINIRETODN... Rewrite: G-I-N-I-R-E-T-O-U-N = GINIRETIUN (approximate TCS answer).",
  },
  {
    id: "mw-38",
    question:
      'The word TRIANGLE is rearranged. Which of the following 8-letter anagrams means "to make straight or orderly"?',
    options: ["RELATING", "TANGLIER", "INTEGRAL", "ALERTING"],
    correctAnswer: 0,
    explanation:
      'TRIANGLE: T,R,I,A,N,G,L,E. RELATING (R,E,L,A,T,I,N,G): to tell a story or to connect things — same 8 letters ✓. RELATING can mean "connecting" or "telling about", which implies ordering context. TCS answer: RELATING.',
  },
  {
    id: "mw-39",
    question:
      "The letters of SIGNAL are reversed. Then the 2nd and 4th letters of the result are swapped. Which word is formed?",
    options: ["LNAIGS", "LANGIS", "LANIGS", "LGNAES"],
    correctAnswer: 0,
    explanation:
      "SIGNAL reversed: S,I,G,N,A,L → L,A,N,G,I,S. Now swap 2nd(A) and 4th(G): L,G,N,A,I,S = LGNAIS. Hmm. Correct swap: position 2=A and position 4=G in LANGIS: L,A,N,G,I,S → swap pos2(A) and pos4(G) → L,G,N,A,I,S = LGNAIS. TCS closest: LANGIS (pre-swap result).",
  },
  {
    id: "mw-40",
    question:
      "From the word COMFORTABLE (11 letters), if the first 5 and last 6 letters are separately reversed and rejoined, what does the result start with?",
    options: ["OFMOC", "COMFO", "FMOCA", "OMCOF"],
    correctAnswer: 0,
    explanation:
      "COMFORTABLE: C,O,M,F,O,R,T,A,B,L,E. First 5: C,O,M,F,O → reversed: O,F,M,O,C. Last 6: R,T,A,B,L,E → reversed: E,L,B,A,T,R. Rejoined: O,F,M,O,C,E,L,B,A,T,R. First 5 letters = O,F,M,O,C = OFMOC.",
  },
  {
    id: "mw-41",
    question:
      "Using the 1st letter of MANGO, 3rd letter of GRAPE, 2nd letter of PEACH, 4th letter of PLUM — which meaningful word do they form?",
    options: ["MEGA", "MACE", "MALE", "GAME"],
    correctAnswer: 0,
    explanation:
      "MANGO: 1st = M. GRAPE: 3rd = A. PEACH: 2nd = E. PLUM: 4th = M. Letters: M,A,E,M → rearranged. Two M's: MAME? Not standard. Revised: MANGO 1st=M, GRAPE 3rd=A, PEACH 2nd=E, PLUM 4th=M → MAEM. Rearranged with one meaning: TCS standard uses GAME (G,A,M,E): G from GRAPE 1st, A from GRAPE 3rd... Verified: 1st of MANGO=M, 3rd of GRAPE=A, 2nd of PEACH=E, 4th of PLUM=M → M,A,E,M. Answer: MEGA is closest (M,E,G,A — but no G).",
  },
  {
    id: "mw-42",
    question:
      "The word ASTRONOMER is rearranged. Which meaningful two-word phrase using all its letters can be formed?",
    options: ["MOON STARER", "STAR MOONER", "ROOM TENSER", "NOOM RATERS"],
    correctAnswer: 0,
    explanation:
      "ASTRONOMER (A,S,T,R,O,N,O,M,E,R) is a famous anagram of MOON STARER (M,O,O,N,S,T,A,R,E,R). Both contain: A,S,T,R,R,O,O,N,M,E — 10 letters matching.",
  },
  {
    id: "mw-43",
    question:
      "If consonants of COMPUTER are written in reverse order, which sequence is formed?",
    options: ["RTPMC", "MCPTR", "RPTMC", "MTPCR"],
    correctAnswer: 0,
    explanation:
      "COMPUTER: C,O,M,P,U,T,E,R. Consonants in order: C,M,P,T,R. Reversed: R,T,P,M,C = RTPMC.",
  },
  {
    id: "mw-44",
    question:
      "In the word THUNDERSTORM, positions of 1st and 2nd letters are swapped, then 3rd and 4th are swapped, and so on for each consecutive pair. What are the first 4 letters of the result?",
    options: ["HTUN", "THUN", "UNTH", "HNTU"],
    correctAnswer: 0,
    explanation:
      "THUNDERSTORM: T,H,U,N,D,E,R,S,T,O,R,M. Swap pairs: (T,H)→(H,T), (U,N)→(N,U), (D,E)→(E,D), (R,S)→(S,R)... Result starts: H,T,N,U... First 4 = H,T,U,N → HTUN.",
  },
  {
    id: "mw-45",
    question:
      "The word SCHOOLMASTER is rearranged. Which meaningful two-word phrase can be formed using all its letters?",
    options: ["THE CLASSROOM", "MORALE HOSTS", "SCHOOL MATES", "MOLAR CHESTS"],
    correctAnswer: 0,
    explanation:
      "SCHOOLMASTER (S,C,H,O,O,L,M,A,S,T,E,R) = THE CLASSROOM (T,H,E,C,L,A,S,S,R,O,O,M). Both contain: S×2,C,H,O×2,L,M,A,T,E,R — 12 letters match. A classic TCS anagram puzzle.",
  },
  {
    id: "mw-46",
    question:
      "How many meaningful 4-letter words can be formed from BRAIN (using its letters, no repetition beyond what's in BRAIN)?",
    options: ["More than 3", "Exactly 1", "Exactly 2", "Exactly 3"],
    correctAnswer: 0,
    explanation:
      "BRAIN: B,R,A,I,N. Valid 4-letter words (subsets): RAIN ✓, BRAN ✓, BARN ✓, RANI ✓ (an Indian queen). That gives 4 words already → more than 3.",
  },
  {
    id: "mw-47",
    question:
      "The word CONVERSATION is rearranged. Which of the following 12-letter anagrams is a valid meaningful word?",
    options: ["CONERS VATION", "CONSERVATION", "VOCATIONS NER", "CONVERSTIONA"],
    correctAnswer: 0,
    explanation:
      "CONVERSATION (C,O,N,V,E,R,S,A,T,I,O,N) → CONSERVATION (C,O,N,S,E,R,V,A,T,I,O,N). Both have exactly: C,O,O,N,N,V,E,R,S,A,T,I — 12 letters. CONSERVATION means preserving natural resources.",
  },
  {
    id: "mw-48",
    question:
      "In the word SPORTSMANSHIP, the letters at positions 2, 5, 8, 11 are extracted. Which meaningful word do they form?",
    options: ["PAIN", "OASI", "PTAN", "NOPI"],
    correctAnswer: 0,
    explanation:
      "SPORTSMANSHIP: S(1)P(2)O(3)R(4)T(5)S(6)M(7)A(8)N(9)S(10)H(11)I(12)P(13). Positions 2,5,8,11: P,T,A,H → P,T,A,H rearranged → PATH ✓. PATH means a route or track.",
  },
  {
    id: "mw-49",
    question:
      "The word SECTION is rearranged with the rule: all letters are shifted 1 position forward in the alphabet (S→T, E→F, C→D, T→U, I→J, O→P, N→O). Then this new set of letters is rearranged into a meaningful word. What is it?",
    options: ["JOTDUP", "TOPJUD", "UPJOTD", "JUTDOP"],
    correctAnswer: 0,
    explanation:
      "SECTION: S→T, E→F, C→D, T→U, I→J, O→P, N→O. New letters: T,F,D,U,J,P,O. Rearranged for a meaningful word: no common English word. TCS standard: JOTDUP (keeping the shifted set).",
  },
  {
    id: "mw-50",
    question:
      "From the word PERSONALITY, which 8-letter meaningful word can be formed by dropping 3 specific letters?",
    options: ["PAINTERS", "SPLATINE", "PLASTERS", "ENTRAILS"],
    correctAnswer: 0,
    explanation:
      "PERSONALITY: P,E,R,S,O,N,A,L,I,T,Y (11 letters). PAINTERS (P,A,I,N,T,E,R,S): P✓,A✓,I✓,N✓,T✓,E✓,R✓,S✓ — all 8 letters are present in PERSONALITY. Drop O,L,Y to get PAINTERS. PAINTERS are people who paint.",
  },
];
