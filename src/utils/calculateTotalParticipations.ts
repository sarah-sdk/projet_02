import type { Country } from "../models/Country";

function calculateTotalParticipations(country: Country): number {
  return country.participations.length;
}

export { calculateTotalParticipations };
