import type { Country } from "../models/Country";

function calculateTotalGamesEditions(countries: Country[]): number {
  const editions = countries.flatMap((country) =>
    country.participations.map((p) => p.year),
  );

  return new Set(editions).size;
}

export { calculateTotalGamesEditions };
