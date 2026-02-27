import { Question } from '@/types/quiz';

export const arrangementsSeriesQuestions: Question[] = [
  // ─── EASY: Basic Permutations & Combinations (arr-1 to arr-15) ───
  {
    id: 'arr-1',
    question: 'In how many ways can 5 different books be arranged on a shelf?',
    options: ['120', '60', '24', '720'],
    correctAnswer: 0,
    explanation: '5 books can be arranged in 5! = 5×4×3×2×1 = 120 ways.'
  },
  {
    id: 'arr-2',
    question: 'How many 3-letter words can be formed from the letters A, B, C, D without repetition?',
    options: ['24', '12', '64', '36'],
    correctAnswer: 0,
    explanation: 'P(4,3) = 4×3×2 = 24 ways.'
  },
  {
    id: 'arr-3',
    question: 'In how many ways can 4 people be selected from a group of 7?',
    options: ['35', '28', '210', '70'],
    correctAnswer: 0,
    explanation: 'C(7,4) = 7!/(4!×3!) = 35 ways.'
  },
  {
    id: 'arr-4',
    question: 'Find the next term in the series: 2, 4, 8, 16, 32, ?',
    options: ['64', '48', '56', '72'],
    correctAnswer: 0,
    explanation: 'Each term is multiplied by 2. 32 × 2 = 64.'
  },
  {
    id: 'arr-5',
    question: 'Find the next term in the series: 1, 4, 9, 16, 25, ?',
    options: ['36', '30', '35', '49'],
    correctAnswer: 0,
    explanation: 'The series is perfect squares: 1², 2², 3², 4², 5², 6² = 36.'
  },
  {
    id: 'arr-6',
    question: 'How many ways can the letters of the word "CAT" be arranged?',
    options: ['6', '3', '9', '12'],
    correctAnswer: 0,
    explanation: '3 distinct letters: 3! = 6 arrangements.'
  },
  {
    id: 'arr-7',
    question: 'Find the next term in the series: 3, 6, 9, 12, 15, ?',
    options: ['18', '17', '20', '21'],
    correctAnswer: 0,
    explanation: 'Arithmetic series with common difference 3. 15 + 3 = 18.'
  },
  {
    id: 'arr-8',
    question: 'In how many ways can 3 students be chosen from a class of 10?',
    options: ['120', '720', '30', '90'],
    correctAnswer: 0,
    explanation: 'C(10,3) = 10!/(3!×7!) = 120 ways.'
  },
  {
    id: 'arr-9',
    question: 'Find the next term in the series: 1, 3, 7, 15, 31, ?',
    options: ['63', '47', '61', '59'],
    correctAnswer: 0,
    explanation: 'Each term = previous × 2 + 1. 31 × 2 + 1 = 63.'
  },
  {
    id: 'arr-10',
    question: 'How many 2-digit numbers can be formed using digits 1, 2, 3, 4, 5 without repetition?',
    options: ['20', '25', '10', '15'],
    correctAnswer: 0,
    explanation: 'P(5,2) = 5×4 = 20 numbers.'
  },
  {
    id: 'arr-11',
    question: 'Find the missing term: 5, 10, 20, ?, 80, 160.',
    options: ['40', '30', '35', '45'],
    correctAnswer: 0,
    explanation: 'Each term is multiplied by 2. 20 × 2 = 40.'
  },
  {
    id: 'arr-12',
    question: 'In how many ways can 6 people stand in a queue?',
    options: ['720', '120', '360', '240'],
    correctAnswer: 0,
    explanation: '6! = 6×5×4×3×2×1 = 720 ways.'
  },
  {
    id: 'arr-13',
    question: 'Find the next term in the series: 2, 5, 10, 17, 26, ?',
    options: ['37', '33', '35', '39'],
    correctAnswer: 0,
    explanation: 'Differences are 3, 5, 7, 9, 11. Next = 26 + 11 = 37.'
  },
  {
    id: 'arr-14',
    question: 'How many ways can 2 prizes be given to 5 students if each student can win at most one prize?',
    options: ['20', '10', '25', '15'],
    correctAnswer: 0,
    explanation: 'P(5,2) = 5×4 = 20 ways (order matters — 1st and 2nd prize differ).'
  },
  {
    id: 'arr-15',
    question: 'Find the next term in the series: 1, 1, 2, 3, 5, 8, 13, ?',
    options: ['21', '18', '20', '24'],
    correctAnswer: 0,
    explanation: 'Fibonacci series: each term = sum of the two preceding terms. 8 + 13 = 21.'
  },

  // ─── MEDIUM: Restricted Arrangements, Circular, Combinations (arr-16 to arr-35) ───
  {
    id: 'arr-16',
    question: 'In how many ways can the letters of the word "APPLE" be arranged?',
    options: ['60', '120', '30', '24'],
    correctAnswer: 0,
    explanation: '"APPLE" has 5 letters with P repeated twice. Arrangements = 5!/2! = 60.'
  },
  {
    id: 'arr-17',
    question: 'Find the next term in the series: 6, 11, 21, 41, 81, ?',
    options: ['161', '121', '141', '151'],
    correctAnswer: 0,
    explanation: 'Each term = previous × 2 – 1. 81 × 2 – 1 = 161.'
  },
  {
    id: 'arr-18',
    question: 'In how many ways can 5 people be seated around a circular table?',
    options: ['24', '120', '60', '48'],
    correctAnswer: 0,
    explanation: 'Circular arrangements = (n−1)! = (5−1)! = 4! = 24.'
  },
  {
    id: 'arr-19',
    question: 'How many 4-letter words can be formed from the letters of "BOOK" without repetition?',
    options: ['12', '24', '48', '6'],
    correctAnswer: 0,
    explanation: '"BOOK" has 4 letters with O repeated twice. Arrangements = 4!/2! = 12.'
  },
  {
    id: 'arr-20',
    question: 'Find the missing term in the series: 3, 8, 15, 24, ?, 48.',
    options: ['35', '30', '33', '38'],
    correctAnswer: 0,
    explanation: 'Pattern: n²+2n = (1²+2),(2²+4),(3²+6),(4²+8),(5²+10),(6²+12) → 3,8,15,24,35,48. Missing = 35.'
  },
  {
    id: 'arr-21',
    question: 'How many ways can 4 boys and 3 girls be arranged in a row such that all girls are together?',
    options: ['720', '5040', '360', '120'],
    correctAnswer: 0,
    explanation: 'Treat 3 girls as 1 unit → 5 units arrange in 5! = 120 ways. Girls arrange among themselves in 3! = 6 ways. Total = 120 × 6 = 720.'
  },
  {
    id: 'arr-22',
    question: 'Find the next term: 144, 121, 100, 81, 64, ?',
    options: ['49', '36', '25', '55'],
    correctAnswer: 0,
    explanation: 'Series of perfect squares in descending order: 12², 11², 10², 9², 8², 7² = 49.'
  },
  {
    id: 'arr-23',
    question: 'A committee of 3 men and 2 women is to be formed from 6 men and 5 women. In how many ways can this be done?',
    options: ['200', '150', '120', '250'],
    correctAnswer: 0,
    explanation: 'C(6,3) × C(5,2) = 20 × 10 = 200 ways.'
  },
  {
    id: 'arr-24',
    question: 'Find the next term in the series: 1, 8, 27, 64, 125, ?',
    options: ['216', '196', '256', '343'],
    correctAnswer: 0,
    explanation: 'Series of perfect cubes: 1³, 2³, 3³, 4³, 5³, 6³ = 216.'
  },
  {
    id: 'arr-25',
    question: 'In how many ways can the letters of "MISSISSIPPI" be arranged?',
    options: ['34650', '11!', '69300', '17325'],
    correctAnswer: 0,
    explanation: '11 letters: M=1, I=4, S=4, P=2. Arrangements = 11!/(4!×4!×2!) = 39916800/1152 = 34650.'
  },
  {
    id: 'arr-26',
    question: 'Find the missing term: 7, 14, ?, 56, 112.',
    options: ['28', '21', '35', '42'],
    correctAnswer: 0,
    explanation: 'Each term is multiplied by 2. 14 × 2 = 28.'
  },
  {
    id: 'arr-27',
    question: 'How many 4-digit numbers can be formed using digits 0–9 without repetition that are divisible by 5?',
    options: ['952', '840', '1512', '504'],
    correctAnswer: 0,
    explanation: 'Units digit = 0 or 5. If units = 0: remaining 3 digits from 9 digits = P(9,3) = 504. If units = 5: thousands ≠ 0, so 8 choices × P(8,2) = 8×56 = 448. Total = 504 + 448 = 952.'
  },
  {
    id: 'arr-28',
    question: 'Find the next term in the series: 2, 3, 5, 9, 17, 33, ?',
    options: ['65', '61', '67', '63'],
    correctAnswer: 0,
    explanation: 'Each term = previous × 2 – 1. 33 × 2 – 1 = 65.'
  },
  {
    id: 'arr-29',
    question: 'In how many ways can 8 people be seated around a circular table such that 2 specific people always sit together?',
    options: ['1440', '720', '5040', '2880'],
    correctAnswer: 0,
    explanation: 'Treat the 2 together as 1 unit → 7 units in circular = (7-1)! = 720. The pair can swap = 2! = 2. Total = 720 × 2 = 1440.'
  },
  {
    id: 'arr-30',
    question: 'Find the missing term: 4, 9, 20, 43, ?, 183.',
    options: ['90', '88', '86', '92'],
    correctAnswer: 0,
    explanation: 'Pattern: term × 2 + 2 = next. 4×2+1=9, 9×2+2=20, 20×2+3=43, 43×2+4=90, 90×2+3=183. Missing = 90.'
  },
  {
    id: 'arr-31',
    question: 'How many words can be formed from "SUNDAY" starting with S and ending with Y?',
    options: ['24', '120', '48', '12'],
    correctAnswer: 0,
    explanation: 'S and Y are fixed. Remaining 4 letters (U,N,D,A) arrange in 4! = 24 ways.'
  },
  {
    id: 'arr-32',
    question: 'Find the next term in the series: 5, 11, 23, 47, 95, ?',
    options: ['191', '185', '189', '193'],
    correctAnswer: 0,
    explanation: 'Each term = previous × 2 + 1. 95 × 2 + 1 = 191.'
  },
  {
    id: 'arr-33',
    question: 'From a group of 10 people, in how many ways can a president, vice-president, and secretary be chosen?',
    options: ['720', '120', '360', '1000'],
    correctAnswer: 0,
    explanation: 'P(10,3) = 10×9×8 = 720 ways (order matters for distinct roles).'
  },
  {
    id: 'arr-34',
    question: 'Find the missing term: 1, 6, 15, 28, ?, 66.',
    options: ['45', '40', '50', '55'],
    correctAnswer: 0,
    explanation: 'Differences: 5, 9, 13, 17, 21. Differences increase by 4. 28 + 17 = 45, 45 + 21 = 66. Missing = 45.'
  },
  {
    id: 'arr-35',
    question: 'In how many ways can the word "ARRANGE" be arranged so that the two R\'s do not come together?',
    options: ['900', '1260', '1800', '720'],
    correctAnswer: 0,
    explanation: '"ARRANGE" has 7 letters (A=2, R=2, N,G,E). Total = 7!/(2!×2!) = 1260. With R\'s together: 6!/2! = 360. Without = 1260 – 360 = 900.'
  },

  // ─── HARD: Complex Arrangements, Mixed Series, Advanced Combos (arr-36 to arr-50) ───
  {
    id: 'arr-36',
    question: 'Find the next term: 3, 5, 8, 13, 21, 34, ?',
    options: ['55', '50', '52', '47'],
    correctAnswer: 0,
    explanation: 'Each term is the sum of the two preceding terms (Fibonacci-style). 21 + 34 = 55.'
  },
  {
    id: 'arr-37',
    question: 'How many 5-digit numbers can be formed using 1, 2, 3, 4, 5 with repetition such that the number is always odd?',
    options: ['1875', '3125', '1250', '625'],
    correctAnswer: 0,
    explanation: 'Units digit must be odd (1, 3, or 5) = 3 choices. Each of the remaining 4 positions has 5 choices. Total = 5⁴ × 3 = 625 × 3 = 1875.'
  },
  {
    id: 'arr-38',
    question: 'Find the missing term in the series: 2, 7, 26, 101, ?, 1576.',
    options: ['400', '376', '404', '398'],
    correctAnswer: 0,
    explanation: 'Pattern: each term = previous × 4 − 1. 2×4−1=7, 7×4−2=26, 26×4−3=101, 101×4−4=400, 400×4−24=1576. Missing = 400.'
  },
  {
    id: 'arr-39',
    question: 'How many ways can 6 people be divided into 2 groups of 3?',
    options: ['10', '20', '15', '30'],
    correctAnswer: 0,
    explanation: 'C(6,3)/2! = 20/2 = 10 ways (divide by 2! because the two groups are indistinguishable).'
  },
  {
    id: 'arr-40',
    question: 'Find the next term: 0, 4, 18, 48, 100, ?',
    options: ['180', '150', '162', '196'],
    correctAnswer: 0,
    explanation: 'Pattern: n²(n−1) for n=1,2,3,4,5,6 → 0, 4, 18, 48, 100, 180. At n=6: 36×5 = 180.'
  },
  {
    id: 'arr-41',
    question: 'In a row of 7 seats, in how many ways can 4 men and 3 women be seated alternately starting with a man?',
    options: ['144', '720', '72', '288'],
    correctAnswer: 0,
    explanation: 'Positions M_W_M_W_M_W_M. Men in 4 positions: 4! = 24. Women in 3 positions: 3! = 6. Total = 24 × 6 = 144.'
  },
  {
    id: 'arr-42',
    question: 'Find the missing term: 8, 24, 72, ?, 648, 1944.',
    options: ['216', '192', '200', '224'],
    correctAnswer: 0,
    explanation: 'Each term is multiplied by 3. 72 × 3 = 216.'
  },
  {
    id: 'arr-43',
    question: 'How many 6-letter words (with or without meaning) can be formed from the letters of "MASTER" without repetition?',
    options: ['720', '360', '1440', '120'],
    correctAnswer: 0,
    explanation: '"MASTER" has 6 distinct letters. Arrangements = 6! = 720.'
  },
  {
    id: 'arr-44',
    question: 'Find the next term: 1, 2, 6, 24, 120, ?',
    options: ['720', '600', '360', '840'],
    correctAnswer: 0,
    explanation: 'Series of factorials: 1!, 2!, 3!, 4!, 5!, 6! = 720.'
  },
  {
    id: 'arr-45',
    question: 'How many ways can a team of 11 be selected from 15 players if a particular player must always be included?',
    options: ['1001', '2002', '3003', '1365'],
    correctAnswer: 0,
    explanation: 'Fix 1 player; choose remaining 10 from 14. C(14,10) = C(14,4) = 1001.'
  },
  {
    id: 'arr-46',
    question: 'Find the missing term: 13, 14, 18, 27, ?, 68.',
    options: ['43', '40', '45', '48'],
    correctAnswer: 0,
    explanation: 'Differences: 1, 4, 9, 16, 25 (perfect squares). 27 + 16 = 43, 43 + 25 = 68. Missing = 43.'
  },
  {
    id: 'arr-47',
    question: 'In how many ways can the letters of "EQUATION" be arranged such that all vowels are together?',
    options: ['2880', '8640', '4320', '1440'],
    correctAnswer: 0,
    explanation: '"EQUATION" has vowels E,U,A,I,O (5) and consonants Q,T,N (3). Treat 5 vowels as 1 block → 4 units arrange in 4! = 24 ways. Vowels within the block arrange in 5! = 120 ways. Total = 24 × 120 = 2880.'
  },
  {
    id: 'arr-48',
    question: 'Find the next term in the series: 7, 13, 25, 49, 97, ?',
    options: ['193', '181', '189', '195'],
    correctAnswer: 0,
    explanation: 'Each term = previous × 2 – 1. 97 × 2 – 1 = 193.'
  },
  {
    id: 'arr-49',
    question: 'In how many ways can 5 red, 4 blue, and 3 white balls be arranged in a row (identical balls of same color)?',
    options: ['27720', '479001600', '55440', '13860'],
    correctAnswer: 0,
    explanation: 'Total = 12 balls. Arrangements = 12!/(5!×4!×3!) = 479001600/17280 = 27720.'
  },
  {
    id: 'arr-50',
    question: 'Find the missing term: 2, 5, 11, 20, 32, ?, 65.',
    options: ['47', '43', '50', '45'],
    correctAnswer: 0,
    explanation: 'Differences: 3, 6, 9, 12, 15, 18. Differences increase by 3. 32 + 15 = 47, 47 + 18 = 65. Missing = 47.'
  }
];