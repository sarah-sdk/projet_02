import type { ChartEvent, ActiveElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { buildMedalsDistributionChart } from "../utils/buildMedalsDistributionChart";
import type { Country } from "../models/Country";

export default function MedalChart({
  olympicsData,
}: {
  olympicsData: Country[];
}) {
  const navigate = useNavigate();

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
  );
}
