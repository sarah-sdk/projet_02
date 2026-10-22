import type { ChartData, ChartOptions } from "chart.js";
import type { Country } from "../models/Country";

function buildCountryEvolutionChart(country: Country): {
  evolutionData: ChartData<"line">;
  evolutionOptions: ChartOptions<"line">;
} {
  const evolutionData = {
    labels: country.participations.map((p) => p.year.toString()),
    datasets: [
      {
        label: "Nombre de médailles",
        data: country.participations.map((p) => p.medalsCount),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const evolutionOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return {
    evolutionData,
    evolutionOptions,
  };
}

export { buildCountryEvolutionChart };
