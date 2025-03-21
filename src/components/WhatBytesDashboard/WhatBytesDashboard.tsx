import React from "react";
import { SkillTestCard } from "../skills/SkillTestCard";
import { Statistics } from "../skills/Statistics";
import { ComparisonGraph } from "../skills/ComparisonGraph";
import { SyllabusAnalysis } from "../skills/SyllabusAnalysis";
import { QuestionAnalysis } from "../skills/QuestionAnalysis";

const WhatBytesDashboard = () => {
  return (
    <section className=" p-5">
      <h1 className="text-xl font-medium text-gray-800 mb-4">Skill Test</h1>
      <section className="flex lg:flex-row flex-col gap-10">
        <div className="space-y-6">
          <SkillTestCard />
          <Statistics />
          <ComparisonGraph />
        </div>
        <div className="space-y-4">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </section>
    </section>
  );
};

export default WhatBytesDashboard;
