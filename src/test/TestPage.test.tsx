import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TestPage from "@/pages/TestPage";

/* ---------------- MOCKS ---------------- */

// mock questions
vi.mock("@/data/questions", () => ({
  getQuestions: () => [
    {
      id: "q1",
      question: "What is 2 + 2?",
      options: ["1", "2", "4", "5"],
      correctAnswer: 2,
      explanation: "2 + 2 = 4",
    },
    {
      id: "q2",
      question: "What is 3 + 3?",
      options: ["3", "6", "7", "8"],
      correctAnswer: 1,
    },
  ],
}));

// mock topics
vi.mock("@/data/topics", () => ({
  topics: [{ id: "math", name: "Math Test" }],
}));

// mock bookmarks hook
vi.mock("@/hooks/use-bookmarks", () => ({
  useBookmarks: () => ({
    isBookmarked: () => false,
    toggleBookmark: vi.fn(),
  }),
}));

// mock calculator (UI only, no dialog logic)
vi.mock("@/components/ScientificCalculator", () => ({
  default: ({ trigger }: any) => <div>{trigger}</div>,
}));

/* ---------------- HELPERS ---------------- */

const renderTestPage = () =>
  render(
    <MemoryRouter initialEntries={["/test/math"]}>
      <Routes>
        <Route path="/test/:topicId" element={<TestPage />} />
        <Route path="/result" element={<div>Result Page</div>} />
      </Routes>
    </MemoryRouter>,
  );

/* ---------------- TESTS ---------------- */

describe("TestPage", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("renders test page with first question", () => {
    renderTestPage();

    expect(screen.getByText("Math Test")).toBeInTheDocument();
    expect(screen.getByText("What is 2 + 2?")).toBeInTheDocument();
  });

  it("selects an option and shows correct feedback", () => {
    renderTestPage();

    fireEvent.click(screen.getByText("C")); // option index 2
    expect(screen.getByText(/correct answer/i)).toBeInTheDocument();
  });

  it("moves to next question", () => {
    renderTestPage();

    fireEvent.click(screen.getByText("C"));
    fireEvent.click(screen.getByText(/next/i));

    expect(screen.getByText("What is 3 + 3?")).toBeInTheDocument();
  });

  it("shows submit button on last question", () => {
    renderTestPage();

    fireEvent.click(screen.getByText("C"));
    fireEvent.click(screen.getByText(/next/i));

    expect(screen.getByText(/submit test/i)).toBeInTheDocument();
  });

  it("navigates to result page on submit", () => {
    renderTestPage();

    fireEvent.click(screen.getByText("C"));
    fireEvent.click(screen.getByText(/next/i));
    fireEvent.click(screen.getByText("B"));
    fireEvent.click(screen.getByText(/submit test/i));

    expect(screen.getByText("Result Page")).toBeInTheDocument();
  });

  it("renders timer", () => {
    renderTestPage();

    expect(screen.getByText(/\d{2}:\d{2}/)).toBeInTheDocument();
  });
});
