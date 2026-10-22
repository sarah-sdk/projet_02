import { Line } from "react-chartjs-2";
import { buildCountryEvolutionChart } from "../utils/buildCountryEvolutionChart";
import type { Country } from "../models/Country";

export default function CountryChart({ country }: { country: Country }) {
  const { evolutionData, evolutionOptions } =
    buildCountryEvolutionChart(country);

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <div style={{ height: "400px" }}>
        <Line data={evolutionData} options={evolutionOptions} />
      </div>
    </div>
  );
}
