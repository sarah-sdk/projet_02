import type { Country } from "../models/Country";
import { useOlympicsData } from "./useOlympicsData";

function useCountry(id: string | undefined): {
  country: Country | undefined;
  isLoading: boolean;
} {
  const { data, isLoading } = useOlympicsData();

  const country = data.find((c: Country) => c.id === Number(id));

  return { country, isLoading };
}

export { useCountry };
