import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="mb-6 inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <Link to="/">← Retour à l'accueil</Link>
      </button>
      <h1 className="text-4xl font-bold text-blue-400 text-center">404</h1>
      <h2 className="text-xl font-bold text-slate-50 text-center mb-2">
        Oups, cette page a disparu !
      </h2>

      <div>
        <p className="text-center text-slate-300">
          Impossible de trouver cette page ou ce pays. <br />
          Même les champions peuvent perdre leur chemin.
        </p>
      </div>
    </div>
  );
}
