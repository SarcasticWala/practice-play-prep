import { Question } from "@/types/quiz";

export const probabilityQuestions: Question[] = [
  {
    id: "prob-1",
    question:
      "A coin is tossed once. What is the probability of getting a head?",
    options: ["1/2", "1/3", "1/4", "1"],
    correctAnswer: 0,
    explanation: "Total outcomes = 2 (H, T). Favorable = 1. Probability = 1/2.",
  },
  {
    id: "prob-2",
    question:
      "A die is rolled once. What is the probability of getting an even number?",
    options: ["1/2", "1/3", "1/6", "2/3"],
    correctAnswer: 0,
    explanation:
      "Total outcomes = 6. Even numbers = 2,4,6 (3 outcomes). Probability = 3/6 = 1/2.",
  },
  {
    id: "prob-3",
    question:
      "A card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting a king.",
    options: ["1/13", "1/26", "1/52", "1/4"],
    correctAnswer: 0,
    explanation: "Total kings = 4. Probability = 4/52 = 1/13.",
  },
  {
    id: "prob-4",
    question:
      "Two coins are tossed simultaneously. Find the probability of getting exactly one head.",
    options: ["1/2", "1/4", "3/4", "1/3"],
    correctAnswer: 0,
    explanation:
      "Outcomes: HH, HT, TH, TT. Favorable: HT, TH = 2. Probability = 2/4 = 1/2.",
  },
  {
    id: "prob-5",
    question:
      "A bag contains 3 red balls and 5 black balls. One ball is drawn at random. Find the probability of getting a red ball.",
    options: ["3/8", "5/8", "1/4", "1/2"],
    correctAnswer: 0,
    explanation: "Total balls = 8. Red = 3. Probability = 3/8.",
  },
  {
    id: "prob-6",
    question:
      "A die is rolled once. Find the probability of getting a number greater than 4.",
    options: ["1/3", "1/2", "1/6", "2/3"],
    correctAnswer: 0,
    explanation: "Numbers >4: 5,6 (2 outcomes). Probability = 2/6 = 1/3.",
  },
  {
    id: "prob-7",
    question:
      "From a well-shuffled deck of 52 cards, find the probability of drawing a red card.",
    options: ["1/2", "1/4", "1/13", "1/26"],
    correctAnswer: 0,
    explanation: "Red cards = 26. Probability = 26/52 = 1/2.",
  },
  {
    id: "prob-8",
    question:
      "Two dice are rolled simultaneously. Find the probability of getting a sum of 7.",
    options: ["1/6", "1/12", "1/9", "1/36"],
    correctAnswer: 0,
    explanation:
      "Total outcomes = 36. Favorable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Probability = 6/36 = 1/6.",
  },
  {
    id: "prob-9",
    question:
      "A bag contains 4 white and 6 black balls. One ball is drawn at random. Find the probability that it is black.",
    options: ["3/5", "2/5", "1/5", "4/5"],
    correctAnswer: 0,
    explanation: "Total = 10, Black = 6. Probability = 6/10 = 3/5.",
  },
  {
    id: "prob-10",
    question:
      "What is the probability of getting a face card from a deck of 52 cards?",
    options: ["3/13", "1/13", "4/13", "1/4"],
    correctAnswer: 0,
    explanation:
      "Face cards: Jack, Queen, King = 12. Probability = 12/52 = 3/13.",
  },
  {
    id: "prob-11",
    question:
      "Three coins are tossed. Find the probability of getting exactly two heads.",
    options: ["3/8", "1/2", "1/4", "5/8"],
    correctAnswer: 0,
    explanation:
      "Total outcomes = 8. Favorable: HHT, HTH, THH = 3. Probability = 3/8.",
  },
  {
    id: "prob-12",
    question:
      "A number is selected from 1 to 20. Find the probability that it is a prime number.",
    options: ["2/5", "1/2", "3/10", "7/20"],
    correctAnswer: 0,
    explanation:
      "Primes from 1-20: 2,3,5,7,11,13,17,19 = 8 numbers. Probability = 8/20 = 2/5.",
  },
  {
    id: "prob-13",
    question:
      "Two dice are rolled. Find the probability of getting a doublet (same number on both).",
    options: ["1/6", "1/12", "1/36", "1/18"],
    correctAnswer: 0,
    explanation:
      "Doublets: (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) = 6. Probability = 6/36 = 1/6.",
  },
  {
    id: "prob-14",
    question:
      "A card is drawn from a deck. Find the probability of getting a spade.",
    options: ["1/4", "1/13", "1/52", "1/2"],
    correctAnswer: 0,
    explanation: "Spades = 13. Probability = 13/52 = 1/4.",
  },
  {
    id: "prob-15",
    question:
      "A bag contains 5 red, 4 blue, and 3 green balls. One ball is drawn. Find the probability of getting a blue ball.",
    options: ["1/3", "1/4", "1/2", "2/3"],
    correctAnswer: 0,
    explanation: "Total = 12, Blue = 4. Probability = 4/12 = 1/3.",
  },
  {
    id: "prob-16",
    question:
      "A die is rolled twice. Find the probability of getting a sum of 9.",
    options: ["1/9", "1/12", "1/6", "1/18"],
    correctAnswer: 0,
    explanation:
      "Sum 9: (3,6),(4,5),(5,4),(6,3) = 4. Probability = 4/36 = 1/9.",
  },
  {
    id: "prob-17",
    question:
      "What is the probability of getting a king or a queen from a deck of cards?",
    options: ["2/13", "1/13", "3/13", "4/13"],
    correctAnswer: 0,
    explanation: "Kings = 4, Queens = 4, total = 8. Probability = 8/52 = 2/13.",
  },
  {
    id: "prob-18",
    question:
      "A box contains 10 bulbs, of which 3 are defective. One bulb is drawn at random. Find the probability that it is not defective.",
    options: ["7/10", "3/10", "1/10", "9/10"],
    correctAnswer: 0,
    explanation: "Non-defective = 7. Probability = 7/10.",
  },
  {
    id: "prob-19",
    question:
      "Two cards are drawn from a deck without replacement. Find the probability that both are aces.",
    options: ["1/221", "1/13", "1/169", "1/26"],
    correctAnswer: 0,
    explanation:
      "P(first ace) = 4/52 = 1/13. P(second ace) = 3/51 = 1/17. Combined = 1/13 × 1/17 = 1/221.",
  },
  {
    id: "prob-20",
    question:
      "A number is selected from 1 to 50. Find the probability that it is a multiple of 3 or 5.",
    options: ["23/50", "22/50", "24/50", "21/50"],
    correctAnswer: 0,
    explanation:
      "Multiples of 3: 16 numbers. Multiples of 5: 10 numbers. Multiples of 15: 3 numbers. Total = 16+10-3 = 23. Probability = 23/50.",
  },
  {
    id: "prob-21",
    question:
      "A bag contains 4 red and 6 black balls. Two balls are drawn without replacement. Find the probability that both are red.",
    options: ["2/15", "1/15", "3/15", "4/15"],
    correctAnswer: 0,
    explanation:
      "P(first red) = 4/10 = 2/5. P(second red) = 3/9 = 1/3. Combined = 2/5 × 1/3 = 2/15.",
  },
  {
    id: "prob-22",
    question:
      "A die is rolled. Find the probability of getting a prime number.",
    options: ["1/2", "1/3", "2/3", "1/6"],
    correctAnswer: 0,
    explanation: "Primes on die: 2,3,5 = 3. Probability = 3/6 = 1/2.",
  },
  {
    id: "prob-23",
    question:
      "Two coins are tossed. Find the probability of getting at least one head.",
    options: ["3/4", "1/2", "1/4", "1"],
    correctAnswer: 0,
    explanation: "Total = 4. Favorable: HT, TH, HH = 3. Probability = 3/4.",
  },
  {
    id: "prob-24",
    question:
      "A card is drawn from a deck. Find the probability of getting a red face card.",
    options: ["3/26", "1/13", "3/13", "1/26"],
    correctAnswer: 0,
    explanation:
      "Red face cards: 6 (2 each of hearts and diamonds). Probability = 6/52 = 3/26.",
  },
  {
    id: "prob-25",
    question:
      "A bag contains 5 red, 6 white, and 7 blue balls. One ball is drawn. Find the probability that it is not white.",
    options: ["12/18", "6/18", "7/18", "5/18"],
    correctAnswer: 0,
    explanation: "Non-white = 5+7 = 12. Total = 18. Probability = 12/18 = 2/3.",
  },
  {
    id: "prob-26",
    question:
      "Two dice are rolled. Find the probability of getting a sum less than 5.",
    options: ["1/6", "1/9", "1/12", "1/18"],
    correctAnswer: 0,
    explanation:
      "Sum <5: (1,1)=2, (1,2)=3, (2,1)=3, (1,3)=4, (2,2)=4, (3,1)=4 → 6 outcomes. Probability = 6/36 = 1/6.",
  },
  {
    id: "prob-27",
    question:
      "A number is selected from 1 to 30. Find the probability that it is a perfect square.",
    options: ["1/6", "1/5", "1/4", "1/3"],
    correctAnswer: 0,
    explanation:
      "Perfect squares: 1,4,9,16,25 = 5 numbers. Probability = 5/30 = 1/6.",
  },
  {
    id: "prob-28",
    question:
      "Three coins are tossed. Find the probability of getting at least two heads.",
    options: ["1/2", "3/8", "5/8", "1/4"],
    correctAnswer: 0,
    explanation:
      "Favorable: HHT, HTH, THH, HHH = 4. Total = 8. Probability = 4/8 = 1/2.",
  },
  {
    id: "prob-29",
    question:
      "A card is drawn from a deck. Find the probability of getting a king of hearts.",
    options: ["1/52", "1/13", "1/26", "1/4"],
    correctAnswer: 0,
    explanation: "Only one king of hearts. Probability = 1/52.",
  },
  {
    id: "prob-30",
    question:
      "A bag contains 3 red and 5 white balls. Two balls are drawn with replacement. Find the probability that both are white.",
    options: ["25/64", "9/64", "15/64", "5/8"],
    correctAnswer: 0,
    explanation:
      "P(white) = 5/8. With replacement, P(both white) = (5/8)² = 25/64.",
  },
  {
    id: "prob-31",
    question:
      "A die is rolled twice. Find the probability of getting a sum of 10.",
    options: ["1/12", "1/9", "1/6", "1/18"],
    correctAnswer: 0,
    explanation: "Sum 10: (4,6),(5,5),(6,4) = 3. Probability = 3/36 = 1/12.",
  },
  {
    id: "prob-32",
    question:
      "From a deck of cards, find the probability of drawing a black queen.",
    options: ["1/26", "1/13", "1/52", "1/4"],
    correctAnswer: 0,
    explanation:
      "Black queens: queen of spades, queen of clubs = 2. Probability = 2/52 = 1/26.",
  },
  {
    id: "prob-33",
    question:
      "A bag contains 4 red, 3 blue, and 5 green balls. One ball is drawn. Find the probability that it is either red or green.",
    options: ["3/4", "1/2", "2/3", "5/12"],
    correctAnswer: 0,
    explanation: "Red+Green = 4+5 = 9. Total = 12. Probability = 9/12 = 3/4.",
  },
  {
    id: "prob-34",
    question:
      "Two dice are rolled. Find the probability of getting an even sum.",
    options: ["1/2", "1/3", "2/3", "5/12"],
    correctAnswer: 0,
    explanation: "Even sum occurs in 18 outcomes. Probability = 18/36 = 1/2.",
  },
  {
    id: "prob-35",
    question:
      "A number is selected from 1 to 40. Find the probability that it is divisible by 4.",
    options: ["1/4", "1/5", "1/8", "1/10"],
    correctAnswer: 0,
    explanation:
      "Divisible by 4: 4,8,...,40 → 10 numbers. Probability = 10/40 = 1/4.",
  },
  {
    id: "prob-36",
    question:
      "A card is drawn from a deck. Find the probability of getting a red card or a king.",
    options: ["7/13", "1/2", "4/13", "15/26"],
    correctAnswer: 0,
    explanation:
      "Red cards = 26, Kings = 4, Red kings = 2. Total = 26+4-2 = 28. Probability = 28/52 = 7/13.",
  },
  {
    id: "prob-37",
    question:
      "A bag contains 3 red and 7 black balls. Two balls are drawn without replacement. Find the probability that both are black.",
    options: ["7/15", "3/10", "7/10", "21/100"],
    correctAnswer: 0,
    explanation:
      "P(first black) = 7/10. P(second black) = 6/9 = 2/3. Combined = 7/10 × 2/3 = 14/30 = 7/15.",
  },
  {
    id: "prob-38",
    question:
      "A die is rolled. Find the probability of getting a number divisible by 3.",
    options: ["1/3", "1/2", "1/6", "2/3"],
    correctAnswer: 0,
    explanation: "Numbers divisible by 3: 3,6 = 2. Probability = 2/6 = 1/3.",
  },
  {
    id: "prob-39",
    question:
      "Two coins are tossed. Find the probability of getting at most one head.",
    options: ["3/4", "1/2", "1/4", "1"],
    correctAnswer: 0,
    explanation: "Favorable: TT, HT, TH = 3. Probability = 3/4.",
  },
  {
    id: "prob-40",
    question:
      "A card is drawn from a deck. Find the probability of getting a card with an odd number (Ace counted as 1).",
    options: ["4/13", "5/13", "6/13", "7/13"],
    correctAnswer: 0,
    explanation:
      "Odd numbered cards: Ace(1),3,5,7,9 in each suit = 5 per suit × 4 suits = 20. Probability = 20/52 = 5/13.",
  },
  {
    id: "prob-41",
    question:
      "A bag contains 5 red and 5 blue balls. Two balls are drawn with replacement. Find the probability that they are of different colors.",
    options: ["1/2", "1/4", "3/4", "1/3"],
    correctAnswer: 0,
    explanation:
      "P(red then blue) = (5/10)×(5/10)=1/4. P(blue then red) = same = 1/4. Total = 1/4+1/4 = 1/2.",
  },
  {
    id: "prob-42",
    question:
      "A number is selected from 1 to 100. Find the probability that it is a multiple of both 4 and 6.",
    options: ["4/25", "3/25", "2/25", "1/25"],
    correctAnswer: 0,
    explanation:
      "LCM of 4 and 6 = 12. Multiples of 12 up to 100: 12,24,36,48,60,72,84,96 = 8 numbers. Probability = 8/100 = 2/25.",
  },
  {
    id: "prob-43",
    question:
      "Three dice are rolled. Find the probability of getting a sum of 5.",
    options: ["1/36", "1/18", "1/12", "1/24"],
    correctAnswer: 0,
    explanation:
      "Total outcomes = 216. Sum 5: (1,1,3),(1,3,1),(3,1,1),(1,2,2),(2,1,2),(2,2,1) = 6. Probability = 6/216 = 1/36.",
  },
  {
    id: "prob-44",
    question:
      "A bag contains 4 red, 5 white, and 6 blue balls. Two balls are drawn without replacement. Find the probability that both are of the same color.",
    options: ["31/105", "32/105", "33/105", "34/105"],
    correctAnswer: 0,
    explanation:
      "Total = 15. P(both red) = C(4,2)/C(15,2) = 6/105. P(both white) = C(5,2)/C(15,2) = 10/105. P(both blue) = C(6,2)/C(15,2) = 15/105. Total = (6+10+15)/105 = 31/105.",
  },
  {
    id: "prob-45",
    question:
      "A card is drawn from a deck. Find the probability that it is either a heart or a diamond.",
    options: ["1/2", "1/4", "1/13", "1/26"],
    correctAnswer: 0,
    explanation:
      "Hearts = 13, Diamonds = 13, total = 26. Probability = 26/52 = 1/2.",
  },
  {
    id: "prob-46",
    question:
      "A die is rolled twice. Find the probability of getting a sum greater than 8.",
    options: ["5/18", "1/6", "1/9", "1/12"],
    correctAnswer: 0,
    explanation:
      "Sum >8: 9,10,11,12. For 9:4 ways, 10:3 ways, 11:2 ways, 12:1 way. Total = 10. Probability = 10/36 = 5/18.",
  },
  {
    id: "prob-47",
    question:
      "A bag contains 3 red and 4 green balls. Two balls are drawn with replacement. Find the probability that both are red.",
    options: ["9/49", "16/49", "12/49", "6/49"],
    correctAnswer: 0,
    explanation: "P(red) = 3/7. With replacement, P(both red) = (3/7)² = 9/49.",
  },
  {
    id: "prob-48",
    question:
      "A number is selected from 1 to 25. Find the probability that it is a prime number.",
    options: ["9/25", "8/25", "10/25", "7/25"],
    correctAnswer: 0,
    explanation:
      "Primes from 1-25: 2,3,5,7,11,13,17,19,23 = 9 numbers. Probability = 9/25.",
  },
  {
    id: "prob-49",
    question:
      "Two cards are drawn from a deck without replacement. Find the probability that both are face cards.",
    options: ["11/221", "12/221", "13/221", "14/221"],
    correctAnswer: 0,
    explanation:
      "P(first face) = 12/52 = 3/13. P(second face) = 11/51. Combined = 3/13 × 11/51 = 33/663 = 11/221.",
  },
  {
    id: "prob-50",
    question:
      "A bag contains 4 red and 6 black balls. Three balls are drawn without replacement. Find the probability that all are black.",
    options: ["1/6", "1/5", "2/15", "1/3"],
    correctAnswer: 0,
    explanation:
      "P(all black) = (6/10) × (5/9) × (4/8) = (6×5×4)/(10×9×8) = 120/720 = 1/6.",
  },
];
