import { Question } from '@/types/quiz';
import { percentagesQuestions } from './percentages';
import { numberSystemQuestions } from './number-system';
import { profitLossQuestions } from './profit-loss';
import { reasoningQuestions } from './reasoning';
import { workTimeQuestions } from './work-time';
import { speedTimeQuestions } from './speed-time';
import { areaPerimeterQuestions } from './area-perimeter';
import  {ratioQuestions} from './ratio';
import { geometryQuestions } from './geometry';
import { equationQuestions } from './equation';
import { ageQuestions } from './age';
import { clockCalendarQuestions } from './clock&calender';
import { seriesProgressionQuestions } from './series';
import { probabilityQuestions } from './prob';
import { pncQuestions } from './pnc';
import { allegationQuestions } from './allegation';
import { divisibilityQuestions } from './divisibility';
import { decimalFractionsQuestions } from './decimal-fractions';
import { averageQuestions } from './avg';
import { arrangementsSeriesQuestions } from './arrangements';
import { bloodRelationsQuestions } from './Bloodrelationsquestions';
import { codingDecodingQuestions } from './coding-decoding';
import { oddManOutQuestions } from './odd-man';
import { directionsQuestions } from './directions';
import { seatingEasyQuestions } from './Seatingeasyquestions';
import { statementConclusionQuestions } from './Statementconclusionquestions';

const questionBank: Record<string, Question[]> = {
  'percentages': percentagesQuestions,
  'number-system': numberSystemQuestions,
  'profit-loss': profitLossQuestions,
  'ratios': ratioQuestions,
  'work-time': workTimeQuestions,
  'speed-time-distance': speedTimeQuestions,
  'geometry': geometryQuestions,
  'area-shapes': areaPerimeterQuestions,
  'equations': equationQuestions,
  'ages': ageQuestions,
  'clocks-calendar': clockCalendarQuestions,
  'series-progressions': seriesProgressionQuestions,
  'probability': probabilityQuestions,
  'pnc': pncQuestions,
  'allegations': allegationQuestions,
  'divisibility': divisibilityQuestions,
  'decimal-fractions': decimalFractionsQuestions,
  'averages': averageQuestions,
  'arrangements-series': arrangementsSeriesQuestions,
  'blood-relations': bloodRelationsQuestions,
  'coding-decoding': codingDecodingQuestions,
  'odd-man-out': oddManOutQuestions,
  'directions': directionsQuestions,
  'statement-conclusion': statementConclusionQuestions,
  'seating-easy': seatingEasyQuestions,
  'seating-complex': reasoningQuestions.map((q, i) => ({ ...q, id: `scx-${i+1}` })),
  'analogy': reasoningQuestions.map((q, i) => ({ ...q, id: `an-${i+1}` })),
  'math-operations': reasoningQuestions.map((q, i) => ({ ...q, id: `mo-${i+1}` })),
  'symbols-notations': reasoningQuestions.map((q, i) => ({ ...q, id: `sn-${i+1}` })),
  'data-sufficiency': reasoningQuestions.map((q, i) => ({ ...q, id: `ds-${i+1}` })),
  'meaningful-word': reasoningQuestions.map((q, i) => ({ ...q, id: `mw-${i+1}` })),
  'number-series': reasoningQuestions.map((q, i) => ({ ...q, id: `nsr-${i+1}` })),
  'reasoning-general': reasoningQuestions.map((q, i) => ({ ...q, id: `rg-${i+1}` })),
};

export function getQuestions(topicId: string, count: number = 50): Question[] {
  const questions = questionBank[topicId] || reasoningQuestions;
  return questions.slice(0, count);
}
