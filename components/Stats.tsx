"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "Sport Car", rentals: 17439, fill: "hsl(var(--chart-1))" },
  { category: "SUV", rentals: 9478, fill: "hsl(var(--chart-2))" },
  { category: "Coupe", rentals: 18197, fill: "hsl(var(--chart-3))" },
  { category: "Hatchback", rentals: 12510, fill: "hsl(var(--chart-4))" },
  { category: "MPV", rentals: 14406, fill: "hsl(var(--chart-5))" },
];

const chartConfig = {
  SportCar: { label: "Sport Car" },
  SUV: { label: "SUV" },
  Coupe: { label: "Coupe" },
  Hatchback: { label: "Hatchback" },
  MPV: { label: "MPV" },
} satisfies ChartConfig;

export function CarRentalChart() {
  const totalRentals = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.rentals, 0);
  }, []);

  return (
    <Card className="bg-white rounded-xl border-none shadow-md p-4">
      {/* Chart Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">
        <div className="lg:w-2/3 w-full">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Top 5 Car Rentals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="aspect-square max-h-[300px] lg:max-h-[350px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="rentals"
                  nameKey="category"
                  innerRadius={60}
                  outerRadius={100}
                  strokeWidth={2}
                  fill="#8884d8"
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-3xl font-bold text-gray-800"
                          >
                            {totalRentals.toLocaleString()}
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </div>

        {/* Legend Section */}
        <div className="lg:w-1/3 w-full flex flex-col gap-3 justify-center">
          {chartData.map((data) => (
            <div
              key={data.fill}
              className="flex items-center gap-2 text-sm lg:text-base"
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: data.fill }}
              ></div>
              <p className="text-gray-700 font-medium">{data.category}</p>
              <p className="text-gray-800 font-semibold ml-auto">
                {data.rentals.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
