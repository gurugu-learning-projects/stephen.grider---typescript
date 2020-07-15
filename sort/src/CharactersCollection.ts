import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    this.data =
      this.data.slice(0, leftIndex) +
      this.data.charAt(rightIndex) +
      this.data.charAt(leftIndex) +
      this.data.slice(rightIndex + 1);
  }
}
