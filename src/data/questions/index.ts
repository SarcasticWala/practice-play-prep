import { Question, Difficulty } from "@/types/quiz";
import { percentagesQuestions } from "./percentages";
import { numberSystemQuestions } from "./number-system";
import { profitLossQuestions } from "./profit-loss";
import { reasoningQuestions } from "./reasoning";
import { workTimeQuestions } from "./work-time";
import { speedTimeQuestions } from "./speed-time";
import { areaPerimeterQuestions } from "./area-perimeter";
import { ratioQuestions } from "./ratio";
import { geometryQuestions } from "./geometry";
import { equationQuestions } from "./equation";
import { ageQuestions } from "./age";
import { clockCalendarQuestions } from "./clock&calender";
import { seriesProgressionQuestions } from "./series";
import { probabilityQuestions } from "./prob";
import { pncQuestions } from "./pnc";
import { allegationQuestions } from "./allegation";
import { divisibilityQuestions } from "./divisibility";
import { decimalFractionsQuestions } from "./decimal-fractions";
import { averageQuestions } from "./avg";
import { arrangementsSeriesQuestions } from "./arrangements";
import { bloodRelationsQuestions } from "./Bloodrelationsquestions";
import { codingDecodingQuestions } from "./coding-decoding";
import { oddManOutQuestions } from "./odd-man";
import { directionsQuestions } from "./directions";
import { seatingEasyQuestions } from "./Seatingeasyquestions";
import { statementConclusionQuestions } from "./Statementconclusionquestions";
import { analogyQuestions } from "./Analogyquestions";
import { mathOperationsQuestions } from "./Mathoperationsquestions";
import { symbolsNotationsQuestions } from "./Symbolsnotationsquestions ";
import { dataSufficiencyQuestions } from "./Datasufficiencyquestions";
import { meaningfulWordQuestions } from "./Meaningfulwordquestions ";
import { errorSpottingQuestions } from "./error-spotting";
import { fillInBlanksQuestions } from "./fill-in-blanks";
import { synonymsQuestions } from "./synonyms";
import { antonymsQuestions } from "./antonyms";
import { sentenceRearrangementQuestions } from "./sentence-rearrangement";
import { sentenceImprovementQuestions } from "./sentence-improvement";
import { readingComprehensionQuestions } from "./reading-comprehension";
import { idiomPhrasesQuestions } from "./idioms-phrases";
import { oneWordSubstitutionQuestions } from "./one-word-substitution";
import { clozeTestQuestions } from "./cloze-test";

const questionBank: Record<string, Question[]> = {
  percentages: percentagesQuestions,
  "number-system": numberSystemQuestions,
  "profit-loss": profitLossQuestions,
  ratios: ratioQuestions,
  "work-time": workTimeQuestions,
  "speed-time-distance": speedTimeQuestions,
  geometry: geometryQuestions,
  "area-shapes": areaPerimeterQuestions,
  equations: equationQuestions,
  ages: ageQuestions,
  "clocks-calendar": clockCalendarQuestions,
  "series-progressions": seriesProgressionQuestions,
  probability: probabilityQuestions,
  pnc: pncQuestions,
  allegations: allegationQuestions,
  divisibility: divisibilityQuestions,
  "decimal-fractions": decimalFractionsQuestions,
  averages: averageQuestions,
  "arrangements-series": arrangementsSeriesQuestions,
  "blood-relations": bloodRelationsQuestions,
  "coding-decoding": codingDecodingQuestions,
  "odd-man-out": oddManOutQuestions,
  directions: directionsQuestions,
  "statement-conclusion": statementConclusionQuestions,
  "seating-easy": seatingEasyQuestions,
  analogy: analogyQuestions,
  "math-operations": mathOperationsQuestions,
  "symbols-notations": symbolsNotationsQuestions,
  "data-sufficiency": dataSufficiencyQuestions,
  "meaningful-word": meaningfulWordQuestions,
  "number-series": reasoningQuestions.map((q, i) => ({
    ...q,
    id: `nsr-${i + 1}`,
  })),
  "reasoning-general": reasoningQuestions.map((q, i) => ({
    ...q,
    id: `rg-${i + 1}`,
  })),
  "error-spotting": errorSpottingQuestions,
  "fill-in-blanks": fillInBlanksQuestions,
  synonyms: synonymsQuestions,
  antonyms: antonymsQuestions,
  "sentence-rearrangement": sentenceRearrangementQuestions,
  "sentence-improvement": sentenceImprovementQuestions,
  "reading-comprehension": readingComprehensionQuestions,
  "idioms-phrases": idiomPhrasesQuestions,
  "one-word-substitution": oneWordSubstitutionQuestions,
  "cloze-test": clozeTestQuestions,
};

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function assignDifficulty(questions: Question[]): Question[] {
  const third = Math.ceil(questions.length / 3);
  return questions.map((q, i) => ({
    ...q,
    difficulty: q.difficulty || (i < third ? "easy" : i < third * 2 ? "medium" : "hard") as Difficulty,
  }));
}

export function getQuestions(topicId: string, count: number = 50, difficulty?: Difficulty): Question[] {
  const raw = questionBank[topicId] || reasoningQuestions;
  const questions = assignDifficulty(raw);
  const filtered = difficulty ? questions.filter((q) => q.difficulty === difficulty) : questions;
  return shuffleArray(filtered).slice(0, count);
}
