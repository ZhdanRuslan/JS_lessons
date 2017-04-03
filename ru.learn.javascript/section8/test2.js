/**
 * Created by admin on 03.04.2017.
 */

Function.prototype.defer = function(ms){
    setTimeout(this, ms);
}

function f() {
    console.log( "привет" );
}

f.defer(1000); // в


function testFuncTwo() {
    console.log("Hello!")
}
testFuncTwo();
testFuncTwo.defer(5000);