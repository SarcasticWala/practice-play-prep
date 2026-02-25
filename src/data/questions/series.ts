import { Question } from '@/types/quiz';

export const seriesProgressionQuestions: Question[] = [
  { 
    id: 'sp-1', 
    question: 'Find the next term in the series: 2, 5, 8, 11, ?', 
    options: ['14', '13', '15', '12'], 
    correctAnswer: 0, 
    explanation: 'Common difference = 3. Next term = 11 + 3 = 14.' 
  },
  { 
    id: 'sp-2', 
    question: 'Find the 10th term of the AP: 3, 7, 11, 15, ...', 
    options: ['39', '43', '41', '37'], 
    correctAnswer: 0, 
    explanation: 'a = 3, d = 4. 10th term = a + 9d = 3 + 36 = 39.' 
  },
  { 
    id: 'sp-3', 
    question: 'Find the sum of first 20 natural numbers.', 
    options: ['210', '200', '190', '220'], 
    correctAnswer: 0, 
    explanation: 'Sum = n(n+1)/2 = 20 × 21 / 2 = 210.' 
  },
  { 
    id: 'sp-4', 
    question: 'Find the next term in the series: 3, 6, 12, 24, ?', 
    options: ['48', '36', '42', '30'], 
    correctAnswer: 0, 
    explanation: 'Geometric progression with ratio 2. Next term = 24 × 2 = 48.' 
  },
  { 
    id: 'sp-5', 
    question: 'Find the 8th term of the GP: 2, 6, 18, 54, ...', 
    options: ['4374', '4372', '4370', '4368'], 
    correctAnswer: 0, 
    explanation: 'a = 2, r = 3. 8th term = ar⁷ = 2 × 3⁷ = 2 × 2187 = 4374.' 
  },
  { 
    id: 'sp-6', 
    question: 'Find the sum of the series: 1 + 2 + 3 + ... + 50', 
    options: ['1275', '1225', '1250', '1300'], 
    correctAnswer: 0, 
    explanation: 'Sum = 50 × 51 / 2 = 1275.' 
  },
  { 
    id: 'sp-7', 
    question: 'Find the next term in the series: 1, 4, 9, 16, 25, ?', 
    options: ['36', '49', '32', '30'], 
    correctAnswer: 0, 
    explanation: 'Squares of natural numbers: 1², 2², 3², 4², 5², next = 6² = 36.' 
  },
  { 
    id: 'sp-8', 
    question: 'Find the 15th term of the AP: 5, 9, 13, 17, ...', 
    options: ['61', '65', '57', '63'], 
    correctAnswer: 0, 
    explanation: 'a = 5, d = 4. 15th term = a + 14d = 5 + 56 = 61.' 
  },
  { 
    id: 'sp-9', 
    question: 'Find the sum of first 10 multiples of 3.', 
    options: ['165', '150', '180', '195'], 
    correctAnswer: 0, 
    explanation: 'Multiples: 3,6,...,30. Sum = n/2(first+last) = 10/2 × (3+30) = 5 × 33 = 165.' 
  },
  { 
    id: 'sp-10', 
    question: 'Find the next term in the series: 2, 6, 12, 20, 30, ?', 
    options: ['42', '40', '44', '38'], 
    correctAnswer: 0, 
    explanation: 'Pattern: 1×2, 2×3, 3×4, 4×5, 5×6, next = 6×7 = 42.' 
  },
  { 
    id: 'sp-11', 
    question: 'Find the 6th term of the GP: 27, 9, 3, 1, ...', 
    options: ['1/9', '1/3', '1/27', '1/81'], 
    correctAnswer: 0, 
    explanation: 'a = 27, r = 1/3. 6th term = ar⁵ = 27 × (1/3)⁵ = 27 × 1/243 = 1/9.' 
  },
  { 
    id: 'sp-12', 
    question: 'Find the sum of the AP: 2 + 5 + 8 + ... up to 20 terms.', 
    options: ['610', '590', '630', '650'], 
    correctAnswer: 0, 
    explanation: 'a=2, d=3, n=20. Last term = 2+19×3 = 59. Sum = n/2(a+l) = 20/2 × (2+59) = 10 × 61 = 610.' 
  },
  { 
    id: 'sp-13', 
    question: 'Find the next term in the series: 5, 11, 23, 47, 95, ?', 
    options: ['191', '190', '189', '192'], 
    correctAnswer: 0, 
    explanation: 'Multiply by 2 and add 1: 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95, next = 95×2+1 = 191.' 
  },
  { 
    id: 'sp-14', 
    question: 'Find the arithmetic mean between 7 and 13.', 
    options: ['10', '9', '11', '12'], 
    correctAnswer: 0, 
    explanation: 'AM = (7+13)/2 = 10.' 
  },
  { 
    id: 'sp-15', 
    question: 'Find the geometric mean between 4 and 16.', 
    options: ['8', '6', '10', '12'], 
    correctAnswer: 0, 
    explanation: 'GM = √(4×16) = √64 = 8.' 
  },
  { 
    id: 'sp-16', 
    question: 'Find the next term in the series: 3, 4, 7, 12, 19, ?', 
    options: ['28', '27', '29', '30'], 
    correctAnswer: 0, 
    explanation: 'Differences: +1, +3, +5, +7, next difference = +9 → 19+9 = 28.' 
  },
  { 
    id: 'sp-17', 
    question: 'How many terms are there in the AP: 7, 13, 19, ..., 103?', 
    options: ['17', '16', '18', '19'], 
    correctAnswer: 0, 
    explanation: 'a=7, d=6, l=103. l = a + (n-1)d → 103 = 7 + (n-1)6 → 96 = (n-1)6 → n-1 = 16 → n = 17.' 
  },
  { 
    id: 'sp-18', 
    question: 'Find the sum of all odd numbers between 1 and 100.', 
    options: ['2500', '2400', '2600', '2550'], 
    correctAnswer: 0, 
    explanation: 'Odd numbers: 1,3,...,99. n = 50. Sum = n/2(first+last) = 50/2 × (1+99) = 25 × 100 = 2500.' 
  },
  { 
    id: 'sp-19', 
    question: 'Find the next term in the series: 2, 3, 5, 7, 11, ?', 
    options: ['13', '17', '19', '23'], 
    correctAnswer: 0, 
    explanation: 'Prime numbers: 2,3,5,7,11, next prime = 13.' 
  },
  { 
    id: 'sp-20', 
    question: 'Find the 10th term of the series: 1, 4, 7, 10, ...', 
    options: ['28', '29', '30', '31'], 
    correctAnswer: 0, 
    explanation: 'a=1, d=3. 10th term = 1 + 9×3 = 28.' 
  },
  { 
    id: 'sp-21', 
    question: 'Find the sum of the series: 1 + 3 + 5 + ... + 99', 
    options: ['2500', '2400', '2600', '2550'], 
    correctAnswer: 0, 
    explanation: 'n = 50, first=1, last=99. Sum = 50/2 × (1+99) = 25 × 100 = 2500.' 
  },
  { 
    id: 'sp-22', 
    question: 'Find the next term in the series: 1, 8, 27, 64, 125, ?', 
    options: ['216', '196', '225', '256'], 
    correctAnswer: 0, 
    explanation: 'Cubes: 1³, 2³, 3³, 4³, 5³, next = 6³ = 216.' 
  },
  { 
    id: 'sp-23', 
    question: 'Find the 7th term of the GP: 3, 6, 12, 24, ...', 
    options: ['192', '96', '384', '768'], 
    correctAnswer: 0, 
    explanation: 'a=3, r=2. 7th term = ar⁶ = 3 × 2⁶ = 3 × 64 = 192.' 
  },
  { 
    id: 'sp-24', 
    question: 'Find the sum of first 15 multiples of 4.', 
    options: ['480', '450', '420', '510'], 
    correctAnswer: 0, 
    explanation: 'Multiples: 4,8,...,60. Sum = 15/2 × (4+60) = 7.5 × 64 = 480.' 
  },
  { 
    id: 'sp-25', 
    question: 'Find the next term in the series: 2, 5, 10, 17, 26, ?', 
    options: ['37', '36', '38', '39'], 
    correctAnswer: 0, 
    explanation: 'Pattern: 1²+1, 2²+1, 3²+1, 4²+1, 5²+1, next = 6²+1 = 37.' 
  },
  { 
    id: 'sp-26', 
    question: 'If the 5th term of an AP is 17 and the 9th term is 29, find the common difference.', 
    options: ['3', '4', '2', '5'], 
    correctAnswer: 0, 
    explanation: 'a+4d=17, a+8d=29. Subtract: 4d=12 → d=3.' 
  },
  { 
    id: 'sp-27', 
    question: 'Find the sum of the series: 1 + 1/2 + 1/4 + 1/8 + ... infinite terms.', 
    options: ['2', '1', '1.5', '2.5'], 
    correctAnswer: 0, 
    explanation: 'Infinite GP with a=1, r=1/2. Sum = a/(1-r) = 1/(1-1/2) = 2.' 
  },
  { 
    id: 'sp-28', 
    question: 'Find the next term in the series: 1, 1, 2, 3, 5, 8, ?', 
    options: ['13', '11', '12', '14'], 
    correctAnswer: 0, 
    explanation: 'Fibonacci series: each term is sum of previous two. 5+8 = 13.' 
  },
  { 
    id: 'sp-29', 
    question: 'Find the 12th term of the AP: 2, 5, 8, 11, ...', 
    options: ['35', '36', '34', '33'], 
    correctAnswer: 0, 
    explanation: 'a=2, d=3. 12th term = 2 + 11×3 = 35.' 
  },
  { 
    id: 'sp-30', 
    question: 'Find the sum of all even numbers between 1 and 100.', 
    options: ['2550', '2500', '2600', '2450'], 
    correctAnswer: 0, 
    explanation: 'Even numbers: 2,4,...,100. n=50. Sum = 50/2 × (2+100) = 25 × 102 = 2550.' 
  },
  { 
    id: 'sp-31', 
    question: 'Find the next term in the series: 7, 14, 28, 56, 112, ?', 
    options: ['224', '210', '220', '230'], 
    correctAnswer: 0, 
    explanation: 'Multiply by 2 each time. 112 × 2 = 224.' 
  },
  { 
    id: 'sp-32', 
    question: 'Find the 20th term of the series: 5, 9, 13, 17, ...', 
    options: ['81', '85', '77', '79'], 
    correctAnswer: 0, 
    explanation: 'a=5, d=4. 20th term = 5 + 19×4 = 5 + 76 = 81.' 
  },
  { 
    id: 'sp-33', 
    question: 'Find the sum of the series: 1 + 4 + 7 + 10 + ... up to 25 terms.', 
    options: ['925', '950', '900', '975'], 
    correctAnswer: 0, 
    explanation: 'a=1, d=3, n=25. Last term = 1+24×3 = 73. Sum = 25/2 × (1+73) = 12.5 × 74 = 925.' 
  },
  { 
    id: 'sp-34', 
    question: 'Find the next term in the series: 1, 3, 6, 10, 15, ?', 
    options: ['21', '20', '22', '23'], 
    correctAnswer: 0, 
    explanation: 'Triangular numbers: 1, 3, 6, 10, 15, next = 21.' 
  },
  { 
    id: 'sp-35', 
    question: 'Find the 8th term of the GP: 5, 15, 45, 135, ...', 
    options: ['10935', '10933', '10937', '10939'], 
    correctAnswer: 0, 
    explanation: 'a=5, r=3. 8th term = 5 × 3⁷ = 5 × 2187 = 10935.' 
  },
  { 
    id: 'sp-36', 
    question: 'Find the sum of first 100 natural numbers.', 
    options: ['5050', '5000', '5100', '5150'], 
    correctAnswer: 0, 
    explanation: 'Sum = 100 × 101 / 2 = 5050.' 
  },
  { 
    id: 'sp-37', 
    question: 'Find the next term in the series: 2, 6, 18, 54, 162, ?', 
    options: ['486', '484', '488', '490'], 
    correctAnswer: 0, 
    explanation: 'Multiply by 3. 162 × 3 = 486.' 
  },
  { 
    id: 'sp-38', 
    question: 'If the 3rd term of an AP is 11 and the 7th term is 23, find the first term.', 
    options: ['5', '6', '7', '8'], 
    correctAnswer: 0, 
    explanation: 'a+2d=11, a+6d=23. Subtract: 4d=12 → d=3. Then a+6=11 → a=5.' 
  },
  { 
    id: 'sp-39', 
    question: 'Find the sum of the infinite GP: 1 + 1/3 + 1/9 + 1/27 + ...', 
    options: ['1.5', '2', '1.33', '1.25'], 
    correctAnswer: 0, 
    explanation: 'a=1, r=1/3. Sum = a/(1-r) = 1/(1-1/3) = 1/(2/3) = 3/2 = 1.5.' 
  },
  { 
    id: 'sp-40', 
    question: 'Find the next term in the series: 1, 2, 6, 24, 120, ?', 
    options: ['720', '600', '840', '960'], 
    correctAnswer: 0, 
    explanation: 'Factorials: 1!, 2!, 3!, 4!, 5!, next = 6! = 720.' 
  },
  { 
    id: 'sp-41', 
    question: 'Find the 10th term of the series: 2, 6, 18, 54, ...', 
    options: ['39366', '39364', '39368', '39370'], 
    correctAnswer: 0, 
    explanation: 'a=2, r=3. 10th term = 2 × 3⁹ = 2 × 19683 = 39366.' 
  },
  { 
    id: 'sp-42', 
    question: 'Find the sum of the AP: 3 + 7 + 11 + ... up to 30 terms.', 
    options: ['1830', '1860', '1890', '1920'], 
    correctAnswer: 0, 
    explanation: 'a=3, d=4, n=30. Last term = 3+29×4 = 119. Sum = 30/2 × (3+119) = 15 × 122 = 1830.' 
  },
  { 
    id: 'sp-43', 
    question: 'Find the next term in the series: 5, 7, 11, 17, 25, ?', 
    options: ['35', '37', '33', '39'], 
    correctAnswer: 0, 
    explanation: 'Differences: +2, +4, +6, +8, next difference = +10 → 25+10 = 35.' 
  },
  { 
    id: 'sp-44', 
    question: 'Find the geometric mean between 9 and 25.', 
    options: ['15', '17', '16', '14'], 
    correctAnswer: 0, 
    explanation: 'GM = √(9×25) = √225 = 15.' 
  },
  { 
    id: 'sp-45', 
    question: 'Find the sum of all two-digit numbers.', 
    options: ['4905', '4805', '5005', '5105'], 
    correctAnswer: 0, 
    explanation: 'Two-digit numbers: 10 to 99. n=90. Sum = 90/2 × (10+99) = 45 × 109 = 4905.' 
  },
  { 
    id: 'sp-46', 
    question: 'Find the next term in the series: 1, 2, 5, 10, 17, 26, ?', 
    options: ['37', '36', '38', '39'], 
    correctAnswer: 0, 
    explanation: 'Pattern: 0²+1, 1²+1, 2²+1, 3²+1, 4²+1, 5²+1, next = 6²+1 = 37.' 
  },
  { 
    id: 'sp-47', 
    question: 'Find the 15th term of the GP: 2, 4, 8, 16, ...', 
    options: ['32768', '16384', '65536', '8192'], 
    correctAnswer: 0, 
    explanation: 'a=2, r=2. 15th term = 2 × 2¹⁴ = 2¹⁵ = 32768.' 
  },
  { 
    id: 'sp-48', 
    question: 'Find the sum of first 20 odd numbers.', 
    options: ['400', '420', '380', '440'], 
    correctAnswer: 0, 
    explanation: 'Sum of first n odd numbers = n². 20² = 400.' 
  },
  { 
    id: 'sp-49', 
    question: 'Find the next term in the series: 1, 4, 10, 19, 31, ?', 
    options: ['46', '44', '48', '50'], 
    correctAnswer: 0, 
    explanation: 'Differences: +3, +6, +9, +12, next difference = +15 → 31+15 = 46.' 
  },
  { 
    id: 'sp-50', 
    question: 'Find the arithmetic mean between 3x and 5x.', 
    options: ['4x', '2x', '8x', 'x'], 
    correctAnswer: 0, 
    explanation: 'AM = (3x + 5x)/2 = 8x/2 = 4x.' 
  }
];