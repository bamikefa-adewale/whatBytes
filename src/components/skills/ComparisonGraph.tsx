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
          <div className="bg-gray-100 rounded-full p-5">
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
         
          <ComparisonChart />
        </div>
      </CardContent>
    </Card>
  );
};
