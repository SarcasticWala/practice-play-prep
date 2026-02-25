import { useState, useEffect } from 'react';
import { Question } from '@/types/quiz';

export interface Bookmark {
  question: Question;
  topicId: string;
  topicName: string;
  addedAt: string;
}

const STORAGE_KEY = 'tcs-nqt-bookmarks';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (question: Question, topicId: string, topicName: string) => {
    setBookmarks(prev => {
      const exists = prev.find(b => b.question.id === question.id);
      if (exists) {
        return prev.filter(b => b.question.id !== question.id);
      }
      return [...prev, { question, topicId, topicName, addedAt: new Date().toISOString() }];
    });
  };

  const isBookmarked = (questionId: string) => {
    return bookmarks.some(b => b.question.id === questionId);
  };

  const clearBookmarks = () => {
    setBookmarks([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { bookmarks, toggleBookmark, isBookmarked, clearBookmarks };
}
