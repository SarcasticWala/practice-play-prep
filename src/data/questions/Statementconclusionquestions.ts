import { Question } from '@/types/quiz';

export const statementConclusionQuestions: Question[] = [

  // ─── EASY: Direct Single-Statement Conclusions (sc-1 to sc-15) ───
  {
    id: 'sc-1',
    question: 'Statement: "All dogs are animals. All animals need food."\nConclusion I: All dogs need food.\nConclusion II: All animals are dogs.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Dogs ⊆ Animals ⊆ Needs food → All dogs need food ✓. But not all animals are dogs (reverse is invalid) ✗. Only I follows.'
  },
  {
    id: 'sc-2',
    question: 'Statement: "Some cats are black. All black things are beautiful."\nConclusion I: Some cats are beautiful.\nConclusion II: All cats are beautiful.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some cats are black → those black cats are beautiful → some cats are beautiful ✓. "All cats" is too strong — we only know about some ✗. Only I follows.'
  },
  {
    id: 'sc-3',
    question: 'Statement: "No pen is a pencil. All pencils are stationery."\nConclusion I: No pen is stationery.\nConclusion II: Some stationery are not pens.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion II follows', 'Only Conclusion I follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Pencils ⊆ Stationery and Pencils ∩ Pens = ∅. We cannot conclude no pen is stationery (pens may be stationery via another path) ✗. But since all pencils are stationery and no pencil is a pen, those pencils (stationery) are not pens → some stationery are not pens ✓. Only II follows.'
  },
  {
    id: 'sc-4',
    question: 'Statement: "All birds can fly. Penguin is a bird."\nConclusion I: Penguin can fly.\nConclusion II: Penguin cannot fly.\nWhich conclusion(s) follow (logically, based only on given statements)?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Based strictly on the given statements (not real-world knowledge): All birds can fly + Penguin is a bird → Penguin can fly ✓ (logical deduction). Only I follows.'
  },
  {
    id: 'sc-5',
    question: 'Statement: "Some fruits are sweet. All sweets are liked by children."\nConclusion I: Some fruits are liked by children.\nConclusion II: All fruits are liked by children.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some fruits are sweet → those are liked by children → some fruits are liked ✓. "All fruits" is unsupported ✗. Only I follows.'
  },
  {
    id: 'sc-6',
    question: 'Statement: "All roses are flowers. All flowers are beautiful."\nConclusion I: All roses are beautiful.\nConclusion II: Some beautiful things are roses.\nWhich conclusion(s) follow?',
    options: ['Both follow', 'Only Conclusion I follows', 'Only Conclusion II follows', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Roses ⊆ Flowers ⊆ Beautiful → All roses are beautiful ✓. Roses ⊆ Beautiful → Some beautiful are roses ✓. Both follow.'
  },
  {
    id: 'sc-7',
    question: 'Statement: "No student is lazy. Ram is a student."\nConclusion I: Ram is not lazy.\nConclusion II: All students are hardworking.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'No student is lazy + Ram is a student → Ram is not lazy ✓. "Hardworking" is not mentioned in the statements ✗. Only I follows.'
  },
  {
    id: 'sc-8',
    question: 'Statement: "Some books are novels. All novels are interesting."\nConclusion I: Some books are interesting.\nConclusion II: All books are interesting.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some books are novels → those novels are interesting → some books are interesting ✓. "All books" is too broad ✗. Only I follows.'
  },
  {
    id: 'sc-9',
    question: 'Statement: "All mangoes are yellow. All yellow things are ripe."\nConclusion I: All mangoes are ripe.\nConclusion II: Some ripe things are yellow.\nWhich conclusion(s) follow?',
    options: ['Both follow', 'Only Conclusion I follows', 'Only Conclusion II follows', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Mangoes ⊆ Yellow ⊆ Ripe → All mangoes are ripe ✓. Yellow ⊆ Ripe → Some ripe are yellow ✓. Both follow.'
  },
  {
    id: 'sc-10',
    question: 'Statement: "No table is a chair. All chairs are furniture."\nConclusion I: No table is furniture.\nConclusion II: Some furniture are not tables.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion II follows', 'Only Conclusion I follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'We cannot say no table is furniture (tables may be furniture too) ✗. But chairs are furniture and no chair is a table → some furniture (chairs) are not tables ✓. Only II follows.'
  },
  {
    id: 'sc-11',
    question: 'Statement: "All teachers are educated. Sunil is a teacher."\nConclusion I: Sunil is educated.\nConclusion II: All educated people are teachers.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Sunil ∈ Teachers ⊆ Educated → Sunil is educated ✓. Reverse (all educated are teachers) is invalid ✗. Only I follows.'
  },
  {
    id: 'sc-12',
    question: 'Statement: "Some engineers are scientists. All scientists are intelligent."\nConclusion I: Some engineers are intelligent.\nConclusion II: All engineers are intelligent.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some engineers are scientists → those scientists are intelligent → some engineers are intelligent ✓. "All engineers" is not supported ✗. Only I follows.'
  },
  {
    id: 'sc-13',
    question: 'Statement: "All cars have wheels. My vehicle has wheels."\nConclusion I: My vehicle is a car.\nConclusion II: My vehicle may or may not be a car.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion II follows', 'Only Conclusion I follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Having wheels does not confirm a vehicle is a car (bikes, buses also have wheels). So Conclusion I is invalid ✗. Conclusion II is valid — it may or may not be a car ✓.'
  },
  {
    id: 'sc-14',
    question: 'Statement: "No glass is metal. All metals conduct electricity."\nConclusion I: No glass conducts electricity.\nConclusion II: Some conductors of electricity are not glass.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion II follows', 'Only Conclusion I follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'We cannot conclude glass does not conduct (it may through another path) ✗. All metals conduct → some conductors are metals → those are not glass (since no glass is metal) ✓. Only II follows.'
  },
  {
    id: 'sc-15',
    question: 'Statement: "All politicians are corrupt. Mr. X is corrupt."\nConclusion I: Mr. X is a politician.\nConclusion II: Mr. X may or may not be a politician.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion II follows', 'Only Conclusion I follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Being corrupt doesn\'t mean one must be a politician (others can be corrupt too). Mr. X may or may not be a politician ✓. Conclusion I is a false converse ✗. Only II follows.'
  },

  // ─── MEDIUM: Two-Statement Syllogisms & Implicit Conclusions (sc-16 to sc-35) ───
  {
    id: 'sc-16',
    question: 'Statement: "All A are B. No B is C."\nConclusion I: No A is C.\nConclusion II: Some B are A.\nWhich conclusion(s) follow?',
    options: ['Both follow', 'Only Conclusion I follows', 'Only Conclusion II follows', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'A ⊆ B and B ∩ C = ∅ → A ∩ C = ∅ → No A is C ✓. A ⊆ B → some B are A ✓. Both follow.'
  },
  {
    id: 'sc-17',
    question: 'Statement: "Some P are Q. Some Q are R."\nConclusion I: Some P are R.\nConclusion II: No P is R.\nWhich conclusion(s) follow?',
    options: ['Neither follows', 'Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow'],
    correctAnswer: 0,
    explanation: '"Some P are Q" and "Some Q are R" — the Q\'s that are P may not be the same Q\'s that are R. We cannot confirm or deny P-R relation. Neither conclusion definitively follows.'
  },
  {
    id: 'sc-18',
    question: 'Statement: "All doctors are rich. Some rich people are happy."\nConclusion I: Some doctors are happy.\nConclusion II: All happy people are doctors.\nWhich conclusion(s) follow?',
    options: ['Neither follows', 'Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow'],
    correctAnswer: 0,
    explanation: 'Doctors ⊆ Rich, and some rich are happy — but the happy rich may not overlap with doctors. We can\'t confirm "some doctors are happy" ✗. II is clearly invalid ✗. Neither follows.'
  },
  {
    id: 'sc-19',
    question: 'Statement: "No M is N. All N are O."\nConclusion I: No M is O.\nConclusion II: Some O are not M.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion II follows', 'Only Conclusion I follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'N ⊆ O and M ∩ N = ∅. We can\'t say M ∩ O = ∅ (M could still be O via another route) ✗. But all N are O and no N is M → those N (which are O) are not M → some O are not M ✓. Only II follows.'
  },
  {
    id: 'sc-20',
    question: 'Statement: "All X are Y. All Y are Z."\nConclusion I: All X are Z.\nConclusion II: All Z are X.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'X ⊆ Y ⊆ Z → All X are Z ✓. The reverse (All Z are X) doesn\'t hold ✗. Only I follows.'
  },
  {
    id: 'sc-21',
    question: 'Statement: "Some athletes are musicians. All musicians practise daily."\nConclusion I: Some athletes practise daily.\nConclusion II: All athletes practise daily.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some athletes are musicians → those musicians practise daily → some athletes practise daily ✓. "All athletes" is unsupported ✗. Only I follows.'
  },
  {
    id: 'sc-22',
    question: 'Statement: "No plastic is biodegradable. Some waste is plastic."\nConclusion I: Some waste is not biodegradable.\nConclusion II: All biodegradable things are waste.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some waste is plastic → those plastics are not biodegradable → some waste is not biodegradable ✓. II introduces "all biodegradable are waste" which is unsupported ✗. Only I follows.'
  },
  {
    id: 'sc-23',
    question: 'Statement: "All laptops are gadgets. No gadget is affordable."\nConclusion I: No laptop is affordable.\nConclusion II: Some gadgets are laptops.\nWhich conclusion(s) follow?',
    options: ['Both follow', 'Only Conclusion I follows', 'Only Conclusion II follows', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Laptops ⊆ Gadgets and Gadgets ∩ Affordable = ∅ → Laptops ∩ Affordable = ∅ → No laptop is affordable ✓. Laptops ⊆ Gadgets → Some gadgets are laptops ✓. Both follow.'
  },
  {
    id: 'sc-24',
    question: 'Statement: "Some rivers are polluted. All polluted things harm health."\nConclusion I: Some rivers harm health.\nConclusion II: All rivers harm health.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some rivers are polluted → those harm health → some rivers harm health ✓. "All rivers" is too broad ✗. Only I follows.'
  },
  {
    id: 'sc-25',
    question: 'Statement: "No criminal is honest. Some police officers are honest."\nConclusion I: Some police officers are not criminals.\nConclusion II: All honest people are police officers.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some police are honest. No criminal is honest → those honest police are not criminals → some police officers are not criminals ✓. II reverses and generalises unfairly ✗. Only I follows.'
  },
  {
    id: 'sc-26',
    question: 'Statement: "All trains are fast. Some fast things are expensive."\nConclusion I: Some trains are expensive.\nConclusion II: All expensive things are trains.\nWhich conclusion(s) follow?',
    options: ['Neither follows', 'Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow'],
    correctAnswer: 0,
    explanation: 'Trains ⊆ Fast; some fast are expensive — the expensive subset of fast may not include trains. Cannot confirm "some trains are expensive" ✗. II is clearly invalid ✗. Neither follows.'
  },
  {
    id: 'sc-27',
    question: 'Statement: "All apples are red. Some red things are round."\nConclusion I: Some apples are round.\nConclusion II: Some round things are red.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion II follows', 'Only Conclusion I follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Apples ⊆ Red; some red are round — those round things may not be apples ✗. But "some red are round" directly converts to "some round are red" ✓. Only II follows.'
  },
  {
    id: 'sc-28',
    question: 'Statement: "Some coins are notes. No note is a card."\nConclusion I: Some coins are not cards.\nConclusion II: No coin is a card.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some coins are notes → those notes are not cards → some coins are not cards ✓. Other coins may still be cards, so "no coin is a card" is too strong ✗. Only I follows.'
  },
  {
    id: 'sc-29',
    question: 'Statement: "All buildings are structures. Some structures are ancient."\nConclusion I: Some buildings are ancient.\nConclusion II: Some ancient things are structures.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion II follows', 'Only Conclusion I follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Buildings ⊆ Structures; some structures are ancient — those ancient structures may not be buildings ✗. "Some structures are ancient" converts to "some ancient things are structures" ✓. Only II follows.'
  },
  {
    id: 'sc-30',
    question: 'Statement: "All wars cause destruction. Some destructions lead to poverty."\nConclusion I: Some wars lead to poverty.\nConclusion II: All destructions are caused by wars.\nWhich conclusion(s) follow?',
    options: ['Neither follows', 'Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow'],
    correctAnswer: 0,
    explanation: 'Wars ⊆ Cause destruction; some destructions lead to poverty — but the poverty-causing destructions may not be caused by wars ✗. II is a false universal reversal ✗. Neither follows.'
  },
  {
    id: 'sc-31',
    question: 'Statement: "All squares are rectangles. Some rectangles are parallelograms."\nConclusion I: Some squares are parallelograms.\nConclusion II: Some parallelograms are rectangles.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion II follows', 'Only Conclusion I follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Squares ⊆ Rectangles; some rectangles are parallelograms — those parallelogram-rectangles may not be squares ✗. "Some rectangles are parallelograms" directly converts to "some parallelograms are rectangles" ✓. Only II follows.'
  },
  {
    id: 'sc-32',
    question: 'Statement: "No stone is wood. All wood is natural."\nConclusion I: No stone is natural.\nConclusion II: Some natural things are not stones.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion II follows', 'Only Conclusion I follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Stone ∩ Wood = ∅; Wood ⊆ Natural. Stones could still be natural via another path ✗. Wood ⊆ Natural and Wood ∩ Stone = ∅ → some natural things (wood) are not stones ✓. Only II follows.'
  },
  {
    id: 'sc-33',
    question: 'Statement: "All pilots are brave. No brave person is reckless."\nConclusion I: No pilot is reckless.\nConclusion II: Some brave people are pilots.\nWhich conclusion(s) follow?',
    options: ['Both follow', 'Only Conclusion I follows', 'Only Conclusion II follows', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Pilots ⊆ Brave and Brave ∩ Reckless = ∅ → Pilots ∩ Reckless = ∅ → No pilot is reckless ✓. Pilots ⊆ Brave → Some brave are pilots ✓. Both follow.'
  },
  {
    id: 'sc-34',
    question: 'Statement: "Some singers are dancers. All dancers are fit."\nConclusion I: Some singers are fit.\nConclusion II: All fit people are dancers.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some singers are dancers → those dancers are fit → some singers are fit ✓. "All fit are dancers" is unsupported (being fit doesn\'t require being a dancer) ✗. Only I follows.'
  },
  {
    id: 'sc-35',
    question: 'Statement: "All phones are electronic. No electronic item is cheap."\nConclusion I: No phone is cheap.\nConclusion II: Some electronic items are phones.\nWhich conclusion(s) follow?',
    options: ['Both follow', 'Only Conclusion I follows', 'Only Conclusion II follows', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Phones ⊆ Electronic and Electronic ∩ Cheap = ∅ → Phones ∩ Cheap = ∅ → No phone is cheap ✓. Phones ⊆ Electronic → Some electronic items are phones ✓. Both follow.'
  },

  // ─── HARD: Three-Statement & Implicit Assumption Problems (sc-36 to sc-50) ───
  {
    id: 'sc-36',
    question: 'Statement: "All A are B. All B are C. No C is D."\nConclusion I: No A is D.\nConclusion II: No B is D.\nConclusion III: Some C are A.\nWhich conclusion(s) follow?',
    options: ['All three follow', 'Only I and II follow', 'Only I follows', 'Only II and III follow'],
    correctAnswer: 0,
    explanation: 'A ⊆ B ⊆ C and C ∩ D = ∅ → A ∩ D = ∅ (I ✓) and B ∩ D = ∅ (II ✓). A ⊆ C → Some C are A (III ✓). All three follow.'
  },
  {
    id: 'sc-37',
    question: 'Statement: "Some P are Q. All Q are R. No R is S."\nConclusion I: Some P are R.\nConclusion II: No Q is S.\nConclusion III: Some P are S.\nWhich conclusion(s) follow?',
    options: ['Only I and II follow', 'All three follow', 'Only II follows', 'Only I follows'],
    correctAnswer: 0,
    explanation: 'Some P are Q → those Q are R → some P are R (I ✓). Q ⊆ R and R ∩ S = ∅ → Q ∩ S = ∅ → No Q is S (II ✓). Some P are R and R ∩ S = ∅ → those P (that are R) are not S → Some P are NOT S; III says "Some P are S" which contradicts ✗. Only I and II follow.'
  },
  {
    id: 'sc-38',
    question: 'Statement: "All lions are tigers. Some tigers are leopards. All leopards are cheetahs."\nConclusion I: Some tigers are cheetahs.\nConclusion II: Some lions are leopards.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some tigers are leopards → those leopards are cheetahs → some tigers are cheetahs ✓. "Some tigers are leopards" — those leopard-tigers may not include all lions (lions ⊆ tigers, but the leopard subset may be disjoint) ✗. Only I follows.'
  },
  {
    id: 'sc-39',
    question: 'Statement: "No fish is a mammal. All whales are mammals. Some sea creatures are fish."\nConclusion I: No whale is a fish.\nConclusion II: Some sea creatures are not mammals.\nWhich conclusion(s) follow?',
    options: ['Both follow', 'Only Conclusion I follows', 'Only Conclusion II follows', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'No fish is a mammal → whales are mammals → no whale is a fish ✓. Some sea creatures are fish → those fish are not mammals → some sea creatures are not mammals ✓. Both follow.'
  },
  {
    id: 'sc-40',
    question: 'Statement: "All M are N. Some N are O. All O are P."\nConclusion I: Some N are P.\nConclusion II: Some M are O.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some N are O → those O are P → some N are P ✓. M ⊆ N; some N are O — those O-elements of N may or may not be in M ✗. Only I follows.'
  },
  {
    id: 'sc-41',
    question: 'Statement: "All hardworking students pass. Ravi did not pass."\nConclusion I: Ravi is not a hardworking student.\nConclusion II: Ravi did not study.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Contrapositive of "all hardworking pass" = "not passed → not hardworking" → Ravi is not a hardworking student ✓. "Did not study" is beyond the given information ✗. Only I follows.'
  },
  {
    id: 'sc-42',
    question: 'Statement: "Some computers are laptops. All laptops are portable. No portable device is heavy."\nConclusion I: Some computers are not heavy.\nConclusion II: No laptop is heavy.\nConclusion III: All portable devices are laptops.\nWhich conclusion(s) follow?',
    options: ['Only I and II follow', 'All three follow', 'Only II follows', 'Only I follows'],
    correctAnswer: 0,
    explanation: 'Some computers are laptops → those are portable → those are not heavy → some computers are not heavy ✓. Laptops ⊆ Portable ∩ Not-heavy → No laptop is heavy ✓. III reverses "all laptops are portable" which is invalid ✗. Only I and II follow.'
  },
  {
    id: 'sc-43',
    question: 'Statement: "All honest people are trusted. No trusted person cheats. Some employees are honest."\nConclusion I: Some employees do not cheat.\nConclusion II: All trusted people are honest.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some employees are honest → those are trusted → those trusted don\'t cheat → some employees don\'t cheat ✓. II reverses the first statement invalidly ✗. Only I follows.'
  },
  {
    id: 'sc-44',
    question: 'Statement: "Some A are B. No B is C. All C are D."\nConclusion I: Some A are not C.\nConclusion II: All D are C.\nConclusion III: No A is C.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion III follows', 'Both I and III follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some A are B → those B are not C → some A are not C ✓. All D are C is a reversal — invalid ✗. We can\'t say NO A is C (other A\'s not in B might be C) ✗. Only I follows.'
  },
  {
    id: 'sc-45',
    question: 'Statement: "All politicians make promises. Some promise-makers are dishonest. Some dishonest people go to jail."\nConclusion I: Some politicians may be dishonest.\nConclusion II: All politicians go to jail.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Politicians ⊆ Promise-makers; some promise-makers are dishonest — that subset may include some politicians → "some politicians may be dishonest" is a possibility ✓. "All politicians go to jail" is unsupported ✗. Only I follows.'
  },
  {
    id: 'sc-46',
    question: 'Statement: "All cities have pollution. Some polluted places are unhealthy. All unhealthy places lack greenery."\nConclusion I: Some cities may be unhealthy.\nConclusion II: All cities lack greenery.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Cities ⊆ Polluted; some polluted are unhealthy — those may include some cities → some cities may be unhealthy ✓ (possibility). "All cities lack greenery" is too strong — not all polluted places are confirmed to be unhealthy ✗. Only I follows.'
  },
  {
    id: 'sc-47',
    question: 'Statement: "No sweet is sour. Some sours are tangy. All tangy things are refreshing."\nConclusion I: Some sourness is refreshing.\nConclusion II: No sweet is refreshing.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Some sours are tangy → those are refreshing → some sourness is refreshing ✓. Sweets ∩ Sour = ∅ but sweets may still be refreshing through other means ✗. Only I follows.'
  },
  {
    id: 'sc-48',
    question: 'Statement: "All X are Y. All Y are Z. Some Z are W."\nConclusion I: All X are Z.\nConclusion II: Some Y are W.\nConclusion III: Some X are W.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'All three follow', 'Only I and II follow', 'Only I and III follow'],
    correctAnswer: 0,
    explanation: 'X ⊆ Y ⊆ Z → All X are Z ✓. Some Z are W — those W-elements of Z may not include any Y ✗ (II uncertain). Since not all Y or X are necessarily in the "some Z that are W" subset, III is also uncertain ✗. Only I follows.'
  },
  {
    id: 'sc-49',
    question: 'Statement: "All good managers communicate well. No person who communicates well is misunderstood. Raj is a good manager."\nConclusion I: Raj is not misunderstood.\nConclusion II: All persons who are not misunderstood are good managers.\nWhich conclusion(s) follow?',
    options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both follow', 'Neither follows'],
    correctAnswer: 0,
    explanation: 'Raj → good manager → communicates well → not misunderstood ✓. II is the invalid converse ✗. Only I follows.'
  },
  {
    id: 'sc-50',
    question: 'Statement: "Some innovations fail. All failures are learning opportunities. No learning opportunity is wasted."\nConclusion I: Some innovations are learning opportunities.\nConclusion II: No innovation is wasted.\nConclusion III: Some learning opportunities are not wasted.\nWhich conclusion(s) follow?',
    options: ['Only I and III follow', 'All three follow', 'Only I follows', 'Only III follows'],
    correctAnswer: 0,
    explanation: 'Some innovations fail → those failures are learning opportunities → some innovations are learning opportunities ✓. We only know SOME innovations (those that failed) are learning opportunities; we can\'t say NO innovation is wasted ✗. All learning opportunities are not wasted → some learning opportunities are not wasted ✓ (in fact all are, so some certainly are). Only I and III follow.'
  }
];