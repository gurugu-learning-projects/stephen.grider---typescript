import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  teamWins(place: string, match: MatchData): boolean {
    if (place === "home") {
      return match[1] === this.team && match[5] === MatchResult.HomeWin;
    } else {
      return match[2] === this.team && match[5] === MatchResult.AwayWin;
    }
  }

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (this.teamWins("home", match) || this.teamWins("away", match)) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
