function sum(a, b) {
    return a + b;
}

function curry(a) {
    return function (b) {
        return sum(a, b);
    };
}

var inc = curry(1);
console.log(inc(5));

var dec = curry(-1);
console.log(dec(3));

var plusFive = curry(5);
console.log(plusFive(5));