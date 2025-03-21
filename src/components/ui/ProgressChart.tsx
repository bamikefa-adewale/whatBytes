"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import Image from "next/image";

const chartData = [
  { browser: "safari", visitors: 200, fill: "#2563EB" }, // 🔵 bg-blue-600 color code
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "#2563EB", // Ensure consistent blue color
  },
} satisfies ChartConfig;
const Shot_Arrow =
  "https://res.cloudinary.com/dbrub0d6r/image/upload/v1742507161/Arrow_vyskgk.png";
export const ProgressChart = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={250}
        innerRadius={80} // Reduced for thicker bars
        outerRadius={130} // Increased for boldness
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-gray-200 last:fill-background"
          polarRadius={[86, 74]}
        />
        {/* ✅ Set fill to dynamically use the color from chartData */}
        <RadialBar
          dataKey="visitors"
          fill={chartData[0].fill}
          background
          cornerRadius={10}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <foreignObject
                    x={viewBox.cx - 15} 
                    y={viewBox.cy - 15} 
                    width="40"
                    height="40"
                  >
                    <Image
                      src={Shot_Arrow}
                      alt="shot arrow"
                      width={40}
                      height={40}
                      className="mx-auto "
                    />
                  </foreignObject>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
};
