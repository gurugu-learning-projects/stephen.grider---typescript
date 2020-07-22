import { MatchData, MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

let manUnitedWins = 0;

const teamWinsHome = (match: MatchData, teamName: string): boolean => {
  return match[1] === teamName && match[5] === MatchResult.HomeWin;
};

const teamWinsAway = (match: MatchData, teamName: string): boolean => {
  return match[2] === teamName && match[5] === MatchResult.AwayWin;
};

for (let match of reader.data) {
  if (teamWinsHome(match, "Man United") || teamWinsAway(match, "Man United")) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
