import type { Country } from "../models/Country";
import { useData } from "./useData";

function useCountry(id: string | undefined): {
  country: Country | undefined;
  isLoading: boolean;
} {
  const { data, isLoading } = useData();

  const country = data.find((c: Country) => c.id === Number(id));

  return { country, isLoading };
}

export { useCountry };
