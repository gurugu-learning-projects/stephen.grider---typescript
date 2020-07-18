"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map(function (row) {
    return row.split(",");
});
var homeWin = "H";
var awayWin = "A";
var draw = "D";
var manUnitedWins = 0;
var teamWinsHome = function (match, teamName) {
    return match[1] === teamName && match[5] === homeWin;
};
var teamWinsAway = function (match, teamName) {
    return match[2] === teamName && match[5] === awayWin;
};
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (teamWinsHome(match, "Man United") || teamWinsAway(match, "Man United")) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
