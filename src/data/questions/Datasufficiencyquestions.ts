import { Question } from '@/types/quiz';

export const dataSufficiencyQuestions: Question[] = [

  // ─── EASY: Single Statement Sufficient (ds-1 to ds-15) ───
  {
    id: 'ds-1',
    question: 'Question: What is the value of x?\nStatement I: x + 5 = 12\nStatement II: x is a positive integer less than 10\n\nChoose the correct option:',
    options: [
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient',
      'Both statements together are not sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: x + 5 = 12 → x = 7. Uniquely determined. Sufficient alone.\nStatement II: x is a positive integer less than 10 → x ∈ {1,2,3,...,9}. Not unique. Insufficient.\nAnswer: Statement I alone is sufficient.'
  },
  {
    id: 'ds-2',
    question: 'Question: Is integer N even?\nStatement I: N/2 is an integer.\nStatement II: N + 1 is odd.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: N/2 is an integer → N is divisible by 2 → N is even. Sufficient.\nStatement II: N + 1 is odd → N is even (even + 1 = odd). Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-3',
    question: 'Question: What is the area of a rectangle?\nStatement I: The perimeter of the rectangle is 40 cm.\nStatement II: The length of the rectangle is 12 cm.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are not sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: perimeter = 40 → 2(l+b) = 40 → l+b = 20. Many combinations possible. Insufficient.\nStatement II alone: l = 12 but breadth unknown. Insufficient.\nBoth together: l = 12, l+b = 20 → b = 8. Area = 12×8 = 96 cm². Sufficient.'
  },
  {
    id: 'ds-4',
    question: 'Question: What is the age of Ravi?\nStatement I: Ravi is 5 years older than Sita.\nStatement II: Sita\'s age is 20 years.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: Ravi = Sita + 5. Sita unknown. Insufficient.\nStatement II alone: Sita = 20. Ravi unknown. Insufficient.\nBoth together: Ravi = 20 + 5 = 25 years. Sufficient.'
  },
  {
    id: 'ds-5',
    question: 'Question: Is triangle ABC a right-angled triangle?\nStatement I: AB² + BC² = AC².\nStatement II: Angle B = 90°.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: AB² + BC² = AC² → by Pythagoras, the triangle is right-angled at B. Sufficient.\nStatement II: Angle B = 90° → directly confirms right-angled triangle. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-6',
    question: 'Question: What is the value of x²?\nStatement I: x = 7\nStatement II: x² – 49 = 0\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: x = 7 → x² = 49. Sufficient.\nStatement II: x² = 49 directly. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-7',
    question: 'Question: What is the speed of a train?\nStatement I: The train covers 300 km in 3 hours.\nStatement II: The train covers 100 km in 1 hour.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: Speed = 300/3 = 100 km/h. Sufficient.\nStatement II: Speed = 100/1 = 100 km/h. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-8',
    question: 'Question: What is the value of a + b?\nStatement I: a = 10, b = 15\nStatement II: a – b = –5 and a × b = 150\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: a+b = 10+15 = 25. Sufficient.\nStatement II: a–b = –5 and a×b = 150. From (a+b)² = (a–b)² + 4ab = 25 + 600 = 625 → a+b = 25. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-9',
    question: 'Question: How many students are in the class?\nStatement I: If 5 students leave, the class has 30 students.\nStatement II: The class has more than 30 but fewer than 40 students.\n\nChoose the correct option:',
    options: [
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient',
      'Both statements together are not sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: students – 5 = 30 → students = 35. Sufficient.\nStatement II: 30 < students < 40 → could be 31,32,...,39. Not unique. Insufficient.\nStatement I alone is sufficient.'
  },
  {
    id: 'ds-10',
    question: 'Question: Is x > 0?\nStatement I: x² = 25\nStatement II: x³ = 125\n\nChoose the correct option:',
    options: [
      'Statement II alone is sufficient',
      'Statement I alone is sufficient',
      'Both statements together are sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: x² = 25 → x = ±5. Could be positive or negative. Insufficient.\nStatement II: x³ = 125 → x = 5. Since 5 > 0, we can confirm x > 0. Sufficient.\nStatement II alone is sufficient.'
  },
  {
    id: 'ds-11',
    question: 'Question: What is the simple interest on a principal for 2 years?\nStatement I: The rate of interest is 10% per annum.\nStatement II: The principal amount is ₹5000.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: Rate known, principal and time unknown. Insufficient.\nStatement II alone: Principal known, rate unknown. Insufficient.\nBoth together: SI = (5000 × 10 × 2)/100 = ₹1000. Sufficient.'
  },
  {
    id: 'ds-12',
    question: 'Question: What is the two-digit number?\nStatement I: The sum of the digits is 9.\nStatement II: The number is divisible by 9.\n\nChoose the correct option:',
    options: [
      'Both statements together are not sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: Sum of digits = 9 → 18, 27, 36, 45, 54, 63, 72, 81, 90. Multiple values. Insufficient.\nStatement II: Divisible by 9 → 18, 27, 36, ..., 90. Same set. Insufficient.\nBoth together: Same set still. Not uniquely determined. Both together still insufficient.'
  },
  {
    id: 'ds-13',
    question: 'Question: What is the cost price of an article?\nStatement I: The article is sold for ₹450 at a profit of 50%.\nStatement II: The profit earned is ₹150.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: SP = 450, Profit = 50% → CP = 450/1.5 = ₹300. Sufficient.\nStatement II: Profit = 150. SP – CP = 150. SP unknown, so CP cannot be determined alone.\nWait — if we know profit is ₹150 and SP would be needed. Actually Statement II alone: profit = 150 → CP = SP – 150, but SP unknown. Insufficient. Only Statement I alone is sufficient.'
  },
  {
    id: 'ds-14',
    question: 'Question: What is the circumference of a circle?\nStatement I: The diameter of the circle is 14 cm.\nStatement II: The area of the circle is 154 cm².\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: diameter = 14 → circumference = πd = 44 cm. Sufficient.\nStatement II: area = 154 = πr² → r = 7 → circumference = 2πr = 44 cm. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-15',
    question: 'Question: What is the value of p?\nStatement I: 2p + 3q = 19\nStatement II: p + q = 8\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are not sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: two unknowns, one equation. Insufficient.\nStatement II alone: two unknowns, one equation. Insufficient.\nBoth together: From II, q = 8–p. Substituting in I: 2p + 3(8–p) = 19 → 2p + 24 – 3p = 19 → –p = –5 → p = 5. Sufficient.'
  },

  // ─── MEDIUM: Two Statements, Mixed Sufficiency (ds-16 to ds-35) ───
  {
    id: 'ds-16',
    question: 'Question: What is the average of five numbers?\nStatement I: The sum of the five numbers is 250.\nStatement II: Four of the five numbers are 40, 50, 60, and 70.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: Sum = 250 → Average = 250/5 = 50. Sufficient.\nStatement II: Sum of 4 = 220. Fifth number unknown → sum unknown → average unknown. Insufficient.\nStatement I alone is sufficient.'
  },
  {
    id: 'ds-17',
    question: 'Question: In how many days can A and B together complete a work?\nStatement I: A alone can complete the work in 12 days.\nStatement II: B alone can complete the work in 15 days.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: A\'s rate = 1/12. B unknown. Insufficient.\nStatement II alone: B\'s rate = 1/15. A unknown. Insufficient.\nBoth together: Combined rate = 1/12 + 1/15 = 5/60 + 4/60 = 9/60 = 3/20. Days = 20/3 ≈ 6.67 days. Sufficient.'
  },
  {
    id: 'ds-18',
    question: 'Question: What is the selling price of an article?\nStatement I: The cost price is ₹800 and the profit is 25%.\nStatement II: The profit earned is ₹200.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: SP = 800 × 1.25 = ₹1000. Sufficient.\nStatement II: Profit = ₹200 → SP = CP + 200. CP unknown. Insufficient.\nStatement I alone is sufficient.'
  },
  {
    id: 'ds-19',
    question: 'Question: Is quadrilateral ABCD a square?\nStatement I: All four sides are equal.\nStatement II: All four angles are 90°.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: All sides equal → could be rhombus (angles not 90°). Insufficient.\nStatement II alone: All angles 90° → could be rectangle (sides not equal). Insufficient.\nBoth together: All sides equal AND all angles 90° → definitely a square. Sufficient.'
  },
  {
    id: 'ds-20',
    question: 'Question: What is the two-digit number where tens digit is x and units digit is y?\nStatement I: x + y = 11 and x – y = 3.\nStatement II: The number is between 70 and 80.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: x+y=11 and x–y=3 → 2x=14 → x=7, y=4 → number = 74. Sufficient.\nStatement II: Numbers between 70 and 80 → 71,72,...,79. Not unique. Insufficient.\nStatement I alone is sufficient.'
  },
  {
    id: 'ds-21',
    question: 'Question: What is the ratio of boys to girls in a class?\nStatement I: There are 30 boys in the class.\nStatement II: The class has 50 students in total.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are not sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: 30 boys, girls unknown. Insufficient.\nStatement II alone: 50 total, boys and girls individually unknown. Insufficient.\nBoth together: Girls = 50 – 30 = 20. Ratio = 30:20 = 3:2. Sufficient.'
  },
  {
    id: 'ds-22',
    question: 'Question: What is the volume of a cuboid?\nStatement I: Length = 5 cm, Breadth = 4 cm.\nStatement II: Height = 3 cm, and the base area is 20 cm².\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: L=5, B=4, H unknown. Volume = 5×4×H. Insufficient.\nStatement II alone: Base area = 20, H = 3 → Volume = 20×3 = 60 cm³. Sufficient.\nStatement II alone is sufficient.'
  },
  {
    id: 'ds-23',
    question: 'Question: What is the present age of the father?\nStatement I: The father is 3 times as old as his son.\nStatement II: The son is 12 years old.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: Father = 3 × son. Son unknown. Insufficient.\nStatement II alone: Son = 12. Father unknown. Insufficient.\nBoth together: Father = 3 × 12 = 36 years. Sufficient.'
  },
  {
    id: 'ds-24',
    question: 'Question: What is the compound interest on ₹10,000 for 2 years?\nStatement I: The rate of compound interest is 10% per annum.\nStatement II: The simple interest on the same amount for 2 years is ₹2000.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: P=10000, R=10%, T=2. CI = 10000[(1.1)²–1] = 10000×0.21 = ₹2100. Sufficient.\nStatement II: SI = ₹2000 for 2 years → Rate = (2000×100)/(10000×2) = 10%. Then CI = ₹2100. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-25',
    question: 'Question: What is the distance between city A and city B?\nStatement I: A car travels from A to B at 60 km/h.\nStatement II: The car takes 3 hours to travel from A to B.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: Speed = 60 km/h. Time unknown. Insufficient.\nStatement II alone: Time = 3 hours. Speed unknown. Insufficient.\nBoth together: Distance = 60 × 3 = 180 km. Sufficient.'
  },
  {
    id: 'ds-26',
    question: 'Question: What is the value of (x + y)?\nStatement I: x² + y² = 29\nStatement II: xy = 10\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are not sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: x²+y² = 29. Cannot find x+y without xy. Insufficient.\nStatement II alone: xy = 10. Cannot find x+y without x²+y². Insufficient.\nBoth together: (x+y)² = x²+y²+2xy = 29+20 = 49 → x+y = ±7. Two possible values — not unique. Both together insufficient.'
  },
  {
    id: 'ds-27',
    question: 'Question: What is the LCM of two numbers?\nStatement I: The HCF of the two numbers is 12.\nStatement II: The product of the two numbers is 2160.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: HCF = 12. LCM unknown without the product or the numbers. Insufficient.\nStatement II alone: Product = 2160. LCM unknown without HCF. Insufficient.\nBoth together: LCM = Product / HCF = 2160 / 12 = 180. Sufficient.'
  },
  {
    id: 'ds-28',
    question: 'Question: Is x a prime number?\nStatement I: x is an odd number between 10 and 20.\nStatement II: x is not divisible by 3 or 5.\n\nChoose the correct option:',
    options: [
      'Both statements together are not sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: Odd numbers between 10 and 20: 11,13,15,17,19. Some prime (11,13,17,19), one not (15). Insufficient.\nStatement II alone: not divisible by 3 or 5. x could be many things. Insufficient.\nBoth together: Odd numbers between 10–20 not divisible by 3 or 5: exclude 15 (div by 3 and 5). Remaining: 11,13,17,19 — all prime? 11✓,13✓,17✓,19✓ — yes all prime. But there are multiple values, so we can confirm x IS prime but can\'t identify which specific prime. The question is "is x prime?" not "what is x?" → Both together confirm yes, x is prime. Sufficient.'
  },
  {
    id: 'ds-29',
    question: 'Question: What is the marked price of an article?\nStatement I: A discount of 20% is given and the selling price is ₹800.\nStatement II: The profit earned after giving discount is 14.28%.\n\nChoose the correct option:',
    options: [
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: SP = 800 after 20% discount. MP × 0.80 = 800 → MP = ₹1000. Sufficient.\nStatement II alone: Profit % known but SP and CP unknown. Cannot determine MP. Insufficient.\nStatement I alone is sufficient.'
  },
  {
    id: 'ds-30',
    question: 'Question: What is the probability of drawing a red ball from a bag?\nStatement I: The bag contains 5 red balls and 10 blue balls.\nStatement II: The probability of drawing a blue ball is 2/3.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: P(red) = 5/(5+10) = 5/15 = 1/3. Sufficient.\nStatement II: P(blue) = 2/3 → P(red) = 1 – 2/3 = 1/3. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-31',
    question: 'Question: What is the sum of interior angles of a polygon?\nStatement I: The polygon has 7 sides.\nStatement II: The polygon is a regular heptagon.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Sum of interior angles = (n–2)×180°. We only need the number of sides.\nStatement I: n = 7 → sum = 5×180 = 900°. Sufficient.\nStatement II: Heptagon = 7 sides → sum = 900°. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-32',
    question: 'Question: What is the original number if digits are reversed to form a new number?\nStatement I: The original number exceeds the reversed number by 27.\nStatement II: The sum of the digits of the original number is 11.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are not sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Let number = 10a+b. Statement I: (10a+b)–(10b+a) = 27 → 9(a–b) = 27 → a–b = 3. Statement II: a+b = 11. Both together: a–b=3 and a+b=11 → 2a=14 → a=7, b=4 → number = 74. Sufficient together.'
  },
  {
    id: 'ds-33',
    question: 'Question: What is the value of the expression 3a – 2b?\nStatement I: a = 5 and b = 3\nStatement II: 6a – 4b = 18\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: 3(5)–2(3) = 15–6 = 9. Sufficient.\nStatement II: 6a–4b = 18 → 2(3a–2b) = 18 → 3a–2b = 9. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-34',
    question: 'Question: What is the time taken by a train to cross a platform?\nStatement I: The train is 200 m long and travels at 72 km/h.\nStatement II: The platform is 100 m long.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: Train length = 200 m, Speed = 72 km/h = 20 m/s. Platform length unknown. Insufficient.\nStatement II alone: Platform = 100 m, train length and speed unknown. Insufficient.\nBoth together: Total distance = 200+100 = 300 m. Time = 300/20 = 15 seconds. Sufficient.'
  },
  {
    id: 'ds-35',
    question: 'Question: What is the percentage profit?\nStatement I: The cost price is ₹600.\nStatement II: The selling price is ₹750.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: CP = 600. SP unknown. Insufficient.\nStatement II alone: SP = 750. CP unknown. Insufficient.\nBoth together: Profit = 750–600 = 150. Profit% = (150/600)×100 = 25%. Sufficient.'
  },

  // ─── HARD: Tricky, Non-Obvious & Multi-Concept (ds-36 to ds-50) ───
  {
    id: 'ds-36',
    question: 'Question: What is the value of x + y + z?\nStatement I: x + y = 15 and y + z = 18.\nStatement II: x + z = 13 and y = 8.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: x+y=15 and y+z=18. Adding: x+2y+z=33. Cannot find x+y+z without y. Insufficient alone.\nStatement II: x+z=13 and y=8 → x+y+z = 13+8 = 21. Sufficient.\nStatement II alone is sufficient.'
  },
  {
    id: 'ds-37',
    question: 'Question: Is the number N divisible by 12?\nStatement I: N is divisible by 4.\nStatement II: N is divisible by 3.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Divisible by 12 requires divisibility by both 4 and 3 (since 12 = 4×3 and gcd(4,3)=1).\nStatement I alone: N divisible by 4. Not necessarily by 3. Insufficient.\nStatement II alone: N divisible by 3. Not necessarily by 4. Insufficient.\nBoth together: Divisible by both 4 and 3 → divisible by 12. Sufficient.'
  },
  {
    id: 'ds-38',
    question: 'Question: What is the area of an equilateral triangle?\nStatement I: The perimeter of the triangle is 18 cm.\nStatement II: One side of the triangle is 6 cm.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'For equilateral triangle, area = (√3/4)a² where a = side.\nStatement I: Perimeter = 18 → a = 6. Area = (√3/4)×36 = 9√3 cm². Sufficient.\nStatement II: a = 6 → Area = 9√3 cm². Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-39',
    question: 'Question: In what ratio did P and Q invest in a business?\nStatement I: P invested ₹12,000 for 6 months.\nStatement II: Q invested for 8 months and their profit share is 3:4.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are not sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Profit ratio = Capital × Time. Statement I: P\'s investment = 12000×6 = 72000. Q\'s amount unknown. Insufficient.\nStatement II: Q\'s time = 8 months, profit ratio = 3:4. P\'s time unknown. Insufficient.\nBoth together: P:Q profit = 72000 : (Q×8) = 3:4 → Q = (72000×4)/(3×8) = 12000. So Q invested ₹12000. Ratio = 12000:12000 = 1:1. Sufficient.'
  },
  {
    id: 'ds-40',
    question: 'Question: What is the value of x³ + y³?\nStatement I: x + y = 5 and xy = 6\nStatement II: x – y = 1 and x² + y² = 13\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'x³+y³ = (x+y)(x²–xy+y²) = (x+y)[(x+y)²–3xy].\nStatement I: x+y=5, xy=6 → x³+y³ = 5×(25–18) = 5×7 = 35. Sufficient.\nStatement II: x–y=1 and x²+y²=13. xy = [(x+y)²–(x²+y²)]/2. (x+y)² = (x–y)²+4xy = 1+4xy. Also x²+y²=13 and (x+y)²=x²+y²+2xy=13+2xy. And (x–y)²=x²+y²–2xy=13–2xy=1 → 2xy=12 → xy=6. x+y = √(13+12)=√25=5. x³+y³=35. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-41',
    question: 'Question: Is the quadrilateral PQRS a parallelogram?\nStatement I: PQ = RS and PQ ∥ RS.\nStatement II: PS = QR.\n\nChoose the correct option:',
    options: [
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: One pair of opposite sides equal AND parallel → by definition, PQRS is a parallelogram. Sufficient.\nStatement II: PS = QR (one pair of opposite sides equal but no info on parallelism or the other pair). Not sufficient alone.\nStatement I alone is sufficient.'
  },
  {
    id: 'ds-42',
    question: 'Question: What is the speed of the boat in still water?\nStatement I: The boat takes 4 hours to travel 48 km downstream.\nStatement II: The speed of the current is 3 km/h.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: Downstream speed = 48/4 = 12 km/h. Current unknown. Insufficient.\nStatement II: Current = 3 km/h. Downstream speed unknown. Insufficient.\nBoth together: Boat speed = Downstream speed – Current = 12–3 = 9 km/h. Sufficient.'
  },
  {
    id: 'ds-43',
    question: 'Question: What is the remainder when N is divided by 5?\nStatement I: N when divided by 10 gives remainder 7.\nStatement II: N = 4k + 2 for some integer k.\n\nChoose the correct option:',
    options: [
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient',
      'Both statements together are not sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: N = 10q+7. N mod 5: (10q+7) mod 5 = 0 + 2 = 2. Remainder is always 2. Sufficient.\nStatement II: N = 4k+2. k=0→N=2→rem=2; k=1→N=6→rem=1; k=2→N=10→rem=0. Not unique. Insufficient.\nStatement I alone is sufficient.'
  },
  {
    id: 'ds-44',
    question: 'Question: How many days will A, B, and C together take to complete a work?\nStatement I: A and B together complete it in 8 days.\nStatement II: B and C together complete it in 12 days; A alone takes 24 days.\n\nChoose the correct option:',
    options: [
      'Both statements together are sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are not sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I alone: A+B rate = 1/8. C unknown. Insufficient.\nStatement II alone: B+C = 1/12, A = 1/24. B = (B+C) – C, but C unknown separately. However: A+B+C = A + (B+C) = 1/24 + 1/12 = 1/24 + 2/24 = 3/24 = 1/8. Sufficient.\nStatement II alone is sufficient.'
  },
  {
    id: 'ds-45',
    question: 'Question: What is the value of a² + b² + c²?\nStatement I: a + b + c = 10 and ab + bc + ca = 31.\nStatement II: a = 2, b = 3, c = 5.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'a²+b²+c² = (a+b+c)² – 2(ab+bc+ca).\nStatement I: = 100 – 62 = 38. Sufficient.\nStatement II: 4+9+25 = 38. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-46',
    question: 'Question: What is the number of ways to arrange 4 boys and 3 girls in a row such that all girls are together?\nStatement I: There are 4 boys and 3 girls.\nStatement II: Total arrangements with girls always adjacent is 720.\n\nChoose the correct option:',
    options: [
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient',
      'Either statement alone is sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: Treat 3 girls as 1 unit → 5 entities → 5! arrangements × 3! within = 120×6 = 720. Sufficient.\nStatement II: Directly states 720 arrangements. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-47',
    question: 'Question: What is the present value of an investment?\nStatement I: The investment doubles in 6 years at simple interest.\nStatement II: The rate of simple interest is 16.67% per annum.\n\nChoose the correct option:',
    options: [
      'Both statements together are not sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'To find present value, we need actual money values — not just rate or doubling time.\nStatement I: Doubles in 6 years → rate = 100/6 ≈ 16.67%. No principal given. Cannot determine present value. Insufficient.\nStatement II: Rate = 16.67%. No principal or future value given. Insufficient.\nBoth together: Still no actual amount. Cannot determine present value. Both together insufficient.'
  },
  {
    id: 'ds-48',
    question: 'Question: Is integer M a multiple of 6?\nStatement I: M is a multiple of 2 and M is a multiple of 9.\nStatement II: M is a multiple of 18.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Statement I: M is multiple of 2 and 9 → M is multiple of LCM(2,9)=18. Every multiple of 18 is also a multiple of 6 (since 18=6×3). So M is a multiple of 6. Sufficient.\nStatement II: M is multiple of 18 → multiple of 6 (since 6|18). Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-49',
    question: 'Question: What is the sum of first n natural numbers?\nStatement I: The last term of the series is 20.\nStatement II: The series starts from 1 and has 20 terms.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Sum = n(n+1)/2.\nStatement I: Last term = 20 → n = 20 → Sum = 20×21/2 = 210. Sufficient.\nStatement II: Starts from 1, 20 terms → n = 20 → Sum = 210. Sufficient.\nEither statement alone is sufficient.'
  },
  {
    id: 'ds-50',
    question: 'Question: What is the length of the diagonal of a rectangle?\nStatement I: The length is 8 cm and breadth is 6 cm.\nStatement II: The area is 48 cm² and perimeter is 28 cm.\n\nChoose the correct option:',
    options: [
      'Either statement alone is sufficient',
      'Statement I alone is sufficient',
      'Statement II alone is sufficient',
      'Both statements together are sufficient'
    ],
    correctAnswer: 0,
    explanation: 'Diagonal = √(l²+b²).\nStatement I: d = √(64+36) = √100 = 10 cm. Sufficient.\nStatement II: Area = lb = 48. Perimeter = 2(l+b) = 28 → l+b = 14. So l and b are roots of x²–14x+48=0 → (x–6)(x–8)=0 → l=8, b=6. Diagonal = 10 cm. Sufficient.\nEither statement alone is sufficient.'
  }
];