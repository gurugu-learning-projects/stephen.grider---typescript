import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

let manUnitedWins = 0;

const teamWinsHome = (match: string[], teamName: string): boolean => {
  return match[1] === teamName && match[5] === "H";
};

const teamWinsAway = (match: string[], teamName: string): boolean => {
  return match[2] === teamName && match[6] === "A";
};

for (let match of matches) {
  if (teamWinsHome(match, "Man United") && teamWinsAway(match, "Man United")) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
