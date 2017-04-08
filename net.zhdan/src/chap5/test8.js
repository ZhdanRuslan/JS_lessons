Function.prototype.memoized = function (key) {
    this._values = this._values || {};
    return this._values[key] !== undefined ?
        this._values[key] :
        this._values[key] = this.apply(this, arguments);
};

Function.prototype.memoize = function () {
    var fn = this;
    return function () {
        return fn.memoized.apply(fn, arguments);
    };
};

// function isPrime(num) {
//     var prime = num != 1;
//     for (var i = 2; i < num; i++) {
//         if (num % i == 0) {
//             prime = false;
//             break;
//         }
//     }
//     return prime;
// }

var isPrime = (function (num) {
    var prime = num != 1;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}).memoize();

console.log(isPrime(15));
