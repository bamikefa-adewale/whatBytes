"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "0", desktop: 186, mobile: 80 },
  { month: "25", desktop: 305, mobile: 200 },
  { month: "50", desktop: 237, mobile: 120 },
  { month: "75", desktop: 73, mobile: 190 },
  { month: "100", desktop: 209, mobile: 130 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "blue",
  },
  mobile: {
    label: "Mobile",
    color: "green",
  },
} satisfies ChartConfig;

export function ComparisonChart() {
  return (
    <div>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </div>
  );
}
