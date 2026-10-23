import type { Country } from "../models/Country";
import { calculateTotalAthletes } from "../utils/calculateTotalAthletes";
import { calculateTotalMedals } from "../utils/calculateTotalMedals";
import { calculateTotalParticipations } from "../utils/calculateTotalParticipations";
import StatCard from "./StatCard";

export default function CountryCards({ country }: { country: Country }) {
  const totalMedals = calculateTotalMedals(country);
  const totalAthletes = calculateTotalAthletes(country);
  const totalParticipations = calculateTotalParticipations(country);

  return (
    <div className="mb-2 md:grid grid-cols-3 gap-4">
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
  );
}
