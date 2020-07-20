"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var manUnitedWins = 0;
var teamWinsHome = function (match, teamName) {
    return match[1] === teamName && match[5] === MatchResult.HomeWin;
};
var teamWinsAway = function (match, teamName) {
    return match[2] === teamName && match[5] === MatchResult.AwayWin;
};
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (teamWinsHome(match, "Man United") || teamWinsAway(match, "Man United")) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
