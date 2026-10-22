import type { Country } from "../models/Country";
import type { Participation } from "../models/Participation";

function calculateTotalAthletes(country: Country): number {
  return country.participations.reduce(
    (sum: number, p: Participation) => sum + p.athleteCount,
    0,
  );
}

export { calculateTotalAthletes };
