import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbers = new NumbersCollection([10, 3, -5, 0, -29]);
// const sorter = new Sorter(numbers);
// sorter.sort();
// console.log(numbers.data);

const chars = new CharactersCollection("XlZkyjDSFjkljsdfAA");
const sorter = new Sorter(chars);
sorter.sort();
console.log(chars.data);
