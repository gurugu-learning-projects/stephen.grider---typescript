"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var _a;
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // If collection is an array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        _a = [
                            this.collection[j + 1],
                            this.collection[j],
                        ], this.collection[j] = _a[0], this.collection[j + 1] = _a[1];
                    }
                }
                // If collection is a string, do this logic instead:
                // ~~~logic to compare and swap charaters in a string
                if (typeof this.collection === "string") {
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
