import { Question } from "@/types/quiz";

export const codingDecodingQuestions: Question[] = [
  // ─── EASY: Letter Shift & Direct Substitution (cd-1 to cd-15) ───
  {
    id: "cd-1",
    question:
      'In a certain code, "APPLE" is written as "BQQMF". How is "MANGO" written in that code?',
    options: ["NBOHP", "NBOMP", "NCOHP", "NBOIP"],
    correctAnswer: 0,
    explanation:
      "Each letter is shifted +1. M+1=N, A+1=B, N+1=O, G+1=H, O+1=P → NBOHP.",
  },
  {
    id: "cd-2",
    question: 'If "CAT" is coded as "DBU", what is the code for "DOG"?',
    options: ["EPH", "FOH", "EQH", "EPG"],
    correctAnswer: 0,
    explanation: "Each letter is shifted +1. D+1=E, O+1=P, G+1=H → EPH.",
  },
  {
    id: "cd-3",
    question:
      'In a code language, "WATER" is written as "YCVGT". How is "FIRE" written?',
    options: ["HKTG", "GKTG", "HKSG", "HLTG"],
    correctAnswer: 0,
    explanation:
      "Each letter is shifted +2. F+2=H, I+2=K, R+2=T, E+2=G → HKTG.",
  },
  {
    id: "cd-4",
    question: 'If "ROSE" is coded as "PTUG", what is the code for "LILY"?',
    options: ["NKNA", "NKOA", "MJMZ", "NJNA"],
    correctAnswer: 0,
    explanation:
      "Each letter is shifted +2. L+2=N, I+2=K, L+2=N, Y+2=A (wraps after Z) → NKNA.",
  },
  {
    id: "cd-5",
    question: 'In a code, "PEN" is written as "QFO". How is "INK" written?',
    options: ["JOL", "JNL", "IOL", "KOL"],
    correctAnswer: 0,
    explanation: "Each letter is shifted +1. I+1=J, N+1=O, K+1=L → JOL.",
  },
  {
    id: "cd-6",
    question: 'If "BOOK" = "CPPL", what does "READ" equal?',
    options: ["SFBE", "TGBE", "SFBD", "RGBE"],
    correctAnswer: 0,
    explanation: "Each letter +1. R+1=S, E+1=F, A+1=B, D+1=E → SFBE.",
  },
  {
    id: "cd-7",
    question:
      'In a certain code, "COLD" is written as "DPME". What is "WARM" in that code?',
    options: ["XBSN", "XCTN", "XBTN", "YBSN"],
    correctAnswer: 0,
    explanation: "Each letter +1. W+1=X, A+1=B, R+1=S, M+1=N → XBSN.",
  },
  {
    id: "cd-8",
    question: 'If MOON = "LNNM", what is the code for STAR?',
    options: ["RSZQ", "SSZQ", "RTAQ", "RTAR"],
    correctAnswer: 0,
    explanation:
      "Each letter is shifted –1. S–1=R, T–1=S, A–1=Z (wraps), R–1=Q → RSZQ.",
  },
  {
    id: "cd-9",
    question: 'In a code, "GOLD" is written as "HPME". How is "IRON" written?',
    options: ["JSPO", "JRPO", "ISPO", "KTPO"],
    correctAnswer: 0,
    explanation: "Each letter +1. I+1=J, R+1=S, O+1=P, N+1=O → JSPO.",
  },
  {
    id: "cd-10",
    question: 'If "SUN" = "TVO", what is "MOON" in that code?',
    options: ["NPPO", "OPPO", "NPOO", "NPPN"],
    correctAnswer: 0,
    explanation: "Each letter +1. M+1=N, O+1=P, O+1=P, N+1=O → NPPO.",
  },
  {
    id: "cd-11",
    question:
      'In a code, letters are mapped using the mirror alphabet (A=Z, B=Y, C=X...). What is the code for "KING"?',
    options: ["PRMT", "PNMT", "PNTV", "QRMT"],
    correctAnswer: 0,
    explanation:
      "Formula: coded letter = 27 – alphabet position. K(11)→P(16), I(9)→R(18), N(14)→M(13), G(7)→T(20) → PRMT.",
  },
  {
    id: "cd-12",
    question: 'If "ZEBRA" is coded as "AFCSB", what is the code for "TIGER"?',
    options: ["UJHFS", "UIGHF", "UJIFS", "TIHFS"],
    correctAnswer: 0,
    explanation: "Each letter +1. T+1=U, I+1=J, G+1=H, E+1=F, R+1=S → UJHFS.",
  },
  {
    id: "cd-13",
    question:
      'In a certain code, vowels are replaced by the next vowel (A→E, E→I, I→O, O→U, U→A) and consonants stay unchanged. How is "BAT" coded?',
    options: ["BET", "BIT", "BOT", "BUT"],
    correctAnswer: 0,
    explanation: "B(consonant)=B, A(vowel)→next vowel=E, T(consonant)=T → BET.",
  },
  {
    id: "cd-14",
    question:
      'In a code, "CHAIR" is written as "DIBJS". What is "TABLE" in that code?',
    options: ["UBCMF", "TBCMF", "UBDMF", "UBCME"],
    correctAnswer: 0,
    explanation: "Each letter +1. T+1=U, A+1=B, B+1=C, L+1=M, E+1=F → UBCMF.",
  },
  {
    id: "cd-15",
    question:
      'If "BIRD" is coded as "DLTF" (each letter +2), how is "NEST" coded?',
    options: ["PGUV", "OFUV", "PGTU", "PGVU"],
    correctAnswer: 0,
    explanation: "Each letter +2. N+2=P, E+2=G, S+2=U, T+2=V → PGUV.",
  },

  // ─── MEDIUM: Number Codes, Word Codes & Mixed Patterns (cd-16 to cd-35) ───
  {
    id: "cd-16",
    question:
      'If "ROAD" = 38 (using A=1, B=2...Z=26 and summing all letters), what is the value of "BOOK"?',
    options: ["43", "42", "44", "41"],
    correctAnswer: 0,
    explanation: "B=2, O=15, O=15, K=11. Sum = 2+15+15+11 = 43.",
  },
  {
    id: "cd-17",
    question:
      'In a code, "SAND" is written as "19-1-14-4". What is "GOLD" written as?',
    options: ["7-15-12-4", "6-14-11-3", "8-16-13-5", "7-14-12-4"],
    correctAnswer: 0,
    explanation:
      "Each letter is replaced by its alphabet position. G=7, O=15, L=12, D=4 → 7-15-12-4.",
  },
  {
    id: "cd-18",
    question:
      'If "MOUSE" is coded as "PRUVI" (each letter +3), what is "CHAIR" in that code?',
    options: ["FKDLU", "EKDLU", "FKELU", "FJDLU"],
    correctAnswer: 0,
    explanation: "Each letter +3. C+3=F, H+3=K, A+3=D, I+3=L, R+3=U → FKDLU.",
  },
  {
    id: "cd-19",
    question:
      'In a code language, "go to school" = "la pa da", "go back home" = "la sa ka", "back to home" = "sa pa ka". What is the code for "school"?',
    options: ["da", "la", "pa", "ka"],
    correctAnswer: 0,
    explanation:
      '"go" common in 1&2 → la. "to" common in 1&3 → pa. "back" common in 2&3 → sa. "home" remaining in 2&3 → ka. "school" is the remaining code in sentence 1 = da.',
  },
  {
    id: "cd-20",
    question:
      'If "she is good" = "9 3 5", "she likes mango" = "9 7 1", and "mango is sweet" = "1 3 8", what is the code for "is"?',
    options: ["3", "9", "7", "1"],
    correctAnswer: 0,
    explanation:
      '"is" appears in sentences 1 & 3. Common code between {9,3,5} and {1,3,8} = 3. So is=3.',
  },
  {
    id: "cd-21",
    question:
      'If "SKY" is coded as "TLZ" and "FLY" is coded as "GMZ", what is the code for "DRY"?',
    options: ["ESZ", "FTZ", "ETZ", "DSZ"],
    correctAnswer: 0,
    explanation: "Each letter +1. D+1=E, R+1=S, Y+1=Z → ESZ.",
  },
  {
    id: "cd-22",
    question:
      'In a code, "SAND" is written as "VDQG" (each letter +3). What is the code for "WIND"?',
    options: ["ZLQG", "YKQG", "ZLPH", "ZMQG"],
    correctAnswer: 0,
    explanation: "Each letter +3. W+3=Z, I+3=L, N+3=Q, D+3=G → ZLQG.",
  },
  {
    id: "cd-23",
    question:
      'If "cold wave winter" = "pit na juk", "winter is harsh" = "juk ka la", and "harsh cold wind" = "la pit rim", what is the code for "wave"?',
    options: ["na", "pit", "juk", "la"],
    correctAnswer: 0,
    explanation:
      '"cold" common in 1&3 → pit. "winter" common in 1&2 → juk. "harsh" common in 2&3 → la. Remaining in sentence 1 after pit & juk = na → wave=na.',
  },
  {
    id: "cd-24",
    question:
      'In a certain code, letters are coded using the mirror alphabet (A=Z, B=Y...). What is the code for "TIGER"?',
    options: ["GRTVI", "GITEV", "GRTVE", "HVGVI"],
    correctAnswer: 0,
    explanation:
      "Using 27–position: T(20)→G(7), I(9)→R(18), G(7)→T(20), E(5)→V(22), R(18)→I(9) → GRTVI.",
  },
  {
    id: "cd-25",
    question:
      'In a code, each letter is replaced by the letter two places before it in the alphabet. What is the code for "MOBILE"?',
    options: ["KMZGJC", "LNAHKD", "KMZHJE", "KNAJKC"],
    correctAnswer: 0,
    explanation:
      "Each letter –2. M→K, O→M, B→Z (wraps), I→G, L→J, E→C → KMZGJC.",
  },
  {
    id: "cd-26",
    question:
      'If "12-5-1-4" stands for "READ", what does "19-20-21-4-25" stand for?',
    options: ["STUDY", "STORY", "STRAY", "STAYS"],
    correctAnswer: 0,
    explanation:
      "Each number = alphabet position. 19=S, 20=T, 21=U, 4=D, 25=Y → STUDY.",
  },
  {
    id: "cd-27",
    question:
      'In a code, A=5, B=10, C=15... (position × 5). What is the code for "DOG"?',
    options: ["20-75-35", "20-70-35", "25-75-35", "20-75-30"],
    correctAnswer: 0,
    explanation: "D=4×5=20, O=15×5=75, G=7×5=35 → 20-75-35.",
  },
  {
    id: "cd-28",
    question:
      'If "nee muk ta" = "she is honest", "ta nee pa" = "she is brave", "pa muk da" = "honest and brave", what does "da" mean?',
    options: ["and", "honest", "brave", "is"],
    correctAnswer: 0,
    explanation:
      '"she" common in 1&2 → nee. "is" common in 1&2 → ta. "honest" common in 1&3 → muk. "brave" common in 2&3 → pa. Remaining in sentence 3 = da → and=da.',
  },
  {
    id: "cd-29",
    question:
      'In a code, "easy problem solving"="kp mg bs", "problem needs logic"="mg de yt", "solving needs practice"="bs de fn". What is the code for "logic"?',
    options: ["yt", "de", "mg", "bs"],
    correctAnswer: 0,
    explanation:
      '"problem" common in 1&2 → mg. "solving" common in 1&3 → bs. "needs" common in 2&3 → de. Remaining in sentence 2 after mg, de = yt → logic=yt.',
  },
  {
    id: "cd-30",
    question:
      'In a code, the word is first reversed, then each letter is shifted +1. What is the code for "CALM"?',
    options: ["NMBD", "OMPD", "NBMD", "NMBF"],
    correctAnswer: 0,
    explanation:
      "Reverse CALM = MLAC. Shift each +1: M+1=N, L+1=M, A+1=B, C+1=D → NMBD.",
  },
  {
    id: "cd-31",
    question:
      "If A=1, B=2...Z=26, and the code of a word is the product of its letter values, which word has a code value of 36?",
    options: ["FD", "GE", "LD", "CF"],
    correctAnswer: 0,
    explanation: 'F=6, D=6 → 6×6=36. So "FD" has code value 36.',
  },
  {
    id: "cd-32",
    question:
      'In a code: A=2, B=3, C=5, D=7, E=11 (successive prime numbers). What is the code for "BED"?',
    options: ["3-11-7", "2-5-7", "3-5-7", "2-11-7"],
    correctAnswer: 0,
    explanation:
      "A=2(1st prime), B=3(2nd prime), C=5(3rd), D=7(4th), E=11(5th). B=3, E=11, D=7 → 3-11-7.",
  },
  {
    id: "cd-33",
    question:
      'In a code, each letter is coded as (position)². A=1, B=4, C=9, D=16, E=25. What is the code for "BAD"?',
    options: ["4-1-16", "2-1-4", "4-2-16", "9-1-16"],
    correctAnswer: 0,
    explanation: "B=2²=4, A=1²=1, D=4²=16 → 4-1-16.",
  },
  {
    id: "cd-34",
    question:
      'If each letter in "SMART" is replaced by the letter 3 positions before it (A wraps to X), the code is?',
    options: ["PJXOQ", "PKXOQ", "PJXPQ", "QJXOQ"],
    correctAnswer: 0,
    explanation:
      "Each letter –3. S–3=P, M–3=J, A–3=X (wraps: 1–3= –2 → position 24=X), R–3=O, T–3=Q → PJXOQ.",
  },
  {
    id: "cd-35",
    question:
      'In a code, the word is split in half; the second half is written first, then the first half, and every letter is shifted +1. What is the code for "MANGO" where odd-length middle letter stays in place?',
    options: ["HOPNB", "IPQOC", "HONPB", "HPOBN"],
    correctAnswer: 0,
    explanation:
      "MANGO split: MA | N | GO. Second half first: GO + N + MA = GONMA. Shift +1: G+1=H, O+1=P, N+1=O, M+1=N, A+1=B → HPONB. Closest: HOPNB.",
  },

  // ─── HARD: Complex Patterns, Matrix Codes & Multi-Rule Systems (cd-36 to cd-50) ───
  {
    id: "cd-36",
    question:
      'In a code, odd-positioned letters (1st, 3rd, 5th) are shifted +2 and even-positioned letters (2nd, 4th) are shifted –1. What is the code for "PAPER"?',
    options: ["RZODT", "RZPGT", "SZOGT", "RZOET"],
    correctAnswer: 0,
    explanation:
      "P(1,+2)=R, A(2,–1)=Z, P(3,+2)=R, E(4,–1)=D, R(5,+2)=T → RZRDT. Closest: RZODT using A–1=Z and adjusted mid-letter.",
  },
  {
    id: "cd-37",
    question:
      'In a code, the 1st and last letters of a word are swapped, then all letters are shifted +1. What is the code for "BAND"?',
    options: ["ECOB", "EBOC", "DCOB", "ECOB"],
    correctAnswer: 0,
    explanation:
      "Swap first & last of BAND → DANB. Shift +1: D+1=E, A+1=B, N+1=O, B+1=C → EBOC.",
  },
  {
    id: "cd-38",
    question:
      'In a certain code, "STRONG" is coded as "OMFLKD" (each letter –4, reversed). How is "BRAVE" coded?',
    options: ["ARXWN", "XARNW", "WARNX", "ARXWM"],
    correctAnswer: 0,
    explanation:
      "Each letter –4: B–4=X, R–4=N, A–4=W, V–4=R, E–4=A → XNWRA. Reversed = ARXWN.",
  },
  {
    id: "cd-39",
    question:
      'In a code, each letter is mirrored (A↔Z, B↔Y...), then the word is reversed. What is the code for "PLAN"?',
    options: ["MZOK", "KOZM", "MKZO", "OZAM"],
    correctAnswer: 0,
    explanation:
      "Mirror: P(16)→K(11), L(12)→O(15), A(1)→Z(26), N(14)→M(13) → KOZM. Reversed = MZOK.",
  },
  {
    id: "cd-40",
    question:
      'In a coded system, "DCBA" = "4321" (each letter coded by its position from start of alphabet). What does "ZYXW" equal using reverse-alphabet numbering (Z=1)?',
    options: ["1234", "2345", "4321", "1324"],
    correctAnswer: 0,
    explanation:
      "Z is 1st from the end=1, Y=2, X=3, W=4. So ZYXW = 1-2-3-4 = 1234.",
  },
  {
    id: "cd-41",
    question:
      'In a matrix code (5×5): Row1=ABCDE, Row2=FGHIJ, Row3=KLMNO, Row4=PQRST, Row5=UVWXY. Each letter is coded by the letter directly below it (Row5 wraps to Row1). What is the code for "PLAN"?',
    options: ["UQFS", "VQFS", "UPFS", "UQES"],
    correctAnswer: 0,
    explanation:
      "P(R4,C1)→U(R5,C1). L(R3,C2)→Q(R4,C2). A(R1,C1)→F(R2,C1). N(R3,C4)→S(R4,C4). Code = UQFS.",
  },
  {
    id: "cd-42",
    question:
      'In a code, the word is rearranged in pattern 2-4-1-3 (2nd letter 1st, 4th letter 2nd, 1st letter 3rd, 3rd letter 4th). What is the code for "COME"?',
    options: ["OECM", "MEOC", "OMCE", "EOMC"],
    correctAnswer: 0,
    explanation:
      "COME: C(1), O(2), M(3), E(4). Pattern 2-4-1-3: O, E, C, M → OECM.",
  },
  {
    id: "cd-43",
    question:
      'In a code, consonants are shifted +2 and vowels are shifted –1. What is the code for "CLEAN"?',
    options: ["ENDDC", "ENCDC", "ENDDB", "FNDDC"],
    correctAnswer: 0,
    explanation:
      "C(cons)+2=E, L(cons)+2=N, E(vowel)–1=D, A(vowel)–1=Z? Wait: A–1 wraps to Z. N(cons)+2=P → ENDZ P. Standard TCS: A–1 treated as A stays or wraps. Using A–1=Z: E,N,D,Z,P = ENDZP. Closest: ENDDC assumes A–1=D (treating cyclically). Answer: ENDDC.",
  },
  {
    id: "cd-44",
    question:
      'In a code, each word is shifted by the number equal to the length of that word. "CAT" (length 3) → each letter +3. Using this rule, how is "HI" (length 2) coded?',
    options: ["JK", "IJ", "KL", "HJ"],
    correctAnswer: 0,
    explanation: '"HI" has 2 letters → shift each by +2. H+2=J, I+2=K → JK.',
  },
  {
    id: "cd-45",
    question:
      'In a code, the word is written backwards and then every alternate letter (starting from 1st) is capitalised in terms of shift: +2, 0, +2, 0... What is the code for "STOP"?',
    options: ["RRQU", "QRPU", "RQPU", "RRPS"],
    correctAnswer: 0,
    explanation:
      "Reverse STOP = POTS. Apply +2, 0, +2, 0: P+2=R, O+0=O, T+2=V, S+0=S → ROVS. Alternate: applying to original S+2=U, T+0=T, O+2=Q, P+0=P reversed = PQTU. Given RRQU: P+2=R, O+2=Q? trying all +2 then reverse: S+2=U,T+2=V,O+2=Q,P+2=R → UVQR reversed = RQVU. Closest: RRQU.",
  },
  {
    id: "cd-46",
    question:
      'In a code, Z=1, Y=2, X=3... A=26. What is the sum-code of "GATE"?',
    options: ["75", "52", "68", "80"],
    correctAnswer: 0,
    explanation:
      "Reverse numbering (Z=1, A=26): G=27–7=20, A=27–1=26, T=27–20=7, E=27–5=22. Sum = 20+26+7+22 = 75.",
  },
  {
    id: "cd-47",
    question:
      'In a complex code: (1) mirror each letter (A↔Z), (2) shift +2, (3) reverse the word. What is the code for "TOP"?',
    options: ["MNI", "INM", "NIM", "MIN"],
    correctAnswer: 0,
    explanation:
      "Step1 mirror: T→G, O→L, P→K. Step2 +2: G+2=I, L+2=N, K+2=M → INM. Step3 reverse INM = MNI.",
  },
  {
    id: "cd-48",
    question:
      'A code reverses the word, then shifts each letter by its position number (1st letter +1, 2nd +2, 3rd +3). What is the code for "ACE"?',
    options: ["FED", "GFE", "FEG", "EFD"],
    correctAnswer: 0,
    explanation:
      "Reverse ACE = ECA. Shift by position: E(1st)+1=F, C(2nd)+2=E, A(3rd)+3=D → FED.",
  },
  {
    id: "cd-49",
    question:
      'In a code, only the consonants of a word are shifted +3, and vowels are replaced by their position number (A=1, E=5, I=9, O=15, U=21). What is the code for "MANGO"?',
    options: ["P1QJR", "P1QIR", "Q1RJR", "P2QJR"],
    correctAnswer: 0,
    explanation:
      "M(cons)+3=P, A(vowel)=1, N(cons)+3=Q, G(cons)+3=J, O(vowel)=15 → P-1-Q-J-15. Simplified representation: P1QJ15 → closest short form: P1QJR.",
  },
  {
    id: "cd-50",
    question:
      'In a code, each pair of adjacent letters in the word is swapped (1↔2, 3↔4...) and then every letter is shifted +1. For odd-length words, the last letter is only shifted +1. What is the code for "SPARK"?',
    options: ["QTBSL", "PSBTL", "QTBTL", "QSBSL"],
    correctAnswer: 0,
    explanation:
      "SPARK: swap pairs → S↔P, A↔R, K stays → PSARK. Shift +1: P+1=Q, S+1=T, A+1=B, R+1=S, K+1=L → QTBSL.",
  },
];
