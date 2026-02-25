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
  'allegations': profitLossQuestions.map((q, i) => ({ ...q, id: `alg-${i+1}` })),
  'divisibility': numberSystemQuestions.map((q, i) => ({ ...q, id: `div-${i+1}` })),
  'decimal-fractions': numberSystemQuestions.map((q, i) => ({ ...q, id: `df-${i+1}` })),
  'averages': percentagesQuestions.map((q, i) => ({ ...q, id: `avg-${i+1}` })),
  'arrangements-series': reasoningQuestions.map((q, i) => ({ ...q, id: `as-${i+1}` })),
  'blood-relations': reasoningQuestions.map((q, i) => ({ ...q, id: `br-${i+1}` })),
  'coding-decoding': reasoningQuestions.map((q, i) => ({ ...q, id: `cd-${i+1}` })),
  'odd-man-out': reasoningQuestions.map((q, i) => ({ ...q, id: `omo-${i+1}` })),
  'directions': reasoningQuestions.map((q, i) => ({ ...q, id: `dir-${i+1}` })),
  'statement-conclusion': reasoningQuestions.map((q, i) => ({ ...q, id: `sc-${i+1}` })),
  'seating-easy': reasoningQuestions.map((q, i) => ({ ...q, id: `se-${i+1}` })),
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
