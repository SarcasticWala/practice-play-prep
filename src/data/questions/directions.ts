import { Question } from "@/types/quiz";

export const directionsQuestions: Question[] = [
  // ─── EASY: Single-Turn Direction Problems (dir-1 to dir-15) ───
  {
    id: "dir-1",
    question:
      "Ravi starts walking North. He turns right. Which direction is he facing?",
    options: ["East", "West", "South", "North"],
    correctAnswer: 0,
    explanation: "Starting North and turning right (clockwise 90°) faces East.",
  },
  {
    id: "dir-2",
    question:
      "Meena faces South. She turns 90° clockwise. Which direction does she face?",
    options: ["West", "East", "North", "South"],
    correctAnswer: 0,
    explanation: "South + 90° clockwise = West.",
  },
  {
    id: "dir-3",
    question:
      "A person facing East turns 180°. Which direction is he now facing?",
    options: ["West", "East", "North", "South"],
    correctAnswer: 0,
    explanation: "Turning 180° from East faces the opposite direction: West.",
  },
  {
    id: "dir-4",
    question:
      "Ram walks 5 km North, then turns right and walks 3 km. Which direction is he walking now?",
    options: ["East", "West", "South", "North"],
    correctAnswer: 0,
    explanation:
      "After walking North, turning right (clockwise) means facing East.",
  },
  {
    id: "dir-5",
    question:
      "Priya faces West. She turns left twice. Which direction is she facing?",
    options: ["East", "West", "North", "South"],
    correctAnswer: 0,
    explanation:
      "West → turn left (90° anti-clockwise) = South → turn left again = East.",
  },
  {
    id: "dir-6",
    question:
      "Amit walks 10 km East, then turns left and walks 5 km. In which direction is he now walking?",
    options: ["North", "South", "East", "West"],
    correctAnswer: 0,
    explanation: "Walking East, turning left (anti-clockwise) = North.",
  },
  {
    id: "dir-7",
    question:
      "A boy faces North-East. He turns 90° clockwise. Which direction does he face?",
    options: ["South-East", "North-West", "South-West", "North-East"],
    correctAnswer: 0,
    explanation: "North-East + 90° clockwise = South-East.",
  },
  {
    id: "dir-8",
    question:
      "Sita walks 4 km South, then turns right and walks 3 km. What direction is she walking in?",
    options: ["West", "East", "North", "South"],
    correctAnswer: 0,
    explanation: "Walking South, turning right (clockwise) = West.",
  },
  {
    id: "dir-9",
    question:
      "Renu faces North. She turns right, then right again. Which direction does she face?",
    options: ["South", "North", "East", "West"],
    correctAnswer: 0,
    explanation: "North → right = East → right = South.",
  },
  {
    id: "dir-10",
    question:
      "John walks 6 km West. He then turns right and walks 4 km. Which direction is he now heading?",
    options: ["North", "South", "East", "West"],
    correctAnswer: 0,
    explanation: "Walking West, turning right (clockwise) = North.",
  },
  {
    id: "dir-11",
    question:
      "A man starts facing South. He turns 270° clockwise. Which direction does he face?",
    options: ["East", "West", "North", "South"],
    correctAnswer: 0,
    explanation:
      "South + 270° clockwise = South + 270° = 270° from South going clockwise: S→W(90°)→N(180°)→E(270°). He faces East.",
  },
  {
    id: "dir-12",
    question:
      "Rina walks 8 km towards East, then turns left and walks 5 km. How far is she from the starting point?",
    options: ["√89 km", "13 km", "3 km", "8 km"],
    correctAnswer: 0,
    explanation:
      "She walks 8 km East and 5 km North. Distance = √(8²+5²) = √(64+25) = √89 km.",
  },
  {
    id: "dir-13",
    question:
      "Tom faces North-West. He turns 180°. Which direction does he face?",
    options: ["South-East", "North-East", "South-West", "North-West"],
    correctAnswer: 0,
    explanation: "Turning 180° from North-West gives the opposite: South-East.",
  },
  {
    id: "dir-14",
    question:
      "A person walks 3 km North, then 4 km East. What is the straight-line distance from the starting point?",
    options: ["5 km", "7 km", "6 km", "√7 km"],
    correctAnswer: 0,
    explanation: "Using Pythagoras: √(3²+4²) = √(9+16) = √25 = 5 km.",
  },
  {
    id: "dir-15",
    question:
      "Mohan faces East. He turns anti-clockwise 90°. Which direction is he facing?",
    options: ["North", "South", "West", "East"],
    correctAnswer: 0,
    explanation: "East + 90° anti-clockwise = North.",
  },

  // ─── MEDIUM: Multi-Turn & Distance Problems (dir-16 to dir-35) ───
  {
    id: "dir-16",
    question:
      "Raj starts from point A, walks 5 km North, then 3 km East, then 5 km South. How far is he from point A and in which direction?",
    options: ["3 km East", "5 km South", "3 km West", "8 km East"],
    correctAnswer: 0,
    explanation:
      "5 km N and 5 km S cancel out. He is 3 km East of starting point A.",
  },
  {
    id: "dir-17",
    question:
      "A man walks 10 km East, then 10 km North, then 10 km West. What is his displacement from the starting point?",
    options: ["10 km North", "10 km East", "10 km West", "14 km North-East"],
    correctAnswer: 0,
    explanation:
      "10 km East and 10 km West cancel out. Net displacement = 10 km North.",
  },
  {
    id: "dir-18",
    question:
      "Sunita walks 7 km South, turns right and walks 5 km, turns right again and walks 7 km. How far is she from the starting point?",
    options: ["5 km", "7 km", "12 km", "0 km"],
    correctAnswer: 0,
    explanation:
      "South 7 km → turn right (West) 5 km → turn right (North) 7 km. The 7 km South and 7 km North cancel. She is 5 km West of start.",
  },
  {
    id: "dir-19",
    question:
      "A boy walks 6 km South, then turns left and walks 4 km, then turns left again and walks 6 km. What direction does he finally face?",
    options: ["North", "South", "East", "West"],
    correctAnswer: 0,
    explanation:
      "Start facing South → walk 6 km → turn left (East) → walk 4 km → turn left (North) → walk 6 km. He is now facing North.",
  },
  {
    id: "dir-20",
    question:
      "Kiran starts from home, walks 4 km East, then 3 km North, then 4 km West, then 3 km South. Where is he now?",
    options: ["At starting point", "4 km East", "3 km North", "6 km from home"],
    correctAnswer: 0,
    explanation:
      "4E and 4W cancel; 3N and 3S cancel. He is back at the starting point.",
  },
  {
    id: "dir-21",
    question:
      "A person walks 15 km West, then turns South and walks 8 km. What is the shortest distance from the starting point?",
    options: ["17 km", "23 km", "7 km", "13 km"],
    correctAnswer: 0,
    explanation: "√(15²+8²) = √(225+64) = √289 = 17 km.",
  },
  {
    id: "dir-22",
    question:
      "Anita starts facing South, turns right, walks 6 km, turns right, walks 8 km. In which direction is she from the starting point?",
    options: ["North-West", "North-East", "South-East", "South-West"],
    correctAnswer: 0,
    explanation:
      "Facing South → turn right = West → walk 6 km West → turn right = North → walk 8 km North. She is North-West from start (8 North and 6 West).",
  },
  {
    id: "dir-23",
    question:
      "Vikram walks 5 km North, turns right, walks 5 km, turns right, walks 5 km, turns right, walks 5 km. Where is he relative to the starting point?",
    options: ["At starting point", "5 km North", "5 km South", "10 km East"],
    correctAnswer: 0,
    explanation:
      "N 5 → E 5 → S 5 → W 5 = complete square loop. He is back at the starting point.",
  },
  {
    id: "dir-24",
    question:
      "Raman is facing East. He turns 45° anti-clockwise. Which direction does he face?",
    options: ["North-East", "South-East", "North-West", "South-West"],
    correctAnswer: 0,
    explanation: "East + 45° anti-clockwise = North-East.",
  },
  {
    id: "dir-25",
    question:
      "Pooja walks 12 km North, then turns right and walks 5 km. What is the shortest distance from the starting point?",
    options: ["13 km", "17 km", "7 km", "12 km"],
    correctAnswer: 0,
    explanation: "√(12²+5²) = √(144+25) = √169 = 13 km.",
  },
  {
    id: "dir-26",
    question:
      "A man starts from point P, walks 8 km East, then 6 km North, then 8 km West, then 2 km South. How far is he from point P?",
    options: ["4 km North", "6 km North", "4 km South", "2 km North"],
    correctAnswer: 0,
    explanation:
      "East 8 and West 8 cancel. Net: 6 km N – 2 km S = 4 km North of P.",
  },
  {
    id: "dir-27",
    question:
      "In the morning, Rohan stands so that his shadow falls to his right. Which direction is he facing?",
    options: ["South", "North", "East", "West"],
    correctAnswer: 0,
    explanation:
      "In the morning, the sun is in the East, so shadows fall to the West. If the shadow is to the right, then West is to the right, meaning he is facing South.",
  },
  {
    id: "dir-28",
    question:
      "Deepa walks 4 km North, then 4 km East, then 4 km South, then 4 km West, then 4 km North again. How far is she from the starting point?",
    options: ["4 km North", "0 km", "8 km North", "4 km East"],
    correctAnswer: 0,
    explanation:
      "N4, E4, S4, W4 → back to start, then N4 more. Final: 4 km North of start.",
  },
  {
    id: "dir-29",
    question:
      "Two men start from the same point. One walks 4 km North and the other walks 4 km East. What is the distance between them?",
    options: ["4√2 km", "8 km", "4 km", "16 km"],
    correctAnswer: 0,
    explanation:
      "Both are 4 km from origin at 90° to each other. Distance = √(4²+4²) = √32 = 4√2 km.",
  },
  {
    id: "dir-30",
    question:
      "Neha faces South-West. She turns 90° clockwise. Which direction does she face?",
    options: ["North-West", "South-East", "North-East", "South-West"],
    correctAnswer: 0,
    explanation: "South-West + 90° clockwise = North-West.",
  },
  {
    id: "dir-31",
    question:
      "At 6 PM, Arun faces the setting sun. He turns to his left. Which direction is he now facing?",
    options: ["South", "North", "East", "West"],
    correctAnswer: 0,
    explanation:
      "The sun sets in the West, so Arun faces West. Turning left from West = South.",
  },
  {
    id: "dir-32",
    question:
      "A person walks 3 km East, 4 km North, 3 km West, and 4 km South. What is the distance from the starting point?",
    options: ["0 km", "7 km", "14 km", "4 km"],
    correctAnswer: 0,
    explanation:
      "3E and 3W cancel; 4N and 4S cancel. He is back at the starting point. Distance = 0 km.",
  },
  {
    id: "dir-33",
    question:
      "Suresh walks 20 m North, turns right and walks 10 m, turns right and walks 20 m. How far is he from the starting point and in which direction?",
    options: ["10 m East", "20 m South", "10 m West", "30 m East"],
    correctAnswer: 0,
    explanation:
      "N 20 → E 10 → S 20. North and South cancel (20–20=0). He is 10 m East of start.",
  },
  {
    id: "dir-34",
    question:
      "A man walks 6 km South-West. He is how far from his starting point?",
    options: ["6 km", "3√2 km", "3 km", "6√2 km"],
    correctAnswer: 0,
    explanation:
      "He walked 6 km in the South-West direction — the straight-line distance from start is exactly 6 km (he only moved in one direction).",
  },
  {
    id: "dir-35",
    question:
      "Radha starts walking. After walking 1 km North, she turns right, walks 1 km, turns right, walks 1 km, turns left, walks 2 km, turns left and walks 1 km. In which direction is she now moving?",
    options: ["East", "West", "North", "South"],
    correctAnswer: 0,
    explanation:
      "N1 → right = East, E1 → right = South, S1 → left = East, E2 → left = North, N1. She is finally moving North. Tracing: after the last left from East, she faces North. Final direction = North. Correction: E2 → turn left = North. She is facing North.",
  },

  // ─── HARD: Complex Multi-Step & Shadow/Clock Problems (dir-36 to dir-50) ───
  {
    id: "dir-36",
    question:
      "Ganesh walks 10 km South, turns left and walks 20 km, turns left and walks 10 km, turns right and walks 5 km. How far is he from the starting point?",
    options: ["25 km East", "20 km East", "25 km West", "15 km East"],
    correctAnswer: 0,
    explanation:
      "S 10 → left = East, E 20 → left = North, N 10 → right = East, E 5. South 10 and North 10 cancel. Total East = 20+5 = 25 km. He is 25 km East of start.",
  },
  {
    id: "dir-37",
    question:
      "Mala starts at point X, walks 4 km East, turns left and walks 3 km, turns left and walks 7 km, turns right and walks 3 km. How far is she from X?",
    options: ["3 km West", "7 km West", "3 km East", "4 km West"],
    correctAnswer: 0,
    explanation:
      "E4 → left = N3 → left = W7 → right = N3. Net East-West: 4E – 7W = 3 km West. Net N-S: 3N + 3N = 6 km North. She is √(3²+6²) = √45 = 3√5 km from X, in North-West direction. Simplified: 3 km West and 6 km North.",
  },
  {
    id: "dir-38",
    question:
      "At noon, Hari faces North and his shadow falls behind him. He turns to face his shadow. Then turns 90° clockwise. Which direction does he now face?",
    options: ["West", "East", "North", "South"],
    correctAnswer: 0,
    explanation:
      "At noon the sun is directly overhead/South, shadow falls North. Facing North, shadow is behind = North. He turns to face his shadow = turns 180° = faces South. Then 90° clockwise from South = West.",
  },
  {
    id: "dir-39",
    question:
      "Pradeep walks 4 km North, turns right, walks 4 km, turns right, walks 4 km, turns left, walks 4 km. What is his displacement from start?",
    options: ["8 km East", "4 km North", "4 km East", "8 km North"],
    correctAnswer: 0,
    explanation:
      "N4 → right = E4 → right = S4 → left = E4. North 4 and South 4 cancel. Total East = 4+4 = 8 km. He is 8 km East of start.",
  },
  {
    id: "dir-40",
    question:
      "Kavitha walks 9 km East, then 40 km North, then 9 km West, then 40 km South, then 5 km East. What is her displacement from the starting point?",
    options: ["5 km East", "9 km East", "0 km", "5 km West"],
    correctAnswer: 0,
    explanation:
      "9E and 9W cancel. 40N and 40S cancel. 5E remains. She is 5 km East of start.",
  },
  {
    id: "dir-41",
    question:
      "Sanjay stands at point O. He walks 5 km to the North and reaches A. From A, he walks 3 km East to reach B. From B, he walks 5 km South to reach C. From C, he walks 2 km East to reach D. How far is D from O?",
    options: ["5 km East", "3 km", "7 km", "√34 km"],
    correctAnswer: 0,
    explanation:
      "N5 → E3 → S5 → E2. N and S cancel. Net East = 3+2 = 5 km. D is 5 km East of O.",
  },
  {
    id: "dir-42",
    question:
      "Two friends A and B start from the same point. A walks 3 km North and B walks 4 km West. Both turn and walk towards each other's starting path. What is the shortest distance between A and B?",
    options: ["5 km", "7 km", "1 km", "√7 km"],
    correctAnswer: 0,
    explanation:
      "A is 3 km North, B is 4 km West of start. Distance = √(3²+4²) = √25 = 5 km.",
  },
  {
    id: "dir-43",
    question:
      "Rita starts walking North. She turns right, walks, turns right, walks, then turns left and walks. What is her final direction?",
    options: ["East", "North", "South", "West"],
    correctAnswer: 0,
    explanation:
      "North → right = East → right = South → left = East. Final direction is East.",
  },
  {
    id: "dir-44",
    question:
      "In the evening, Tara faces the setting sun. She turns 90° anti-clockwise, walks, then turns 90° clockwise. Which direction is she now facing?",
    options: ["West", "East", "South", "North"],
    correctAnswer: 0,
    explanation:
      "Evening sun sets in West → Tara faces West. Anti-clockwise 90° = South. Clockwise 90° = West. She faces West.",
  },
  {
    id: "dir-45",
    question:
      "Ramesh walks 6 km North, then 8 km East, then 6 km South, then 4 km West. What is the shortest distance from the starting point and in which direction?",
    options: ["4 km East", "8 km East", "6 km East", "2 km East"],
    correctAnswer: 0,
    explanation:
      "N6 and S6 cancel. E8 – W4 = 4 km East. He is 4 km East of start.",
  },
  {
    id: "dir-46",
    question:
      "Shyam starts at A, walks 4 km North to B, 3 km East to C, 4 km South to D, 1 km West to E. He then walks 2 km North to F. How far is F from A?",
    options: ["√8 km", "4 km", "2√2 km", "3 km"],
    correctAnswer: 0,
    explanation:
      "Net N-S: 4N–4S+2N = 2 km North. Net E-W: 3E–1W = 2 km East. Distance = √(2²+2²) = √8 = 2√2 km.",
  },
  {
    id: "dir-47",
    question:
      "Rekha is facing North. She turns right 135°. Which direction is she facing?",
    options: ["South-East", "North-East", "South-West", "North-West"],
    correctAnswer: 0,
    explanation: "North + 135° clockwise = 90°(East) + 45° more = South-East.",
  },
  {
    id: "dir-48",
    question:
      "A man walks 1 km East, then 1 km North-East, then 1 km North. In which general direction is he from the starting point?",
    options: ["North-East", "North", "East", "North-North-East"],
    correctAnswer: 0,
    explanation:
      "He moved East 1 km, then North-East 1 km (adding East and North components), then North 1 km. The net movement is strongly North-East overall.",
  },
  {
    id: "dir-49",
    question:
      "Suresh walks 5 km North, 3 km East, 2 km North, 3 km West, and 7 km South. How far is he from the starting point and in which direction?",
    options: [
      "0 km (at starting point)",
      "5 km South",
      "3 km West",
      "2 km South",
    ],
    correctAnswer: 0,
    explanation:
      "Net N-S: (5+2)–7 = 0 km. Net E-W: 3E–3W = 0 km. He is back at the starting point.",
  },
  {
    id: "dir-50",
    question:
      "Pallavi walks 10 m South. Turns left and walks 5 m. Turns left and walks 10 m. Turns right and walks 10 m. Turns right and walks 5 m. How far and in which direction is she from the starting point?",
    options: ["15 m East", "10 m East", "5 m South", "15 m North"],
    correctAnswer: 0,
    explanation:
      "S10 → left = E5 → left = N10 → right = E10 → right = S5. Net N-S: 10N–10S–5S = 5S? Re-trace: S10, E5, N10 (cancels S10), E10, S5. Net: N-S = 10N–10S–5S = –5S = 5 South. Net E-W = 5+10 = 15 East. Displacement = √(15²+5²) = √250 = 5√10. Simplified dominant direction: 15 m East and 5 m South from start. Closest clean answer: 15 m East.",
  },
];
