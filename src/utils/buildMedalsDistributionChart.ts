import type { ChartData, ChartOptions } from "chart.js";
import type { Country } from "../models/Country";
import { calculateTotalMedals } from "./calculateTotalMedals";

function buildMedalsDistributionChart(olympicsData: Country[]): {
  chartData: ChartData<"pie">;
  chartOptions: ChartOptions<"pie">;
} {
  const chartData = {
    labels: olympicsData.map((d: Country) => d.name),
    datasets: [
      {
        label: "Total des médailles",
        data: olympicsData.map((d: Country) => calculateTotalMedals(d)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "white",
        },
      },
    },
  };

  return {
    chartData,
    chartOptions,
  };
}

export { buildMedalsDistributionChart };
