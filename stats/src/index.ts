import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

const teamWinsHome = (match: string[], teamName: string): boolean => {
  return match[1] === teamName && match[5] === MatchResult.HomeWin;
};

const teamWinsAway = (match: string[], teamName: string): boolean => {
  return match[2] === teamName && match[5] === MatchResult.AwayWin;
};

for (let match of matches) {
  if (teamWinsHome(match, "Man United") || teamWinsAway(match, "Man United")) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
