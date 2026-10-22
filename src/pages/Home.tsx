import { useOlympicsData } from "../hooks/useOlympicsData";
import MedalChart from "../components/MedalChart";
import GeneralStatCards from "../components/GeneralStatCards";

export default function Home() {
  const { data, isLoading } = useOlympicsData();

  if (isLoading) {
    return <div>Chargement...</div>;
  }

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

        <GeneralStatCards olympicsData={data} />
        <MedalChart olympicsData={data} />

        <div className="text-sm text-gray-400">
          <p>Cliquez sur un pays pour voir ses détails</p>
        </div>
      </div>
    </div>
  );
}
