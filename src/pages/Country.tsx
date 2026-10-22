import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import type { Country } from "../models/Country";
import { useCountry } from "../hooks/useCountry";
import StatCard from "../components/StatCard";
import { calculateTotalMedals } from "../utils/calculateTotalMedals";
import { calculateTotalParticipations } from "../utils/calculateTotalParticipations";
import { calculateTotalAthletes } from "../utils/calculateTotalAthletes";
import { buildCountryEvolutionChart } from "../utils/buildCountryEvolutionChart";

export default function Country() {
  const { id } = useParams();
  const country = useCountry(id);

  if (!country) {
    return <div>Pays introuvable</div>;
  }

  const totalMedals = calculateTotalMedals(country);
  const totalAthletes = calculateTotalAthletes(country);
  const totalParticipations = calculateTotalParticipations(country);

  const { evolutionData, evolutionOptions } =
    buildCountryEvolutionChart(country);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{country.name}</h1>

        <div className="mb-2">
          <StatCard
            title="Participations"
            stat={totalParticipations}
            color="blue"
            textAlign={null}
          />
          <StatCard
            title="Total médailles"
            stat={totalMedals}
            color="yellow"
            textAlign={null}
          />
          <StatCard
            title="Total athlètes"
            stat={totalAthletes}
            color="green"
            textAlign={null}
          />
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <div style={{ height: "400px" }}>
            <Line data={evolutionData} options={evolutionOptions} />
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <p>Données des 5 dernières éditions des Jeux Olympiques</p>
        </div>
      </div>
    </div>
  );
}
