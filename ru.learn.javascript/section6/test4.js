/**
 * Created by admin on 01.04.2017.
 */
function sayHello () {
    alert("Hello");
}

alert("start");
var timeId = setInterval(sayHello, 500);
alert("finish main thread");

setTimeout(function () {
    clearInterval(timeId);
    alert("stop");
}, 5000);