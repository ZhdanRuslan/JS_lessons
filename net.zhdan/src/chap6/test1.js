function Ninja() {}

Ninja.prototype.swingSword = function () {
    return true;
};

/*Create with usual func invocation*/
var ninja1 = Ninja();
console.log(ninja1);

/*Create obj with new*/
var ninja2 = new Ninja();
console.log(ninja2);
console.log(ninja2.swingSword());
