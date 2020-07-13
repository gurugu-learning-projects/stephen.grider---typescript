"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        this.data =
            this.data.slice(0, leftIndex) +
                this.data.charAt(rightIndex) +
                this.data.charAt(leftIndex) +
                this.data.slice(rightIndex + 1);
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
