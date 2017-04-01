/**
 * Created by admin on 01.04.2017.
 */

var timers = {};

function timingDecorator(f, timer) {
    return function() {
        var start = performance.now();

        var result = f.apply(this, arguments); // (*)

        if (!timers[timer]) timers[timer] = 0;
        timers[timer] += performance.now() - start;

        return result;
    }
}

var fibonacci = function f(n) {
    return (n > 2) ? f(n - 1) + f(n - 2) : 1;
}

fibonacci = timingDecorator(fibonacci, "fibo");

alert( fibonacci(10) );
alert( fibonacci(20) );

alert( timers.fibo + 'мс' );

