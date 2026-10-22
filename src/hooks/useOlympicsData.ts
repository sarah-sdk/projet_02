import { useState } from "react";
import olympicsData from "../data/olympics.json";
import type { Country } from "../models/Country";

function useOlympicsData(): {
  data: Country[];
  isLoading: boolean;
} {
  const [data] = useState<Country[]>(olympicsData);
  const [isLoading] = useState(false);

  return { data, isLoading };
}

export { useOlympicsData };
