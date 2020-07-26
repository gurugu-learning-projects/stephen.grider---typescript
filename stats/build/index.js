"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
var teamWinsHome = function (match, teamName) {
    return match[1] === teamName && match[5] === MatchResult_1.MatchResult.HomeWin;
};
var teamWinsAway = function (match, teamName) {
    return match[2] === teamName && match[5] === MatchResult_1.MatchResult.AwayWin;
};
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (teamWinsHome(match, "Man United") || teamWinsAway(match, "Man United")) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
