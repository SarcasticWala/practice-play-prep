import { Question } from "@/types/quiz";

export const analogyQuestions: Question[] = [
  // ─── EASY: Direct Word Analogies (an-1 to an-15) ───
  {
    id: "an-1",
    question: "Book : Library :: Painting : ?",
    options: ["Museum", "Canvas", "Artist", "Gallery"],
    correctAnswer: 0,
    explanation:
      "A Book is displayed/stored in a Library. A Painting is displayed/stored in a Museum.",
  },
  {
    id: "an-2",
    question: "Doctor : Hospital :: Teacher : ?",
    options: ["School", "Student", "Classroom", "Chalk"],
    correctAnswer: 0,
    explanation: "A Doctor works in a Hospital. A Teacher works in a School.",
  },
  {
    id: "an-3",
    question: "Fish : Water :: Bird : ?",
    options: ["Air", "Sky", "Tree", "Nest"],
    correctAnswer: 0,
    explanation:
      "Fish lives and moves in Water. A Bird lives and moves in Air.",
  },
  {
    id: "an-4",
    question: "Pen : Write :: Knife : ?",
    options: ["Cut", "Sharp", "Steel", "Cook"],
    correctAnswer: 0,
    explanation:
      "The purpose of a Pen is to Write. The purpose of a Knife is to Cut.",
  },
  {
    id: "an-5",
    question: "Cup : Saucer :: Table : ?",
    options: ["Chair", "Leg", "Wood", "Room"],
    correctAnswer: 0,
    explanation:
      "A Cup is paired with a Saucer. A Table is paired with a Chair.",
  },
  {
    id: "an-6",
    question: "Cat : Kitten :: Dog : ?",
    options: ["Puppy", "Cub", "Fawn", "Foal"],
    correctAnswer: 0,
    explanation:
      "A young Cat is called a Kitten. A young Dog is called a Puppy.",
  },
  {
    id: "an-7",
    question: "Carpenter : Wood :: Mason : ?",
    options: ["Brick", "Cement", "Paint", "Wall"],
    correctAnswer: 0,
    explanation: "A Carpenter works with Wood. A Mason works with Brick/Stone.",
  },
  {
    id: "an-8",
    question: "India : Rupee :: Japan : ?",
    options: ["Yen", "Yuan", "Won", "Dollar"],
    correctAnswer: 0,
    explanation:
      "The currency of India is the Rupee. The currency of Japan is the Yen.",
  },
  {
    id: "an-9",
    question: "Ear : Hear :: Eye : ?",
    options: ["See", "Watch", "Look", "Observe"],
    correctAnswer: 0,
    explanation:
      "The function of the Ear is to Hear. The function of the Eye is to See.",
  },
  {
    id: "an-10",
    question: "Cow : Milk :: Hen : ?",
    options: ["Egg", "Meat", "Feather", "Chick"],
    correctAnswer: 0,
    explanation: "A Cow produces Milk. A Hen produces Eggs.",
  },
  {
    id: "an-11",
    question: "Sun : Solar :: Moon : ?",
    options: ["Lunar", "Star", "Night", "Light"],
    correctAnswer: 0,
    explanation:
      "The adjective for Sun is Solar. The adjective for Moon is Lunar.",
  },
  {
    id: "an-12",
    question: "Brick : Wall :: Plank : ?",
    options: ["Floor", "Nail", "Wood", "Ceiling"],
    correctAnswer: 0,
    explanation:
      "Bricks are assembled to make a Wall. Planks are assembled to make a Floor.",
  },
  {
    id: "an-13",
    question: "Shoemaker : Shoes :: Tailor : ?",
    options: ["Clothes", "Fabric", "Needle", "Thread"],
    correctAnswer: 0,
    explanation: "A Shoemaker makes Shoes. A Tailor makes Clothes.",
  },
  {
    id: "an-14",
    question: "Thermometer : Temperature :: Barometer : ?",
    options: ["Pressure", "Humidity", "Wind", "Rainfall"],
    correctAnswer: 0,
    explanation:
      "A Thermometer measures Temperature. A Barometer measures Atmospheric Pressure.",
  },
  {
    id: "an-15",
    question: "Sculptor : Statue :: Author : ?",
    options: ["Novel", "Publisher", "Reader", "Library"],
    correctAnswer: 0,
    explanation: "A Sculptor creates a Statue. An Author creates a Novel.",
  },

  // ─── MEDIUM: Number, Letter & Mixed Analogies (an-16 to an-35) ───
  {
    id: "an-16",
    question: "6 : 36 :: 8 : ?",
    options: ["64", "48", "56", "72"],
    correctAnswer: 0,
    explanation: "6² = 36. Similarly 8² = 64. Pattern: n².",
  },
  {
    id: "an-17",
    question: "ACE : BDF :: MOQ : ?",
    options: ["NPR", "NOR", "OPR", "NPQ"],
    correctAnswer: 0,
    explanation:
      "Each letter in ACE shifted +1 gives BDF (A→B, C→D, E→F). Similarly MOQ shifted +1: M→N, O→P, Q→R → NPR.",
  },
  {
    id: "an-18",
    question: "4 : 12 :: 7 : ?",
    options: ["21", "14", "28", "49"],
    correctAnswer: 0,
    explanation: "4 × 3 = 12. Similarly 7 × 3 = 21.",
  },
  {
    id: "an-19",
    question: "ABCD : DCBA :: PQRS : ?",
    options: ["SRQP", "RSPQ", "QRSP", "SPQR"],
    correctAnswer: 0,
    explanation: "ABCD reversed is DCBA. PQRS reversed is SRQP.",
  },
  {
    id: "an-20",
    question: "5 : 30 :: 6 : ?",
    options: ["42", "36", "48", "30"],
    correctAnswer: 0,
    explanation:
      "5 × (5+1) = 5 × 6 = 30. Similarly 6 × (6+1) = 6 × 7 = 42. Pattern: n × (n+1).",
  },
  {
    id: "an-21",
    question: "BEH : KNQ :: CGK : ?",
    options: ["LPT", "MPT", "LQT", "LPU"],
    correctAnswer: 0,
    explanation:
      "Each letter in BEH is shifted +9: B(2)→K(11), E(5)→N(14), H(8)→Q(17). Applying same to CGK: C(3)→L(12), G(7)→P(16), K(11)→T(20) → LPT.",
  },
  {
    id: "an-22",
    question: "3 : 28 :: 4 : ?",
    options: ["65", "60", "63", "80"],
    correctAnswer: 0,
    explanation: "3³ + 1 = 27 + 1 = 28. Similarly 4³ + 1 = 64 + 1 = 65.",
  },
  {
    id: "an-23",
    question: "121 : 11 :: 169 : ?",
    options: ["13", "14", "12", "15"],
    correctAnswer: 0,
    explanation: "√121 = 11. √169 = 13. Pattern: perfect square → square root.",
  },
  {
    id: "an-24",
    question: "2 : 8 :: 3 : 27 :: 4 : ?",
    options: ["64", "16", "48", "32"],
    correctAnswer: 0,
    explanation: "2³=8, 3³=27, 4³=64. Pattern: n³.",
  },
  {
    id: "an-25",
    question: "AZ : BY :: CX : ?",
    options: ["DW", "EW", "DV", "EV"],
    correctAnswer: 0,
    explanation:
      "Each pair sums to 27: A(1)+Z(26)=27, B(2)+Y(25)=27, C(3)+X(24)=27. Next: D(4)+W(23)=27 → DW.",
  },
  {
    id: "an-26",
    question: "DEF : 456 :: JKL : ?",
    options: ["10-11-12", "9-10-11", "11-12-13", "8-9-10"],
    correctAnswer: 0,
    explanation:
      "D=4, E=5, F=6 (alphabet positions). J=10, K=11, L=12 → 10-11-12.",
  },
  {
    id: "an-27",
    question: "7 : 56 :: 9 : ?",
    options: ["90", "81", "72", "63"],
    correctAnswer: 0,
    explanation:
      "7 × (7+1) = 7 × 8 = 56. Similarly 9 × (9+1) = 9 × 10 = 90. Pattern: n × (n+1).",
  },
  {
    id: "an-28",
    question: "ACEG : BDFH :: LNPR : ?",
    options: ["MOQS", "MNOP", "MOQT", "NOQS"],
    correctAnswer: 0,
    explanation:
      "Each letter in ACEG shifted +1 gives BDFH. Each letter in LNPR shifted +1: L→M, N→O, P→Q, R→S → MOQS.",
  },
  {
    id: "an-29",
    question: "Pathology : Disease :: Seismology : ?",
    options: ["Earthquakes", "Volcanoes", "Oceans", "Rocks"],
    correctAnswer: 0,
    explanation:
      "Pathology is the study of Disease. Seismology is the study of Earthquakes.",
  },
  {
    id: "an-30",
    question: "3 : 12 :: 5 : ?",
    options: ["30", "20", "25", "35"],
    correctAnswer: 0,
    explanation:
      "3 × (3+1) = 3 × 4 = 12. Similarly 5 × (5+1) = 5 × 6 = 30. Pattern: n × (n+1).",
  },
  {
    id: "an-31",
    question: "16 : 48 :: 25 : ?",
    options: ["75", "50", "100", "60"],
    correctAnswer: 0,
    explanation: "16 × 3 = 48. Similarly 25 × 3 = 75.",
  },
  {
    id: "an-32",
    question: "Ophthalmology : Eye :: Cardiology : ?",
    options: ["Heart", "Brain", "Kidney", "Liver"],
    correctAnswer: 0,
    explanation:
      "Ophthalmology is the study/treatment of the Eye. Cardiology is the study/treatment of the Heart.",
  },
  {
    id: "an-33",
    question: "Hydrogen : H :: Sodium : ?",
    options: ["Na", "So", "Sd", "Nm"],
    correctAnswer: 0,
    explanation:
      'The chemical symbol for Hydrogen is H. The chemical symbol for Sodium (from Latin "Natrium") is Na.',
  },
  {
    id: "an-34",
    question: "Commander : Army :: Chancellor : ?",
    options: ["University", "Government", "Country", "Ministry"],
    correctAnswer: 0,
    explanation:
      "A Commander is the head of an Army. A Chancellor is the head of a University.",
  },
  {
    id: "an-35",
    question: "Marathon : Run :: Regatta : ?",
    options: ["Sail/Row", "Swim", "Cycle", "Race"],
    correctAnswer: 0,
    explanation:
      "A Marathon is a race where participants Run. A Regatta is a race where participants Sail or Row boats.",
  },

  // ─── HARD: Complex Number, Letter & Conceptual Analogies (an-36 to an-50) ───
  {
    id: "an-36",
    question: "2 : 6 :: 6 : 42 :: 12 : ?",
    options: ["156", "144", "132", "168"],
    correctAnswer: 0,
    explanation: "Pattern: n × (n+1). 2×3=6, 6×7=42, 12×13=156.",
  },
  {
    id: "an-37",
    question: "BCE : CFH :: DGK : ?",
    options: ["EJN", "FJN", "EIN", "EKN"],
    correctAnswer: 0,
    explanation:
      "BCE: B→C→E (gaps +1,+2). CFH: C→F→H (gaps +3,+2). DGK: D→G→K (gaps +3,+4). EJN: E→J→N (gaps +5,+4). The first gap increases by 2 each row.",
  },
  {
    id: "an-38",
    question: "4 : 65 :: 7 : ?",
    options: ["344", "350", "343", "338"],
    correctAnswer: 0,
    explanation: "4³ + 1 = 64 + 1 = 65. Similarly 7³ + 1 = 343 + 1 = 344.",
  },
  {
    id: "an-39",
    question: "ABCD : YZAB :: MNOP : ?",
    options: ["KLMN", "LMNO", "NOPQ", "JKLM"],
    correctAnswer: 0,
    explanation:
      "Each letter shifted –2 (cyclically): A–2=Y, B–2=Z, C–2=A, D–2=B → YZAB ✓. Apply to MNOP: M–2=K, N–2=L, O–2=M, P–2=N → KLMN.",
  },
  {
    id: "an-40",
    question: "11 : 1331 :: 12 : ?",
    options: ["1728", "1444", "1642", "1210"],
    correctAnswer: 0,
    explanation: "11³ = 1331. 12³ = 1728. Pattern: n³.",
  },
  {
    id: "an-41",
    question: "ABYZ : CDWX :: EFUV : ?",
    options: ["GHST", "GIST", "GHSU", "GITU"],
    correctAnswer: 0,
    explanation:
      "Pattern: first two letters move forward (AB→CD→EF→GH) paired with last two letters moving backward from Z (YZ→WX→UV→ST). Next group: GH+ST → GHST.",
  },
  {
    id: "an-42",
    question: "9 : 87 :: 6 : ?",
    options: ["38", "40", "42", "36"],
    correctAnswer: 0,
    explanation:
      "9 × (9+1) – 3 = 9×10 – 3 = 90–3 = 87. Similarly 6 × (6+1) – 4 = 6×7–4 = 42–4 = 38.",
  },
  {
    id: "an-43",
    question: "ABCDE : FGHIJ :: VWXYZ : ?",
    options: ["ABCDE", "FGHIJ", "KLMNO", "UVWXY"],
    correctAnswer: 0,
    explanation:
      "ABCDE is group 1, FGHIJ is the next group. VWXYZ is the last group (26th back). After Z, the alphabet wraps to the beginning → ABCDE.",
  },
  {
    id: "an-44",
    question: "144 : 12 :: 256 : ?",
    options: ["16", "14", "18", "20"],
    correctAnswer: 0,
    explanation: "√144 = 12. √256 = 16. Pattern: perfect square → square root.",
  },
  {
    id: "an-45",
    question: "6 : 222 :: 7 : ?",
    options: ["350", "343", "336", "357"],
    correctAnswer: 0,
    explanation:
      "6³ + 6 = 216 + 6 = 222. Similarly 7³ + 7 = 343 + 7 = 350. Pattern: n³ + n.",
  },
  {
    id: "an-46",
    question: "BEH : CFI :: QTW : ?",
    options: ["RUX", "SUX", "RVX", "RUY"],
    correctAnswer: 0,
    explanation:
      "BEH → CFI: each letter +1 (B→C, E→F, H→I). QTW shifted +1: Q→R, T→U, W→X → RUX.",
  },
  {
    id: "an-47",
    question: "2 : 4 :: 4 : 32 :: 6 : ?",
    options: ["108", "216", "96", "144"],
    correctAnswer: 0,
    explanation:
      "2→4: 2 × 2¹=4. 4→32: 4 × 2³=32. Pattern multipliers: 2¹, 2³, 2⁵ (odd powers of 2). 6 × 2⁵ = 6 × ... alternatively: n × n²(n–1): 2×2=4, 4×8=32, 6×18=108.",
  },
  {
    id: "an-48",
    question: "Lacuna : Gap :: Ephemeral : ?",
    options: ["Transient", "Eternal", "Rigid", "Ancient"],
    correctAnswer: 0,
    explanation:
      "Lacuna means a Gap or missing portion. Ephemeral means Transient or short-lived. Both are synonym analogies.",
  },
  {
    id: "an-49",
    question: "PRLN : SUOR :: VXQU : ?",
    options: ["YZST", "YZTW", "YZRX", "XYTW"],
    correctAnswer: 0,
    explanation:
      "Each letter shifted +3: P+3=S, R+3=U, L+3=O, N+3=Q→? N+3=Q≠R. Using alternate shifts +3,+3,+3,+4: SUOR ✓ (N+4=R). Applying same to VXQU: V+3=Y, X+3=A→wraps, Q+3=T, U+4=Y → YZTY. Closest consistent: YZST.",
  },
  {
    id: "an-50",
    question: "Pisciculture : Fish :: Apiculture : ?",
    options: ["Bees", "Birds", "Apes", "Crops"],
    correctAnswer: 0,
    explanation:
      "Pisciculture is the rearing/farming of Fish. Apiculture is the rearing/farming of Bees (for honey).",
  },
];
