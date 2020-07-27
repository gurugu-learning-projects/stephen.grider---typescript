import { MatchReader } from "./MatchReader";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Man United won ${manUnitedWins} games`);
