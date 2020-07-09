"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection /* TODO: fix me! */) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var _a;
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    _a = [
                        this.collection[j + 1],
                        this.collection[j],
                    ], this.collection[j] = _a[0], this.collection[j + 1] = _a[1];
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
