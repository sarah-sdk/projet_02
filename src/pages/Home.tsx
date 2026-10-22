import { Pie } from "react-chartjs-2";
import type { Country } from "../models/Country";
import { useOlympicsData } from "../hooks/useOlympicsData";
import { calculateTotalMedals } from "../utils/calculateTotalMedals";
import { calculateTotalGamesEditions } from "../utils/calculateTotalGamesEditions";
import StatCard from "../components/StatCard";

export default function Home() {
  const olympicsData = useOlympicsData();

  const totalParticipatingCountries = olympicsData ? olympicsData.length : 0;
  const totalGamesEditions = calculateTotalGamesEditions(olympicsData);

  // Anti-pattern 7 — État de chargement dérivé des données au lieu d'un état dédié (loading/error).
  if (!olympicsData) {
    return <div>Chargement...</div>;
  }

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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Historique des Jeux Olympiques - TéléSport
        </h1>

        <div className="mb-8">
          <p className="text-lg">
            Bienvenue sur la page dédiée à l'historique des Jeux Olympiques.
            Explorez les performances des pays au fil des années.
          </p>
        </div>

        <div className="mb-2">
          <StatCard
            title="Pays participants"
            stat={totalParticipatingCountries}
            color="blue"
            textAlign="text-center"
          />
          <StatCard
            title="Éditions des JO"
            stat={totalGamesEditions}
            color="green"
            textAlign="text-center"
          />
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <div style={{ height: "400px" }}>
            <Pie data={chartData} options={chartOptions} />
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <p>Cliquez sur un pays pour voir ses détails</p>
        </div>
      </div>
    </div>
  );
}
