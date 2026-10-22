import { useNavigate, useParams } from "react-router-dom";
import type { Country } from "../models/Country";
import { useCountry } from "../hooks/useCountry";
import CountryChart from "../components/CountryChart";
import CountryCards from "../components/CountryCards";

export default function Country() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { country, isLoading } = useCountry(id);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (!country) {
    return <div>Pays introuvable</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mb-6 inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <span aria-hidden="true">←</span>
          Retour à l’accueil
        </button>
        <h1 className="text-4xl font-bold mb-8">{country.name}</h1>
        <CountryCards country={country} />
        <CountryChart country={country} />

        <div className="text-sm text-gray-400">
          <p>Données des 5 dernières éditions des Jeux Olympiques</p>
        </div>
      </div>
    </div>
  );
}
