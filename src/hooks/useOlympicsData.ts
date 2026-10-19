import olympicsData from "../data/olympics.json";
import type { Country } from "../models/Country";

function useOlympicsData(): Country[] {
  return olympicsData;
}

export { useOlympicsData };
