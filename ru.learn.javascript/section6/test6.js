/**
 * Created by admin on 01.04.2017.
 */
var i = 1;

var timerId = setTimeout(function tick() {
    console.log(i);

    /*recursive method invocation*/
    timerId = setTimeout(tick, 100);
    
    if (i == 20) clearTimeout(timerId);
    i++;
}, 100);