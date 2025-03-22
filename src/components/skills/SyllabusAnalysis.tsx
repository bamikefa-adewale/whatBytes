import { Card } from "@/components/ui/card";
import React from "react";
import { syllabusData } from "../../constants/syllabusData";

export const SyllabusAnalysis = () => {
  const colorMap: Record<string, string> = {
    blue: "text-blue-500",
    orange: "text-orange-500",
    red: "text-red-500",
    green: "text-green-500",
  };

  return (
    <Card>
      <div className="p-4">
        <h2 className="text-lg font-medium mb-4">Syllabus Wise Analysis</h2>
        <div className="space-y-6">
          {syllabusData.map(({ id, topic, percentage, color }) => (
            <div key={id} className="py-2">
              <span className="text-sm md:text-base">{topic}</span>

              <div className="flex items-center justify-between">
                {/* Progress Bar Container */}
                <div className="flex-1 h-4 bg-gray-200 rounded-full mt-1 overflow-hidden relative">
                  {/* Progress Bar */}
                  <div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: `${color}`,
                    }}
                  ></div>
                </div>
                {/* Percentage Text with Dynamic Color */}
                <div
                  className={`w-20 flex items-center justify-end ${colorMap[color]} text-xs font-medium`}
                >
                  {percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
