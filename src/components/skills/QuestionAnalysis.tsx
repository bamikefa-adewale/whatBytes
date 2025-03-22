"use client";
import React from "react";
import { useScore } from "@/contexts/hooks/useScore";
import { ProgressChart } from "../ui/ProgressChart";

export const QuestionAnalysis = () => {
  const { scores } = useScore();

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-medium mb-4 flex justify-between">
        <span className="text-2xl font-medium">Question Analysis</span>
        <span className="text-blue-600">10/15</span>
      </h2>
      <div className="">
        <p className="text-gray-700 text-sm md:text-[23px]">
          <span className="font-semibold">
            You scored {scores?.currentScore} question correct out of 15.
          </span>{" "}
          However it still needs some improvements
        </p>
      </div>
      <div className=" mt-4">
        <ProgressChart />
      </div>
    </div>
  );
};
