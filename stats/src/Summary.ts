import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarger {
  print(report: string): void;
}
