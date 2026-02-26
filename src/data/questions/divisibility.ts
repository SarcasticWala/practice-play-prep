import { Question } from '@/types/quiz';

export const divisibilityQuestions: Question[] = 
[
  {
    "id": "div-1",
    "question": "Which of the following numbers is divisible by 3?",
    "options": ["1234", "2345", "3456", "4567"],
    "correctAnswer": 2,
    "explanation": "Sum of digits of 3456 = 18, divisible by 3."
  },
  {
    "id": "div-2",
    "question": "What is the smallest 4-digit number divisible by 9?",
    "options": ["1008", "1002", "1017", "1000"],
    "correctAnswer": 0,
    "explanation": "1000 ÷ 9 gives remainder 1, so add 8 to get 1008."
  },
  {
    "id": "div-3",
    "question": "Find the remainder when 7^100 is divided by 5.",
    "options": ["1", "2", "3", "4"],
    "correctAnswer": 0,
    "explanation": "7 mod 5 = 2. Cycle of 2^n mod5: 2,4,3,1. 100 mod 4 = 0 → remainder 1."
  },
  {
    "id": "div-4",
    "question": "A number is divisible by 8 if its last three digits are divisible by 8. Which of the following is divisible by 8?",
    "options": ["1234", "2345", "3456", "4567"],
    "correctAnswer": 2,
    "explanation": "Last three digits 456 ÷ 8 = 57, so divisible."
  },
  {
    "id": "div-5",
    "question": "If a number is divisible by both 4 and 6, is it always divisible by 24?",
    "options": ["Yes", "No", "Only if it is even", "Only if it is odd"],
    "correctAnswer": 1,
    "explanation": "No, e.g., 12 is divisible by 4 and 6 but not by 24."
  },
  {
    "id": "div-6",
    "question": "What is the least number that must be subtracted from 2016 to make it divisible by 11?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 1,
    "explanation": "2016 ÷ 11 gives remainder 3, so subtract 3."
  },
  {
    "id": "div-7",
    "question": "Which of the following is divisible by 6?",
    "options": ["1234", "2340", "3455", "4562"],
    "correctAnswer": 1,
    "explanation": "2340 is even and sum of digits 9 divisible by 3, so divisible by 6."
  },
  {
    "id": "div-8",
    "question": "Find the remainder when 2^50 is divided by 7.",
    "options": ["1", "2", "4", "6"],
    "correctAnswer": 2,
    "explanation": "Cycle of 2^n mod7: 2,4,1. 50 mod 3 = 2 → remainder 4."
  },
  {
    "id": "div-9",
    "question": "What is the largest 3-digit number divisible by 7?",
    "options": ["994", "997", "998", "999"],
    "correctAnswer": 0,
    "explanation": "999 ÷ 7 = 142 remainder 5, so largest is 7×142 = 994."
  },
  {
    "id": "div-10",
    "question": "If a number is divisible by 9, then it is also divisible by:",
    "options": ["3", "6", "18", "27"],
    "correctAnswer": 0,
    "explanation": "Divisible by 9 implies divisible by 3, not necessarily by others."
  },
  {
    "id": "div-11",
    "question": "How many numbers from 1 to 100 are divisible by 5?",
    "options": ["20", "19", "21", "18"],
    "correctAnswer": 0,
    "explanation": "100/5 = 20."
  },
  {
    "id": "div-12",
    "question": "What is the remainder when 111111 is divided by 7?",
    "options": ["0", "1", "2", "3"],
    "correctAnswer": 0,
    "explanation": "111111 = 7 × 15873, so remainder 0."
  },
  {
    "id": "div-13",
    "question": "Which digit should replace * in number 1234* to make it divisible by 4?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 2,
    "explanation": "Last two digits 4* must be divisible by 4; 44 is divisible, so * = 4."
  },
  {
    "id": "div-14",
    "question": "Find the smallest number that is divisible by all numbers from 1 to 5.",
    "options": ["60", "120", "30", "15"],
    "correctAnswer": 0,
    "explanation": "LCM of 1,2,3,4,5 = 60."
  },
  {
    "id": "div-15",
    "question": "If a number N is divisible by both 5 and 12, then N is divisible by:",
    "options": ["30", "60", "15", "20"],
    "correctAnswer": 1,
    "explanation": "LCM of 5 and 12 is 60, so N is divisible by 60."
  },
  {
    "id": "div-16",
    "question": "What is the remainder when 3^4 + 3^5 + 3^6 + 3^7 is divided by 9?",
    "options": ["0", "3", "6", "1"],
    "correctAnswer": 0,
    "explanation": "Each term for k≥2 is multiple of 9, so sum divisible by 9."
  },
  {
    "id": "div-17",
    "question": "Which of the following is divisible by 11?",
    "options": ["1234321", "1234567", "123456", "12345"],
    "correctAnswer": 0,
    "explanation": "Alternating sum for 1234321: (1+3+3+1) - (2+4+2) = 8-8 = 0, divisible by 11."
  },
  {
    "id": "div-18",
    "question": "Find the value of k such that 5k2 is divisible by 3.",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 0,
    "explanation": "Sum of digits = 7+k must be multiple of 3 → k = 2,5,8; among options, 2 works."
  },
  {
    "id": "div-19",
    "question": "A number leaves remainder 3 when divided by 5. What could be its unit digit?",
    "options": ["3 or 8", "2 or 7", "1 or 6", "4 or 9"],
    "correctAnswer": 0,
    "explanation": "Multiples of 5 end in 0 or 5, so remainder 3 gives unit digit 3 or 8."
  },
  {
    "id": "div-20",
    "question": "How many numbers between 50 and 100 are divisible by 7?",
    "options": ["7", "8", "9", "10"],
    "correctAnswer": 0,
    "explanation": "First: 56 (7×8), last: 98 (7×14) → count = 14-8+1 = 7."
  },
  {
    "id": "div-21",
    "question": "If 8x5 is divisible by 9, find x.",
    "options": ["5", "6", "7", "8"],
    "correctAnswer": 0,
    "explanation": "Sum = 13+x must be multiple of 9 → x = 5 gives 18."
  },
  {
    "id": "div-22",
    "question": "What is the remainder when 10^100 is divided by 11?",
    "options": ["1", "0", "10", "9"],
    "correctAnswer": 0,
    "explanation": "10 ≡ -1 mod 11, so (-1)^100 = 1."
  },
  {
    "id": "div-23",
    "question": "Which of the following is divisible by 8?",
    "options": ["123456", "1234567", "12345678", "123456789"],
    "correctAnswer": 0,
    "explanation": "Last three digits of 123456 are 456, divisible by 8."
  },
  {
    "id": "div-24",
    "question": "Find the least number which when divided by 6, 7, and 8 leaves remainder 3 in each case.",
    "options": ["171", "168", "165", "174"],
    "correctAnswer": 0,
    "explanation": "LCM of 6,7,8 = 168, add 3 = 171."
  },
  {
    "id": "div-25",
    "question": "If a number is divisible by 2 and 3, it is also divisible by:",
    "options": ["5", "6", "12", "18"],
    "correctAnswer": 1,
    "explanation": "LCM of 2 and 3 is 6."
  },
  {
    "id": "div-26",
    "question": "What is the remainder when 5^99 is divided by 13?",
    "options": ["8", "5", "7", "6"],
    "correctAnswer": 0,
    "explanation": "5^4 ≡ 1 mod13, 99 mod4 = 3, so 5^3 = 125 ≡ 125-117=8 mod13."
  },
  {
    "id": "div-27",
    "question": "The number 123456789 is divisible by:",
    "options": ["3", "5", "7", "11"],
    "correctAnswer": 0,
    "explanation": "Sum of digits = 45, divisible by 3."
  },
  {
    "id": "div-28",
    "question": "What is the smallest 4-digit number divisible by 12?",
    "options": ["1000", "1004", "1008", "1012"],
    "correctAnswer": 2,
    "explanation": "12×83=996, next multiple 12×84=1008."
  },
  {
    "id": "div-29",
    "question": "Find the remainder when 17^20 is divided by 18.",
    "options": ["1", "17", "0", "9"],
    "correctAnswer": 0,
    "explanation": "17 ≡ -1 mod18, so (-1)^20 = 1."
  },
  {
    "id": "div-30",
    "question": "How many numbers from 1 to 200 are divisible by 3 but not by 5?",
    "options": ["54", "53", "52", "51"],
    "correctAnswer": 1,
    "explanation": "Divisible by 3: 66; by 15: 13; so 66-13 = 53."
  },
  {
    "id": "div-31",
    "question": "If 42x5y is divisible by 9 and 11, find x+y.",
    "options": ["5", "6", "7", "8"],
    "correctAnswer": 2,
    "explanation": "For 9: 11+x+y multiple of 9 → x+y=7 or 16. For 11: (4+x+5)-(2+y)=7+x-y multiple of 11. With x+y=7, (x,y)=(0,7) gives 7+0-7=0 works. So x+y=7."
  },
  {
    "id": "div-32",
    "question": "What is the unit digit of 3^100?",
    "options": ["1", "3", "7", "9"],
    "correctAnswer": 0,
    "explanation": "Cycle of unit digits: 3,9,7,1. 100 mod 4 = 0 → unit digit 1."
  },
  {
    "id": "div-33",
    "question": "Find the remainder when 9^10 is divided by 8.",
    "options": ["1", "2", "3", "4"],
    "correctAnswer": 0,
    "explanation": "9 ≡ 1 mod8, so 9^10 ≡ 1."
  },
  {
    "id": "div-34",
    "question": "Which of the following is not divisible by 3?",
    "options": ["12345", "12346", "12347", "12348"],
    "correctAnswer": 1,
    "explanation": "Sum of digits: 12346 = 16, not divisible by 3."
  },
  {
    "id": "div-35",
    "question": "What is the largest number that divides 28, 42, and 70 exactly?",
    "options": ["7", "14", "21", "28"],
    "correctAnswer": 1,
    "explanation": "HCF of 28,42,70 is 14."
  },
  {
    "id": "div-36",
    "question": "Find the smallest number divisible by both 8 and 12.",
    "options": ["24", "48", "96", "12"],
    "correctAnswer": 0,
    "explanation": "LCM of 8 and 12 is 24."
  },
  {
    "id": "div-37",
    "question": "If 5x2 is divisible by 6, find x.",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 0,
    "explanation": "Must be even and sum 7+x divisible by 3 → x=2 works (sum 9)."
  },
  {
    "id": "div-38",
    "question": "What is the remainder when 4^20 is divided by 6?",
    "options": ["4", "2", "0", "1"],
    "correctAnswer": 0,
    "explanation": "4 mod6 = 4, and 4^n mod6 = 4 for n≥1."
  },
  {
    "id": "div-39",
    "question": "How many three-digit numbers are divisible by 7?",
    "options": ["128", "129", "130", "131"],
    "correctAnswer": 0,
    "explanation": "Smallest 105 (7×15), largest 994 (7×142) → count = 142-15+1 = 128."
  },
  {
    "id": "div-40",
    "question": "Which of the following is divisible by 4 but not by 8?",
    "options": ["24", "36", "40", "48"],
    "correctAnswer": 1,
    "explanation": "36 divisible by 4, but 36/8 = 4.5 not integer."
  },
  {
    "id": "div-41",
    "question": "Find the remainder when 13^15 is divided by 5.",
    "options": ["2", "3", "4", "1"],
    "correctAnswer": 0,
    "explanation": "13 mod5 = 3. Cycle of 3^n mod5: 3,4,2,1. 15 mod4 = 3 → remainder 2."
  },
  {
    "id": "div-42",
    "question": "If a number is divisible by 2 and 9, then it is divisible by:",
    "options": ["18", "6", "12", "All of these"],
    "correctAnswer": 0,
    "explanation": "LCM of 2 and 9 is 18."
  },
  {
    "id": "div-43",
    "question": "What is the smallest number that leaves remainder 1 when divided by 2, 3, and 5?",
    "options": ["31", "61", "91", "121"],
    "correctAnswer": 0,
    "explanation": "LCM of 2,3,5 = 30, add 1 = 31."
  },
  {
    "id": "div-44",
    "question": "The number 34594 is divisible by which of the following?",
    "options": ["3", "5", "7", "9"],
    "correctAnswer": 2,
    "explanation": "34594 ÷ 7 = 4942 exactly."
  },
  {
    "id": "div-45",
    "question": "What is the remainder when 15! is divided by 17?",
    "options": ["1", "16", "0", "15"],
    "correctAnswer": 0,
    "explanation": "By Wilson, 16! ≡ -1 mod17, and 16! = 16×15! ≡ -1 ⇒ 15! ≡ 1 mod17."
  },
  {
    "id": "div-46",
    "question": "Find the number of zeros at the end of 100!",
    "options": ["24", "20", "22", "18"],
    "correctAnswer": 0,
    "explanation": "Number of factors of 5: ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24."
  },
  {
    "id": "div-47",
    "question": "If 7x8 is divisible by 9, find x.",
    "options": ["3", "4", "5", "6"],
    "correctAnswer": 0,
    "explanation": "Sum = 15+x must be multiple of 9 → x = 3 gives 18."
  },
  {
    "id": "div-48",
    "question": "What is the remainder when 2^100 is divided by 10?",
    "options": ["6", "4", "2", "8"],
    "correctAnswer": 0,
    "explanation": "Unit digits cycle: 2,4,8,6. 100 mod 4 = 0 → unit digit 6."
  },
  {
    "id": "div-49",
    "question": "How many numbers between 100 and 200 are divisible by 13?",
    "options": ["7", "8", "9", "10"],
    "correctAnswer": 1,
    "explanation": "First: 104 (13×8), last: 195 (13×15) → count = 15-8+1 = 8."
  },
  {
    "id": "div-50",
    "question": "Which of the following is divisible by 15?",
    "options": ["12345", "12346", "12347", "12348"],
    "correctAnswer": 0,
    "explanation": "12345 ends with 5 and sum of digits 15 divisible by 3."
  }
]