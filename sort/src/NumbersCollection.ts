export class NumbersCollection {
  constructor(public data: number[]) {}

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): boolean {
    [this.data[leftIndex], this.data[rightIndex]] = [
      this.data[rightIndex],
      this.data[leftIndex],
    ];
  }
}
