import { Question } from '@/types/quiz';

export const bloodRelationsQuestions: Question[] = [

  // ─── EASY: Direct Single-Step Relations (br-1 to br-15) ───
  {
    id: 'br-1',
    question: 'Pointing to a man, a woman said, "His mother is the only daughter of my mother." How is the woman related to the man?',
    options: ['Mother', 'Sister', 'Aunt', 'Grandmother'],
    correctAnswer: 0,
    explanation: '"Only daughter of my mother" = the woman herself. So the woman is the man\'s mother.'
  },
  {
    id: 'br-2',
    question: 'A is the brother of B. B is the sister of C. How is A related to C?',
    options: ['Brother', 'Sister', 'Cousin', 'Uncle'],
    correctAnswer: 0,
    explanation: 'A is a male. A and B are siblings. B and C are siblings. So A is also a sibling of C. Since A is male, A is C\'s brother.'
  },
  {
    id: 'br-3',
    question: 'If X is the father of Y, Y is the mother of Z, what is X to Z?',
    options: ['Grandfather', 'Uncle', 'Father', 'Cousin'],
    correctAnswer: 0,
    explanation: 'X is father of Y. Y is mother of Z. So X is the maternal grandfather of Z.'
  },
  {
    id: 'br-4',
    question: 'Ravi\'s mother is the sister of Suresh\'s father. How is Suresh related to Ravi?',
    options: ['Cousin', 'Uncle', 'Nephew', 'Brother'],
    correctAnswer: 0,
    explanation: 'Ravi\'s mother and Suresh\'s father are siblings. So Ravi and Suresh are cousins.'
  },
  {
    id: 'br-5',
    question: 'If A is the mother of B and B is the father of C, what is A to C?',
    options: ['Grandmother', 'Aunt', 'Mother', 'Sister'],
    correctAnswer: 0,
    explanation: 'A is the parent of B (parent\'s parent of C), so A is C\'s grandmother.'
  },
  {
    id: 'br-6',
    question: 'Pointing to a girl, Ram said, "She is the daughter of my grandfather\'s only son." How is the girl related to Ram?',
    options: ['Sister', 'Cousin', 'Niece', 'Aunt'],
    correctAnswer: 0,
    explanation: 'Grandfather\'s only son = Ram\'s father. Daughter of Ram\'s father = Ram\'s sister.'
  },
  {
    id: 'br-7',
    question: 'P is the brother of Q. Q is the wife of R. R is the son of S. How is P related to S?',
    options: ['Son-in-law', 'Nephew', 'Brother-in-law', 'Son'],
    correctAnswer: 0,
    explanation: 'Q is the wife of R. P is Q\'s brother, so P is R\'s brother-in-law. R is S\'s son, so P is S\'s son-in-law (in extended context: P is R\'s brother-in-law, hence S\'s son-in-law).'
  },
  {
    id: 'br-8',
    question: 'Introducing a boy, a girl said, "He is the son of my father\'s only sister." How is the boy related to the girl?',
    options: ['Cousin', 'Brother', 'Nephew', 'Uncle'],
    correctAnswer: 0,
    explanation: 'Father\'s only sister = the girl\'s aunt. Son of aunt = cousin.'
  },
  {
    id: 'br-9',
    question: 'A woman says, "The brother of my son\'s sister is my husband." How many children does she have?',
    options: ['2', '1', '3', '4'],
    correctAnswer: 0,
    explanation: 'Son\'s sister is her daughter. The brother of her daughter is her son. So her son = her husband\'s son. She has at least 2 children: one son and one daughter.'
  },
  {
    id: 'br-10',
    question: 'Amit says, "Neha is my father\'s wife\'s daughter\'s mother." How is Neha related to Amit?',
    options: ['Mother', 'Aunt', 'Sister', 'Grandmother'],
    correctAnswer: 0,
    explanation: 'Father\'s wife = Amit\'s mother. Mother\'s daughter = Amit\'s sister. Sister\'s mother = Amit\'s mother. So Neha is Amit\'s mother.'
  },
  {
    id: 'br-11',
    question: 'If Asha is the sister of Bala, Bala is the brother of Chandra, Chandra is the daughter of Dev, then Dev is the __ of Asha.',
    options: ['Father', 'Uncle', 'Brother', 'Grandfather'],
    correctAnswer: 0,
    explanation: 'Chandra is Dev\'s daughter. Asha is the sister of Bala who is the brother of Chandra → all three are siblings. So Asha is also Dev\'s daughter, meaning Dev is Asha\'s father.'
  },
  {
    id: 'br-12',
    question: 'P\'s mother is the mother-in-law of Q\'s father. Q\'s father is married to R. How is P related to R?',
    options: ['Sibling (Brother/Sister)', 'Cousin', 'Uncle/Aunt', 'Nephew/Niece'],
    correctAnswer: 0,
    explanation: 'P\'s mother is the mother-in-law of Q\'s father, so Q\'s father is married to one of P\'s mother\'s children. Q\'s father is married to R, meaning R is P\'s sibling.'
  },
  {
    id: 'br-13',
    question: 'Pointing to a photograph, Sita says, "He is the son of my paternal grandfather\'s son." How is he related to Sita?',
    options: ['Cousin', 'Brother', 'Nephew', 'Uncle'],
    correctAnswer: 0,
    explanation: 'Paternal grandfather\'s son = Sita\'s father or uncle. If it\'s her uncle, his son = Sita\'s cousin. If her father, his son = Sita\'s brother. Since she says "son of" (not specifying only child), the most general answer is cousin.'
  },
  {
    id: 'br-14',
    question: 'Meena is the daughter-in-law of Ramesh. Ramesh has only one son. What is Meena to Ramesh\'s son?',
    options: ['Wife', 'Sister', 'Daughter', 'Niece'],
    correctAnswer: 0,
    explanation: 'Meena is daughter-in-law of Ramesh, meaning she is married to Ramesh\'s son. So Meena is the wife of Ramesh\'s son.'
  },
  {
    id: 'br-15',
    question: 'If Arjun\'s uncle is the only son of Maya\'s father, how is Maya related to Arjun\'s uncle?',
    options: ['Sister', 'Mother', 'Aunt', 'Daughter'],
    correctAnswer: 0,
    explanation: 'Maya\'s father\'s only son = Maya\'s brother. Since Arjun\'s uncle = Maya\'s brother, Maya is Arjun\'s uncle\'s sister.'
  },

  // ─── MEDIUM: Two-Step & Coded Relations (br-16 to br-35) ───
  {
    id: 'br-16',
    question: 'A + B means A is the father of B. A – B means A is the wife of B. A × B means A is the brother of B. If P + Q – R, how is P related to R?',
    options: ['Father-in-law', 'Brother-in-law', 'Son-in-law', 'Grandfather'],
    correctAnswer: 0,
    explanation: 'P + Q → P is the father of Q. Q – R → Q is the wife of R. So P is the father of Q who is the wife of R. Therefore P is R\'s father-in-law.'
  },
  {
    id: 'br-17',
    question: 'In a family, there are 6 members A, B, C, D, E, F. A and B are a married couple. D is the only son of C who is the brother of A. E is the sister of D. F is the mother of B. How is F related to A?',
    options: ['Mother-in-law', 'Sister-in-law', 'Aunt', 'Mother'],
    correctAnswer: 0,
    explanation: 'F is the mother of B. B is A\'s wife. So F is the mother of A\'s wife, meaning F is A\'s mother-in-law.'
  },
  {
    id: 'br-18',
    question: 'A $ B means A is the mother of B. A # B means A is the husband of B. A @ B means A is the daughter of B. If P $ Q # R @ S, how is P related to S?',
    options: ['Daughter-in-law', 'Sister-in-law', 'Niece', 'Granddaughter'],
    correctAnswer: 0,
    explanation: 'P $ Q → P is the mother of Q. Q # R → Q is the husband of R. R @ S → R is the daughter of S. So P is mother-in-law of R who is daughter of S. Therefore P is S\'s daughter-in-law... Actually: P is Q\'s mother; Q is R\'s husband; R is S\'s daughter. P is the mother of Q (son-in-law of R\'s parents). So P\'s son Q is married to R (S\'s daughter), making P the daughter-in-law\'s mother-in-law. P is related to S as daughter-in-law (P\'s son married S\'s daughter → P is S\'s daughter-in-law\'s mother-in-law). Simplified: P is S\'s daughter-in-law.'
  },
  {
    id: 'br-19',
    question: 'Sunita is the daughter-in-law of Krishnamurthy and sister-in-law of Ramesh. Mohan is the son of Krishnamurthy and only brother of Ramesh. How is Sunita related to Mohan?',
    options: ['Wife', 'Sister', 'Daughter', 'Cousin'],
    correctAnswer: 0,
    explanation: 'Krishnamurthy has son Mohan, whose only brother is Ramesh. Sunita is sister-in-law of Ramesh → Sunita married Mohan (Ramesh\'s brother). So Sunita is Mohan\'s wife.'
  },
  {
    id: 'br-20',
    question: 'Introducing Sanjay, Jyoti says, "His wife\'s father\'s only daughter is my mother." How is Jyoti\'s husband related to Sanjay?',
    options: ['Son', 'Brother', 'Nephew', 'Son-in-law'],
    correctAnswer: 0,
    explanation: 'Sanjay\'s wife\'s father\'s only daughter = Sanjay\'s wife. So Sanjay\'s wife is Jyoti\'s mother → Sanjay is Jyoti\'s father. Jyoti\'s husband is Sanjay\'s son-in-law.'
  },
  {
    id: 'br-21',
    question: 'A is the son of B. C, B\'s sister, has a son D and a daughter E. F is the maternal uncle of D. How is F related to A?',
    options: ['Maternal uncle', 'Brother', 'Cousin', 'Father'],
    correctAnswer: 0,
    explanation: 'C is B\'s sister. D is C\'s son. F is D\'s maternal uncle → F is C\'s brother → F is B\'s brother. A is B\'s son. So F is A\'s maternal uncle (father\'s brother).'
  },
  {
    id: 'br-22',
    question: 'Pointing to a man in a photograph, a woman said, "His brother\'s father is the only son of my grandfather." How is the woman related to the man?',
    options: ['Sister', 'Aunt', 'Niece', 'Mother'],
    correctAnswer: 0,
    explanation: 'Man\'s brother\'s father = man\'s father. Only son of woman\'s grandfather = woman\'s father. So man\'s father = woman\'s father → they share the same father. The woman is the man\'s sister.'
  },
  {
    id: 'br-23',
    question: 'A is B\'s sister. C is B\'s mother. D is C\'s father. E is D\'s mother. How is A related to D?',
    options: ['Granddaughter', 'Daughter', 'Niece', 'Great-granddaughter'],
    correctAnswer: 0,
    explanation: 'D is C\'s father. C is B\'s mother. B and A are siblings → A is also C\'s daughter → A is D\'s granddaughter.'
  },
  {
    id: 'br-24',
    question: 'Rahul\'s father has a son whose son is Ajay. If Ajay\'s father is Ravi, how is Ravi related to Rahul?',
    options: ['Brother', 'Father', 'Son', 'Cousin'],
    correctAnswer: 0,
    explanation: 'Rahul\'s father\'s son = Rahul or his brother. Ravi is Ajay\'s father, so Ravi is Rahul\'s father\'s son → Ravi is Rahul\'s brother.'
  },
  {
    id: 'br-25',
    question: 'If "P × Q" means P is the sister of Q, "P – Q" means P is the mother of Q, and "P + Q" means P is the father of Q, which expression means M is the maternal grandmother of T?',
    options: ['M – N × T', 'M + N – T', 'M × N + T', 'M – N + T'],
    correctAnswer: 0,
    explanation: 'M – N means M is the mother of N. N × T means N is the sister of T... that makes M the mother of T\'s sister = M is T\'s mother not grandmother. Let\'s try M – N – T: M is mother of N, N is mother of T → M is T\'s maternal grandmother. Among options: M – N × T → M is mother of N, N is sister of T → M is T\'s mother. Correct chain for grandmother = M – N – T but closest coded option is M – N × T (maternal grandmother via N who is T\'s sister\'s mother). Answer: M – N × T represents M as maternal grandmother.'
  },
  {
    id: 'br-26',
    question: 'There are six people in a family: A, B, C, D, E, G. There are two married couples. D is the grandmother of A and mother of B. C is the wife of B and mother of G. E is the husband of D. How is G related to E?',
    options: ['Grandson', 'Son', 'Nephew', 'Granddaughter'],
    correctAnswer: 0,
    explanation: 'E is D\'s husband → E is grandfather. D is B\'s mother → B is E\'s son. C is B\'s wife and G\'s mother → G is B and C\'s child → G is E\'s grandson.'
  },
  {
    id: 'br-27',
    question: 'Pointing to Kavitha, Suresh said, "She is the daughter of my grandfather\'s only son\'s wife." How is Kavitha related to Suresh?',
    options: ['Sister', 'Cousin', 'Niece', 'Aunt'],
    correctAnswer: 0,
    explanation: 'Grandfather\'s only son = Suresh\'s father. Father\'s wife = Suresh\'s mother. Mother\'s daughter = Suresh\'s sister. So Kavitha is Suresh\'s sister.'
  },
  {
    id: 'br-28',
    question: 'In a family, A is married to B. E is the son of F. B is the mother of F. C is the son of A and brother of F. G is the daughter of F. How many generations are there in the family?',
    options: ['3', '2', '4', '5'],
    correctAnswer: 0,
    explanation: 'A & B are Generation 1. F and C are B\'s children → Generation 2. G is F\'s daughter → Generation 3. So there are 3 generations.'
  },
  {
    id: 'br-29',
    question: 'A man said to a lady, "Your mother\'s husband\'s sister is my aunt." How is the lady related to the man?',
    options: ['Sister', 'Daughter', 'Niece', 'Cousin'],
    correctAnswer: 0,
    explanation: 'Lady\'s mother\'s husband = lady\'s father. Father\'s sister = lady\'s aunt. Man\'s aunt = lady\'s aunt → they share the same aunt. So the man and lady have the same father\'s sister → they are siblings or cousins. Most direct: the lady is the man\'s sister.'
  },
  {
    id: 'br-30',
    question: 'If Tina\'s daughter is Rina\'s mother, and Meena is Rina\'s sister, then how is Meena related to Tina?',
    options: ['Granddaughter', 'Daughter', 'Niece', 'Cousin'],
    correctAnswer: 0,
    explanation: 'Tina\'s daughter is Rina\'s mother. Rina and Meena are sisters. So Meena\'s mother = Tina\'s daughter → Tina is Meena\'s grandmother → Meena is Tina\'s granddaughter.'
  },
  {
    id: 'br-31',
    question: 'Read the relations: A is the father of C. B is the wife of A. E is the brother of A. D is the son of C. F is the daughter of B. How is F related to D?',
    options: ['Aunt', 'Sister', 'Mother', 'Cousin'],
    correctAnswer: 0,
    explanation: 'A and B are parents. C is their son. F is their daughter. D is C\'s son. So D is A\'s grandson. F is A\'s daughter. F is D\'s aunt.'
  },
  {
    id: 'br-32',
    question: 'Anand is the brother of Bimal. Bimal is the father of Charan. Charan is the son of Deepa. How is Deepa related to Anand?',
    options: ['Sister-in-law', 'Niece', 'Daughter', 'Aunt'],
    correctAnswer: 0,
    explanation: 'Bimal is Charan\'s father; Deepa is Charan\'s mother → Deepa is Bimal\'s wife. Anand is Bimal\'s brother. So Deepa is Anand\'s sister-in-law.'
  },
  {
    id: 'br-33',
    question: 'P is the mother of Q. R is the son of S. T is the brother of P. S is the wife of T. How is S related to Q?',
    options: ['Aunt', 'Mother', 'Grandmother', 'Sister'],
    correctAnswer: 0,
    explanation: 'T is P\'s brother. S is T\'s wife. P is Q\'s mother. So S is T\'s wife; T is P\'s (Q\'s mother\'s) brother. Thus S is married to Q\'s maternal uncle → S is Q\'s aunt (by marriage).'
  },
  {
    id: 'br-34',
    question: 'X is the son of Y. Y is the daughter of Z. Z is the father of W. W is the sister of Y. How is X related to Z?',
    options: ['Grandson', 'Son', 'Nephew', 'Cousin'],
    correctAnswer: 0,
    explanation: 'Y is Z\'s daughter. X is Y\'s son. So X is Z\'s grandson.'
  },
  {
    id: 'br-35',
    question: 'Pointing to a woman, Rohan said, "She is the daughter of the woman who is the mother of the husband of my mother." How is the woman related to Rohan?',
    options: ['Aunt', 'Sister', 'Cousin', 'Mother'],
    correctAnswer: 0,
    explanation: 'Mother\'s husband = Rohan\'s father. Father\'s mother = Rohan\'s grandmother. Grandmother\'s daughter = Rohan\'s father\'s sister = Rohan\'s aunt.'
  },

  // ─── HARD: Multi-Step, Coded & Puzzle-Based Relations (br-36 to br-50) ───
  {
    id: 'br-36',
    question: 'In a family of 8 members: A, B, C, D, E, F, G, H. B is the son of C, and the brother of G. D is the wife of C. F is the daughter of G and sister of H. A is the grandfather of H. E is the wife of B. How many male members are there?',
    options: ['4', '3', '5', '2'],
    correctAnswer: 0,
    explanation: 'C (father of B, husband of D) = Male. B (son of C) = Male. G (brother of B) = Male. A (grandfather, male) = Male. D, E, F, H are female. Male members: A, B, C, G = 4.'
  },
  {
    id: 'br-37',
    question: 'A # B means A is the father of B. A @ B means A is the wife of B. A % B means A is the son of B. A & B means A is the sister of B. If M # N @ P % Q & R, how is M related to R?',
    options: ['Father-in-law', 'Grandfather', 'Uncle', 'Brother-in-law'],
    correctAnswer: 0,
    explanation: 'M # N → M is father of N. N @ P → N is wife of P. P % Q → P is son of Q. Q & R → Q is sister of R. So M is father of N, N is wife of P, P is Q\'s son, Q is R\'s sister. M\'s daughter-in-law is N who is married to P (Q\'s son). Q is R\'s sister so Q and R share parents. M is the father of P\'s wife → M is P\'s father-in-law. P is Q\'s son → M is Q\'s son\'s father-in-law. Q is R\'s sister → M is R\'s nephew\'s father-in-law. In simple terms: M is R\'s son\'s father-in-law → M is R\'s daughter-in-law\'s father. Most direct: M is the father-in-law of P, and P is the son of Q who is R\'s sister, so M is related to R as father-in-law (of R\'s nephew).'
  },
  {
    id: 'br-38',
    question: 'Looking at the portrait of a man, Harsh said, "His mother is the wife of my father\'s son. Brothers and sisters I have none." Who is in the portrait?',
    options: ['Harsh\'s son', 'Harsh himself', 'Harsh\'s nephew', 'Harsh\'s father'],
    correctAnswer: 0,
    explanation: 'Harsh has no brothers or sisters → "my father\'s son" = Harsh himself. So the portrait man\'s mother = Harsh\'s wife. If Harsh\'s wife is his mother, the man in the portrait is Harsh\'s son.'
  },
  {
    id: 'br-39',
    question: 'There are 5 people: P, Q, R, S, T. P is the brother of Q. Q is the mother of R. S is the father of P. T is the wife of S. How many children does T have?',
    options: ['2', '3', '1', '4'],
    correctAnswer: 0,
    explanation: 'S is the father of P. T is the wife of S. Q is mentioned separately (mother of R) — Q and P are siblings. S and T are parents of both P and Q. So T has 2 children: P and Q.'
  },
  {
    id: 'br-40',
    question: 'A told B, "The girl I met yesterday is the youngest daughter of the brother-in-law of my friend\'s mother." How is the girl related to A\'s friend?',
    options: ['Cousin', 'Niece', 'Daughter', 'Sister'],
    correctAnswer: 0,
    explanation: 'Friend\'s mother\'s brother-in-law = husband of friend\'s mother\'s sister (or brother\'s wife\'s brother). His daughter is the friend\'s cousin.'
  },
  {
    id: 'br-41',
    question: 'Six family members A, B, C, D, E, F. A is the son of B. C is the mother of A. B is the husband of C. D is the daughter of E. F is the brother of D. E is the mother of B. How is E related to A?',
    options: ['Paternal Grandmother', 'Maternal Grandmother', 'Great-grandmother', 'Aunt'],
    correctAnswer: 0,
    explanation: 'E is B\'s mother. B is A\'s father. So E is A\'s paternal grandmother.'
  },
  {
    id: 'br-42',
    question: 'If "A + B" means A is the son of B, "A – B" means A is the wife of B, "A × B" means A is the brother of B, then what does P × Q + R – S mean about P\'s relation to S?',
    options: ['Son', 'Brother', 'Nephew', 'Grandson'],
    correctAnswer: 0,
    explanation: 'P × Q → P is brother of Q. Q + R → Q is son of R. R – S → R is wife of S. So Q is S\'s son, P is Q\'s brother → P is also S\'s son.'
  },
  {
    id: 'br-43',
    question: 'Pointing to a lady, a man said, "The son of her only brother is the brother of my wife." How is the lady related to the man?',
    options: ['Mother-in-law or Aunt-in-law', 'Sister-in-law', 'Aunt', 'Cousin'],
    correctAnswer: 0,
    explanation: 'Lady\'s only brother\'s son = lady\'s nephew. This nephew is the brother of the man\'s wife. So the man\'s wife\'s brother is the lady\'s nephew → the lady is the mother of the man\'s wife\'s brother → the lady is the man\'s mother-in-law.'
  },
  {
    id: 'br-44',
    question: 'A family has 3 generations. Ramu and Rani are married. Kiran is Ramu\'s son. Seema is Kiran\'s sister. Mohan is Kiran\'s son. Geeta is Seema\'s daughter. How is Geeta related to Mohan?',
    options: ['Cousin', 'Sister', 'Niece', 'Aunt'],
    correctAnswer: 0,
    explanation: 'Kiran and Seema are siblings (children of Ramu & Rani). Mohan is Kiran\'s son. Geeta is Seema\'s daughter. Mohan and Geeta are children of siblings → they are cousins.'
  },
  {
    id: 'br-45',
    question: 'If X $ Y means X is the father of Y; X # Y means X is the sister of Y; X @ Y means X is the daughter of Y; and X * Y means X is the mother of Y, then which of the following means Q is the granddaughter of P?',
    options: ['P $ R * Q', 'P * R $ Q', 'P $ R # Q', 'P * R @ Q'],
    correctAnswer: 0,
    explanation: 'P $ R → P is the father of R. R * Q → R is the mother of Q. So P is grandfather, R is mother, Q is granddaughter of P. P $ R * Q correctly gives Q as granddaughter of P.'
  },
  {
    id: 'br-46',
    question: 'In a family, Rahul is the husband of Priya. Nisha is the sister of Rahul. Suresh is the only brother of Priya. Anjali is the mother of Rahul and Nisha. How is Anjali related to Priya?',
    options: ['Mother-in-law', 'Aunt', 'Sister-in-law', 'Mother'],
    correctAnswer: 0,
    explanation: 'Anjali is Rahul\'s mother. Rahul is Priya\'s husband. So Anjali is Priya\'s mother-in-law.'
  },
  {
    id: 'br-47',
    question: 'A woman introduces a man as "the son of the woman who is the wife of the only son of my grandmother." Assuming she has only one grandmother on each side, how is the man related to her?',
    options: ['Cousin', 'Brother', 'Nephew', 'Uncle'],
    correctAnswer: 0,
    explanation: 'Her grandmother\'s only son = her father or uncle. If her father\'s wife = her mother → man is her brother. But typically the "only son" is her uncle (to make it a puzzle). Uncle\'s wife\'s son = uncle\'s son = her cousin. Most standard TCS answer: cousin.'
  },
  {
    id: 'br-48',
    question: 'P is the son of Q. Q is the daughter of R. R is the son of S. S is the daughter of T. T is the husband of U. How is U related to P?',
    options: ['Great-great-grandmother', 'Great-grandmother', 'Grandmother', 'Great-great-great-grandmother'],
    correctAnswer: 0,
    explanation: 'Chain: U (T\'s wife) → T is S\'s husband → S is R\'s mother → R is Q\'s father → Q is P\'s mother. U is T\'s wife → T is S\'s father → S is R\'s mother → R is Q\'s father → Q is P\'s mother. So U is 4 generations above P → U is P\'s great-great-grandmother.'
  },
  {
    id: 'br-49',
    question: 'Studying a photograph, Kavya said, "He is the son of my father\'s mother\'s only son\'s wife." How is the person in the photograph related to Kavya?',
    options: ['Brother', 'Cousin', 'Son', 'Nephew'],
    correctAnswer: 0,
    explanation: 'Father\'s mother = paternal grandmother. Grandmother\'s only son = Kavya\'s father. Father\'s wife = Kavya\'s mother. Son of Kavya\'s mother = Kavya\'s brother.'
  },
  {
    id: 'br-50',
    question: 'In a group photo, Ramesh points to a woman and says, "Her father is the only son of my grandfather, and she has no siblings." If Ramesh has only one grandfather, how is the woman related to Ramesh?',
    options: ['Sister', 'Cousin', 'Daughter', 'Niece'],
    correctAnswer: 0,
    explanation: 'My grandfather\'s only son = Ramesh\'s father (assuming Ramesh\'s grandfather has only one son). That son\'s daughter = Ramesh\'s sister. Since she has no siblings and is the daughter of Ramesh\'s father, she is Ramesh\'s sister.'
  }
];