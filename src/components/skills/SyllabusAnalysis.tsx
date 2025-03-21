import { Card } from "@/components/ui/card";
import React from "react";
import { syllabusData } from "../../constants/syllabusData";

export const SyllabusAnalysis = () => {
  return (
    <Card>
      <div className="p-4">
        <h2 className="text-lg font-medium mb-4">Syllabus Wise Analysis</h2>
        <div className="space-y-6">
          {syllabusData.map(({ id, topic, percentage, color }) => (
            <div key={id} className="py-2">
              <span className="text-sm md:text-base">{topic}</span>
              <div className="flex items-center gap-10 justify-between mb-1">
                <div
                  className={`h-4 w-full bg-${color}-100 rounded-full overflow-hidden`}
                >
                  <div
                    className={`h-full bg-${color}-500 rounded-full`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className={`text-${color}-500 text-sm md:text-base`}>
                  {percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
