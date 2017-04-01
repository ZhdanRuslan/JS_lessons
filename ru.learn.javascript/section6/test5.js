/**
 * Created by admin on 01.04.2017.
 */

function printNumbersInterval() {
    var i = 1;
    var timerId = setInterval(function() {
        console.log(i);
        if (i == 20) clearInterval(timerId);
        i++;
    }, 100);
}

printNumbersInterval();
