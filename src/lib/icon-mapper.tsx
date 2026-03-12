import React from "react";
import {
  CalculatorIcon,
  FunnelIcon,
  ScaleIcon,
  ClockIcon,
  MapIcon,
  ChatBubbleLeftIcon,
  LinkIcon,
  PlusIcon,
  ChartBarIcon,
  SparklesIcon,
  PencilIcon,
  BookOpenIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  ArrowsUpDownIcon,
  QuestionMarkCircleIcon,
  CubeIcon,
  UsersIcon,
  LockClosedIcon,
  XMarkIcon,
  UserGroupIcon,
  CheckCircleIcon,
  FireIcon,
  BoltIcon,
  StarIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

// Custom Beaker icon
const BeakerIcon = (props: any) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5.432 9.75a2.25 2.25 0 00-.659-1.591V3.104m0 0V2.25A2.25 2.25 0 0110.5 0h3m-3 3.104V2.25A2.25 2.25 0 0115.75 0h.006v5.714m0 0v8.736a2.25 2.25 0 01-.659 1.591l-4.659 4.659a2.25 2.25 0 01-1.591.659h-.191C6.75 21 6 20.25 6 19.5v-5.714m12-2.25v5.714c0 .75.75 1.5 1.5 1.5h.006a2.25 2.25 0 001.591-.659l4.659-4.659a2.25 2.25 0 00.659-1.591V9.75m-21-1.5v-1.5a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v1.5m0 16.5v-3.676a2.25 2.25 0 00-.659-1.591l-4.659-4.659a2.25 2.25 0 00-1.591-.659h-.191C17.25 12 16.5 13.5 16.5 15v3.75" />
  </svg>
);

export const iconMap: { [key: string]: React.ReactNode } = {
  // Quantitative Aptitude
  percentage: <CalculatorIcon className="w-full h-full" strokeWidth={1.5} />,
  "number-system": <FunnelIcon className="w-full h-full" strokeWidth={1.5} />,
  "profit-loss": <BoltIcon className="w-full h-full" strokeWidth={1.5} />,
  ratios: <ScaleIcon className="w-full h-full" strokeWidth={1.5} />,
  "work-time": <ClockIcon className="w-full h-full" strokeWidth={1.5} />,
  "speed-time-distance": <FireIcon className="w-full h-full" strokeWidth={1.5} />,
  geometry: <CubeIcon className="w-full h-full" strokeWidth={1.5} />,
  "area-shapes": <CubeIcon className="w-full h-full" strokeWidth={1.5} />,
  equations: <FunnelIcon className="w-full h-full" strokeWidth={1.5} />,
  ages: <UserGroupIcon className="w-full h-full" strokeWidth={1.5} />,
  "clocks-calendar": <ClockIcon className="w-full h-full" strokeWidth={1.5} />,
  "series-progressions": <ChartBarIcon className="w-full h-full" strokeWidth={1.5} />,
  probability: <StarIcon className="w-full h-full" strokeWidth={1.5} />,
  pnc: <FunnelIcon className="w-full h-full" strokeWidth={1.5} />,
  allegations: <BeakerIcon className="w-full h-full" strokeWidth={1.5} />,
  divisibility: <CalculatorIcon className="w-full h-full" strokeWidth={1.5} />,
  "decimal-fractions": <CalculatorIcon className="w-full h-full" strokeWidth={1.5} />,
  averages: <CalculatorIcon className="w-full h-full" strokeWidth={1.5} />,

  // Reasoning
  "arrangements-series": <ChartBarIcon className="w-full h-full" strokeWidth={1.5} />,
  "blood-relations": <UserGroupIcon className="w-full h-full" strokeWidth={1.5} />,
  "coding-decoding": <LockClosedIcon className="w-full h-full" strokeWidth={1.5} />,
  "odd-man-out": <XMarkIcon className="w-full h-full" strokeWidth={1.5} />,
  directions: <MapIcon className="w-full h-full" strokeWidth={1.5} />,
  "statement-conclusion": <ChatBubbleLeftIcon className="w-full h-full" strokeWidth={1.5} />,
  "seating-easy": <UsersIcon className="w-full h-full" strokeWidth={1.5} />,
  analogy: <LinkIcon className="w-full h-full" strokeWidth={1.5} />,
  "math-operations": <PlusIcon className="w-full h-full" strokeWidth={1.5} />,
  "symbols-notations": <SparklesIcon className="w-full h-full" strokeWidth={1.5} />,
  "data-sufficiency": <ChartBarIcon className="w-full h-full" strokeWidth={1.5} />,
  "meaningful-word": <SparklesIcon className="w-full h-full" strokeWidth={1.5} />,
  "number-series": <ChartBarIcon className="w-full h-full" strokeWidth={1.5} />,
  "reasoning-general": <LightBulbIcon className="w-full h-full" strokeWidth={1.5} />,

  // Verbal Ability
  "error-spotting": <PencilIcon className="w-full h-full" strokeWidth={1.5} />,
  "fill-in-blanks": <BookOpenIcon className="w-full h-full" strokeWidth={1.5} />,
  synonyms: <ArrowPathIcon className="w-full h-full" strokeWidth={1.5} />,
  antonyms: <ArrowsRightLeftIcon className="w-full h-full" strokeWidth={1.5} />,
  "sentence-rearrangement": <ArrowsUpDownIcon className="w-full h-full" strokeWidth={1.5} />,
  "sentence-improvement": <CheckCircleIcon className="w-full h-full" strokeWidth={1.5} />,
  "reading-comprehension": <BookOpenIcon className="w-full h-full" strokeWidth={1.5} />,
  "idioms-phrases": <ChatBubbleLeftIcon className="w-full h-full" strokeWidth={1.5} />,
  "one-word-substitution": <SparklesIcon className="w-full h-full" strokeWidth={1.5} />,
  "cloze-test": <BookOpenIcon className="w-full h-full" strokeWidth={1.5} />,
};

export const getIconComponent = (iconKey: string): React.ReactNode => {
  return iconMap[iconKey] || <QuestionMarkCircleIcon className="w-full h-full" strokeWidth={1.5} />;
};
