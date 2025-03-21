"use client";
import { useScore } from "@/app/contexts/hooks/useScore";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import React from "react";
import { ComparisonChart } from "../ui/Comparison-graph";

export const ComparisonGraph = () => {
  const { scores } = useScore();

  return (
    <Card>
      <CardContent className="p-4 md:p-6]">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-medium">Comparison Graph</h2>
          <div className="bg-gray-100 p-2 rounded">
            <BarChart3 className="h-5 w-5 text-gray-500" />
          </div>
        </div>
        <div className="mb-6">
          <p className="text-gray-700 text-sm md:text-[23px]">
            <span className="font-semibold">
              You scored {scores.percentile}% percentile
            </span>{" "}
            which is lower than the average percentile 72% of all the engineers
            who took this assessment
          </p>
        </div>
        <div className="">
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 400 100" className="w-full h-full">
              <path
                d="M 50,80 L 100,70 L 150,50 L 200,20 L 250,40 L 300,90"
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
              />
              <circle cx="200" cy="20" r="4" fill="#6366f1" />
              <circle cx="150" cy="50" r="4" fill="#6366f1" />
              <circle cx="250" cy="40" r="4" fill="#6366f1" />
              <circle cx="100" cy="70" r="4" fill="#6366f1" />
              <circle cx="300" cy="90" r="4" fill="#6366f1" />
              <circle cx="50" cy="80" r="4" fill="#6366f1" />
            </svg>
          </div> */}
          <ComparisonChart />
        </div>
      </CardContent>
    </Card>
  );
};
