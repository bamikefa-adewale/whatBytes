"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ScoreContextType {
  scores: {
    rank: number;
    percentile: number;
    currentScore: number;
  };
  updateScores: (newScores: {
    rank: number;
    percentile: number;
    currentScore: number;
  }) => void;
}

const scoreValue = { rank: 1, percentile: 30, currentScore:  15 };
export const ScoreContext = createContext<ScoreContextType | undefined>(
  undefined
);

export const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [scores, setScores] = useState(scoreValue);

  // Load from localStorage on mount
  useEffect(() => {
    const storedScores = localStorage.getItem("scores");
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    }
  }, []);

  // Save to localStorage when scores change
  const updateScores = (newScores: {
    rank: number;
    percentile: number;
    currentScore: number;
  }) => {
    setScores(newScores);
    localStorage.setItem("scores", JSON.stringify(newScores));
  };

  return (
    <ScoreContext.Provider value={{ scores, updateScores }}>
      {children}
    </ScoreContext.Provider>
  );
};
