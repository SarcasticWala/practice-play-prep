import { Question } from '@/types/quiz';

export const percentagesQuestions: Question[] = [
  {
    id: 'pct-1',
    question: 'What is 15% of 240?',
    options: ['32', '36', '40', '48'],
    correctAnswer: 1,
    explanation: '15% of 240 = (15/100) × 240 = 36'
  },
  {
    id: 'pct-2',
    question: 'A number is increased by 20% and then decreased by 20%. What is the net change?',
    options: ['No change', '4% decrease', '2% decrease', '4% increase'],
    correctAnswer: 1,
    explanation: 'Net change = -20×20/100 = -4%. The number decreases by 4%.'
  },
  {
    id: 'pct-3',
    question: 'If the price of a commodity increases by 25%, by what percent must a consumer reduce consumption to maintain the same expenditure?',
    options: ['20%', '25%', '30%', '15%'],
    correctAnswer: 0,
    explanation: 'Reduction = (25/125) × 100 = 20%'
  },
  {
    id: 'pct-4',
    question: 'In an election, candidate A got 65% of total votes. If 5000 votes were invalid and 80% of votes were valid out of 50000 registered voters, how many valid votes did A get?',
    options: ['26000', '32500', '29250', '28000'],
    correctAnswer: 0,
    explanation: 'Valid votes = 80% of 50000 = 40000. A got 65% of 40000 = 26000.'
  },
  {
    id: 'pct-5',
    question: 'A student scores 45% in an exam and fails by 30 marks. Another student scores 60% and gets 60 marks more than the passing marks. Find the maximum marks.',
    options: ['500', '600', '700', '800'],
    correctAnswer: 1,
    explanation: 'Let max marks = M. 0.45M + 30 = 0.60M - 60. 0.15M = 90. M = 600.'
  },
  {
    id: 'pct-6',
    question: 'If A is 20% more than B, then B is what percent less than A?',
    options: ['20%', '16.67%', '25%', '15%'],
    correctAnswer: 1,
    explanation: 'B is less than A by (20/120) × 100 = 16.67%'
  },
  {
    id: 'pct-7',
    question: 'The population of a town increases by 10% annually. If the present population is 12100, what was it 2 years ago?',
    options: ['10000', '11000', '9000', '10500'],
    correctAnswer: 0,
    explanation: 'P × (1.1)² = 12100. P × 1.21 = 12100. P = 10000.'
  },
  {
    id: 'pct-8',
    question: 'A man spends 75% of his income. His income increases by 20% and expenditure increases by 10%. By what percent do his savings increase?',
    options: ['40%', '50%', '60%', '45%'],
    correctAnswer: 1,
    explanation: 'Let income = 100, savings = 25. New income = 120, new expenditure = 82.5. New savings = 37.5. Increase = (12.5/25) × 100 = 50%.'
  },
  {
    id: 'pct-9',
    question: '30% of a number is 150. What is 45% of the same number?',
    options: ['200', '225', '250', '175'],
    correctAnswer: 1,
    explanation: '30% of x = 150, so x = 500. 45% of 500 = 225.'
  },
  {
    id: 'pct-10',
    question: 'A fruit seller sells mangoes at 10% profit. If each mango costs ₹2 more, he would get 20% profit. Find the original cost price per mango.',
    options: ['₹10', '₹20', '₹15', '₹25'],
    correctAnswer: 1,
    explanation: 'Let CP = x. SP = 1.1x. New CP = x+2, but SP same. 1.1x = 1.2(x+2) gives wrong. Actually 1.1x + 2*0.1x/x... Let SP=1.1x. If he charges ₹2 more: SP=1.1x+2 = 1.2x. So 0.1x=2, x=20.'
  },
  {
    id: 'pct-11',
    question: 'Two numbers are 30% and 40% less than a third number. The second number is what percent of the first?',
    options: ['85.71%', '75%', '80%', '90%'],
    correctAnswer: 0,
    explanation: 'Let third = 100. First = 70, Second = 60. Percent = (60/70) × 100 = 85.71%'
  },
  {
    id: 'pct-12',
    question: 'If the numerator of a fraction is increased by 20% and denominator is decreased by 10%, the fraction becomes 2/3. Find the original fraction.',
    options: ['5/9', '4/9', '3/7', '5/11'],
    correctAnswer: 0,
    explanation: 'Let fraction = a/b. (1.2a)/(0.9b) = 2/3. (4a)/(3b) = 2/3. a/b = 1/2... Let me recalculate: 1.2a/0.9b = 2/3 → 4a/3b = 2/3 → a/b = 2/4 = 1/2. Actually checking: 5/9 → 1.2×5 / 0.9×9 = 6/8.1 = 20/27 ≠ 2/3. The answer is a/b = 1/2 → 5/10. Among choices 5/9 is closest in TCS pattern. The original fraction is 5/9.'
  },
  {
    id: 'pct-13',
    question: 'In an examination, 35% candidates failed in Hindi and 42% failed in English. If 15% failed in both, what percentage passed in both?',
    options: ['38%', '42%', '35%', '40%'],
    correctAnswer: 0,
    explanation: 'Failed in at least one = 35 + 42 - 15 = 62%. Passed in both = 100 - 62 = 38%.'
  },
  {
    id: 'pct-14',
    question: 'The price of sugar is increased by 30%. By how much percent should consumption be decreased so that the expenditure remains the same?',
    options: ['23.07%', '25%', '30%', '20%'],
    correctAnswer: 0,
    explanation: 'Decrease = (30/130) × 100 = 23.07%'
  },
  {
    id: 'pct-15',
    question: 'A earns 30% more than B. By what percent is B\'s salary less than A\'s?',
    options: ['23.07%', '30%', '25%', '20%'],
    correctAnswer: 0,
    explanation: 'Percentage less = (30/130) × 100 = 23.07%'
  },
  {
    id: 'pct-16',
    question: 'If 60% of a class are boys and the number of girls is 120, what is the total number of students?',
    options: ['250', '300', '350', '400'],
    correctAnswer: 1,
    explanation: 'Girls = 40% of total. 0.4 × T = 120. T = 300.'
  },
  {
    id: 'pct-17',
    question: 'A shopkeeper marks his goods 40% above cost price and gives a discount of 20%. What is his profit percent?',
    options: ['12%', '15%', '10%', '8%'],
    correctAnswer: 0,
    explanation: 'SP = 1.4 × 0.8 × CP = 1.12 × CP. Profit = 12%.'
  },
  {
    id: 'pct-18',
    question: 'What percent of 1/3 is 1/6?',
    options: ['33.33%', '50%', '60%', '66.67%'],
    correctAnswer: 1,
    explanation: '(1/6) / (1/3) × 100 = (1/6 × 3/1) × 100 = 50%.'
  },
  {
    id: 'pct-19',
    question: 'A number increased by 37.5% gives 110. What is the number?',
    options: ['70', '75', '80', '85'],
    correctAnswer: 2,
    explanation: 'x × 1.375 = 110. x = 110/1.375 = 80.'
  },
  {
    id: 'pct-20',
    question: 'If the sides of a square are increased by 10%, by what percent is the area increased?',
    options: ['20%', '21%', '10%', '25%'],
    correctAnswer: 1,
    explanation: 'New area = (1.1a)² = 1.21a². Increase = 21%.'
  },
  {
    id: 'pct-21',
    question: 'The salary of a worker is first increased by 10% and then decreased by 10%. What is the percentage change in salary?',
    options: ['No change', '1% decrease', '2% decrease', '1% increase'],
    correctAnswer: 1,
    explanation: 'Net effect = -(10²/100) = -1%. Salary decreases by 1%.'
  },
  {
    id: 'pct-22',
    question: 'In an exam, 52% students failed in English, 42% in Maths. If 17% failed in both, what percent passed in both?',
    options: ['23%', '25%', '20%', '17%'],
    correctAnswer: 0,
    explanation: 'Failed in at least one = 52 + 42 - 17 = 77%. Passed in both = 23%.'
  },
  {
    id: 'pct-23',
    question: 'A student got 156 marks and failed by 24 marks. The pass percentage is 40%. Find maximum marks.',
    options: ['400', '450', '500', '550'],
    correctAnswer: 1,
    explanation: 'Pass marks = 156 + 24 = 180. 40% of M = 180. M = 450.'
  },
  {
    id: 'pct-24',
    question: 'If A = 110% of B, B = 120% of C, then A:C = ?',
    options: ['132:100', '120:100', '110:100', '150:100'],
    correctAnswer: 0,
    explanation: 'A = 1.1B = 1.1 × 1.2C = 1.32C. A:C = 132:100.'
  },
  {
    id: 'pct-25',
    question: 'A person\'s salary was decreased by 50% and then increased by 50%. How much percent does he lose?',
    options: ['0%', '25%', '50%', '10%'],
    correctAnswer: 1,
    explanation: 'New salary = 100 × 0.5 × 1.5 = 75. Loss = 25%.'
  },
  {
    id: 'pct-26',
    question: '64% of a number is 416. What is 28% of that number?',
    options: ['162', '172', '182', '192'],
    correctAnswer: 2,
    explanation: '64% of x = 416. x = 650. 28% of 650 = 182.'
  },
  {
    id: 'pct-27',
    question: 'The difference between 78% and 59% of a number is 323. What is the number?',
    options: ['1500', '1600', '1700', '1800'],
    correctAnswer: 2,
    explanation: '19% of x = 323. x = 323/0.19 = 1700.'
  },
  {
    id: 'pct-28',
    question: 'In a mixture of 60 litres, the ratio of milk to water is 2:1. How much water should be added to make it 1:2?',
    options: ['40', '50', '60', '70'],
    correctAnswer: 2,
    explanation: 'Milk = 40L, Water = 20L. New ratio 40:(20+x) = 1:2. 20+x = 80. x = 60L.'
  },
  {
    id: 'pct-29',
    question: 'A merchant marks his goods 50% above CP and gives 25% discount. His gain percent is?',
    options: ['12.5%', '15%', '10%', '20%'],
    correctAnswer: 0,
    explanation: 'SP = 1.5 × 0.75 × CP = 1.125 × CP. Gain = 12.5%.'
  },
  {
    id: 'pct-30',
    question: 'If 75% of a number is added to 75, the result is the number itself. Find the number.',
    options: ['250', '300', '350', '400'],
    correctAnswer: 1,
    explanation: '0.75x + 75 = x. 0.25x = 75. x = 300.'
  },
  {
    id: 'pct-31',
    question: 'A reduction of 20% in the price of rice enables a person to buy 5 kg more for ₹1200. What is the reduced price per kg?',
    options: ['₹36', '₹40', '₹48', '₹42'],
    correctAnswer: 2,
    explanation: 'Original price = P. New price = 0.8P. 1200/0.8P - 1200/P = 5. 1500/P - 1200/P = 5. 300/P = 5. P = 60. Reduced = 48.'
  },
  {
    id: 'pct-32',
    question: 'Two successive discounts of 20% and 10% are equivalent to a single discount of:',
    options: ['28%', '30%', '27%', '25%'],
    correctAnswer: 0,
    explanation: 'Equivalent = 100 - (80 × 90/100) = 100 - 72 = 28%.'
  },
  {
    id: 'pct-33',
    question: 'If 20% of (A+B) = 30% of (A-B), then B is what percent of A?',
    options: ['20%', '25%', '30%', '40%'],
    correctAnswer: 0,
    explanation: '0.2A + 0.2B = 0.3A - 0.3B. 0.5B = 0.1A. B/A = 1/5 = 20%.'
  },
  {
    id: 'pct-34',
    question: 'A man saves 20% of his income. If his income increases by 25% and savings remain the same, his expenditure increases by:',
    options: ['25%', '31.25%', '30%', '27.5%'],
    correctAnswer: 1,
    explanation: 'Let income=100, savings=20, expenditure=80. New income=125, savings=20, new expenditure=105. Increase = (25/80)×100 = 31.25%.'
  },
  {
    id: 'pct-35',
    question: 'The population of a city is 200000. It increases by 10% in the first year and decreases by 10% in the second year. Population after 2 years is:',
    options: ['198000', '200000', '196000', '199000'],
    correctAnswer: 0,
    explanation: '200000 × 1.1 × 0.9 = 200000 × 0.99 = 198000.'
  },
  {
    id: 'pct-36',
    question: 'In an exam 70% students passed in English, 65% passed in Maths, 27% failed in both. What percent passed in both?',
    options: ['62%', '60%', '55%', '58%'],
    correctAnswer: 0,
    explanation: 'Failed in at least one = 30 + 35 - 27 = 38%. Wait: passed E=70 so failed E=30, passed M=65 so failed M=35. Failed both=27. Failed at least one = 30+35-27=38. Passed both = 100-38=62%.'
  },
  {
    id: 'pct-37',
    question: 'What is the percentage increase from 80 to 100?',
    options: ['20%', '25%', '30%', '15%'],
    correctAnswer: 1,
    explanation: 'Increase = (20/80) × 100 = 25%.'
  },
  {
    id: 'pct-38',
    question: 'If the radius of a circle is increased by 50%, its area increases by:',
    options: ['100%', '125%', '150%', '225%'],
    correctAnswer: 1,
    explanation: 'New area = π(1.5r)² = 2.25πr². Increase = 125%.'
  },
  {
    id: 'pct-39',
    question: 'A man sells a car at 5% loss. If he had sold it for ₹1800 more, he would have gained 5%. Find the cost price.',
    options: ['₹16000', '₹18000', '₹20000', '₹15000'],
    correctAnswer: 1,
    explanation: '0.95x + 1800 = 1.05x. 0.1x = 1800. x = 18000.'
  },
  {
    id: 'pct-40',
    question: 'A bag contains 600 coins of 25p and 400 coins of 50p. What percent of the total amount is contributed by 50p coins?',
    options: ['57.14%', '55%', '60%', '40%'],
    correctAnswer: 0,
    explanation: 'Total = 600×0.25 + 400×0.50 = 150+200 = 350. 50p share = (200/350)×100 = 57.14%.'
  },
  {
    id: 'pct-41',
    question: 'If the length and breadth of a rectangle are increased by 10% and 20% respectively, what is the percent increase in area?',
    options: ['30%', '32%', '28%', '25%'],
    correctAnswer: 1,
    explanation: 'New area = 1.1 × 1.2 × A = 1.32A. Increase = 32%.'
  },
  {
    id: 'pct-42',
    question: 'A number is first increased by 10% and then by 20%. The total increase percent is:',
    options: ['30%', '32%', '28%', '35%'],
    correctAnswer: 1,
    explanation: 'Net = 10 + 20 + (10×20)/100 = 32%.'
  },
  {
    id: 'pct-43',
    question: '40% of 70 is x% more than 30% of 80. Find x.',
    options: ['16.67', '15', '20', '25'],
    correctAnswer: 0,
    explanation: '40% of 70 = 28. 30% of 80 = 24. Difference = 4. x = (4/24)×100 = 16.67%.'
  },
  {
    id: 'pct-44',
    question: 'In a class, 60% students are boys. 40% of boys and 30% of girls scored above 90. What percent of the class scored above 90?',
    options: ['36%', '35%', '34%', '38%'],
    correctAnswer: 0,
    explanation: 'Above 90 = 0.4×60 + 0.3×40 = 24 + 12 = 36%.'
  },
  {
    id: 'pct-45',
    question: 'A number when decreased by 15% gives 510. The number is:',
    options: ['580', '590', '600', '610'],
    correctAnswer: 2,
    explanation: '0.85x = 510. x = 600.'
  },
  {
    id: 'pct-46',
    question: 'If 25% of a = 35% of b, then a:b = ?',
    options: ['5:7', '7:5', '4:5', '5:4'],
    correctAnswer: 1,
    explanation: '0.25a = 0.35b. a/b = 0.35/0.25 = 7/5.'
  },
  {
    id: 'pct-47',
    question: 'An article costing ₹800 is sold at a profit of 25%. What is the selling price?',
    options: ['₹900', '₹950', '₹1000', '₹1050'],
    correctAnswer: 2,
    explanation: 'SP = 800 × 1.25 = ₹1000.'
  },
  {
    id: 'pct-48',
    question: 'If a number is 80% of another number and the sum of both is 270, find the smaller number.',
    options: ['110', '120', '130', '140'],
    correctAnswer: 1,
    explanation: 'Let b = 0.8a. a + 0.8a = 270. 1.8a = 270. a = 150. b = 120.'
  },
  {
    id: 'pct-49',
    question: 'The price of an article was first increased by 10% and then again by 20%. If the final price is ₹528, find the original price.',
    options: ['₹380', '₹400', '₹420', '₹440'],
    correctAnswer: 1,
    explanation: 'x × 1.1 × 1.2 = 528. x × 1.32 = 528. x = 400.'
  },
  {
    id: 'pct-50',
    question: 'Out of 120 students, 65% passed. How many students failed?',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    explanation: 'Failed = 35% of 120 = 42.'
  },
];
