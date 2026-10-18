import olympicsData from "../data/olympics.json";
import type { Country } from "../models/Country";

export default function useOlympicsData(): Country[] {
  return olympicsData;
}
