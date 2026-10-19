import type { Country } from "../models/Country";
import useOlympicsData from "./useOlympicsData";

export default function useCountry(
  id: string | undefined,
): Country | undefined {
  const olympicsData = useOlympicsData();

  const country = olympicsData.find((c: Country) => c.id === Number(id));

  return country;
}
