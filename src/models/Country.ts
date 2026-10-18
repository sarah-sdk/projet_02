import type { Participation } from "./Participation";

export interface Country {
  id: number;
  name: string;
  participations: Participation[];
}
