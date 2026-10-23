import type { Country } from "../models/Country";
import { calculateTotalGamesEditions } from "../utils/calculateTotalGamesEditions";
import StatCard from "./StatCard";

export default function GeneralStatCards({
  olympicsData,
}: {
  olympicsData: Country[];
}) {
  const totalParticipatingCountries = olympicsData.length;
  const totalGamesEditions = calculateTotalGamesEditions(olympicsData);

  return (
    <div className="mb-2 md:grid grid-cols-2 gap-4">
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
  );
}
