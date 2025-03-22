"use client";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { ReactNode } from "react";
import { CalendarMinus2, SquareCheck, Trophy } from "lucide-react";
import { useScore } from "@/app/contexts/hooks/useScore";

export const Statistics = () => {
  const { scores } = useScore();

  interface StatItem {
    icon: ReactNode;
    value: number | string;
    label: string;
  }
  const stats: StatItem[] = [
    {
      icon: <Trophy className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />,
      value: scores.rank,
      label: "YOUR RANK",
    },
    {
      icon: (
        <CalendarMinus2 className="h-6 w-6 md:h-8 md:w-8 text-yellow-700" />
      ),
      value: `${scores.percentile}%`,
      label: "PERCENTILE",
    },
    {
      icon: (
        <SquareCheck className="h-6 w-6 md:h-8 md:w-8 bg-green-500 text-white" />
      ),
      value: scores.currentScore,
      label: " CORRECT ANSWERS",
    },
  ];

  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        <h2 className="text-lg font-medium mb-4">Quick Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border-r ">
              <div className="rounded-full bg-gray-100 p-5">{item.icon}</div>
              <div>
                <div className="text-xl md:text-2xl font-bold mb-2">
                  {item.value}
                </div>
                <div className="text-gray-500 text-xs md:text-sm">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
