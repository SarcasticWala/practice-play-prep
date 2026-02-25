import { Question } from '@/types/quiz';
import { percentagesQuestions } from './percentages';
import { numberSystemQuestions } from './number-system';
import { profitLossQuestions } from './profit-loss';
import { reasoningQuestions } from './reasoning';
import { workTimeQuestions } from './work-time';
import { speedTimeQuestions } from './speed-time';
import { areaPerimeterQuestions } from './area-perimeter';

const questionBank: Record<string, Question[]> = {
  'percentages': percentagesQuestions,
  'number-system': numberSystemQuestions,
  'profit-loss': profitLossQuestions,
  'ratios': percentagesQuestions.map((q, i) => ({ ...q, id: `rat-${i+1}` })),
  'work-time': workTimeQuestions,
  'speed-time-distance': speedTimeQuestions,
  'geometry': numberSystemQuestions.map((q, i) => ({ ...q, id: `geo-${i+1}` })),
  'area-shapes': areaPerimeterQuestions,
  'equations': percentagesQuestions.map((q, i) => ({ ...q, id: `eq-${i+1}` })),
  'ages': profitLossQuestions.map((q, i) => ({ ...q, id: `age-${i+1}` })),
  'clocks-calendar': reasoningQuestions.map((q, i) => ({ ...q, id: `cc-${i+1}` })),
  'series-progressions': numberSystemQuestions.map((q, i) => ({ ...q, id: `sp-${i+1}` })),
  'probability': percentagesQuestions.map((q, i) => ({ ...q, id: `prob-${i+1}` })),
  'pnc': numberSystemQuestions.map((q, i) => ({ ...q, id: `pnc-${i+1}` })),
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
