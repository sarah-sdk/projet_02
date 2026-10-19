import type { Country } from "../models/Country";

function calculateTotalMedals(country: Country): number {
  return country.participations.reduce(
    (sum: number, p) => sum + p.medalsCount,
    0,
  );
}

export { calculateTotalMedals };
