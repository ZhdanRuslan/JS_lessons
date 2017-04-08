function sum(a, b) {
    return a + b;
}

function sayTwoWords(word1, word2) {
    console.log(word1 + " " + word2);
}

function curry(func, a) {
    return function (b) {
        return func(a, b);
    };
}

var sayHelloTo = curry(sayTwoWords, "Hello");
sayHelloTo("Bob");
sayHelloTo("Marry");

var sayGoodbyeTo = curry(sayTwoWords, "Goodbye");
sayGoodbyeTo("Bob");
sayGoodbyeTo("Marry");

var minusThree  = curry(sum, -3);
console.log(minusThree(13));