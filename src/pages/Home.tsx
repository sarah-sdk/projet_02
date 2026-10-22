import { Pie } from "react-chartjs-2";
import { useOlympicsData } from "../hooks/useOlympicsData";
import { calculateTotalGamesEditions } from "../utils/calculateTotalGamesEditions";
import StatCard from "../components/StatCard";
import { buildMedalsDistributionChart } from "../utils/buildMedalsDistributionChart";
import { useNavigate } from "react-router-dom";
import type { ActiveElement, ChartEvent } from "chart.js";

export default function Home() {
  const navigate = useNavigate();
  const olympicsData = useOlympicsData();

  const totalParticipatingCountries = olympicsData.length;
  const totalGamesEditions = calculateTotalGamesEditions(olympicsData);

  const handleChartClick = (_event: ChartEvent, elements: ActiveElement[]) => {
    if (elements.length === 0) return;

    const country = olympicsData[elements[0].index];

    if (country) {
      navigate(`/country/${country.id}`);
    }
  };

  const { chartData, chartOptions } =
    buildMedalsDistributionChart(olympicsData);

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
            <Pie
              data={chartData}
              options={{
                ...chartOptions,
                onClick: handleChartClick,
              }}
            />
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <p>Cliquez sur un pays pour voir ses détails</p>
        </div>
      </div>
    </div>
  );
}
