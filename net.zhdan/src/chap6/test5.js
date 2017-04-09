function Ninja() {}

var ninja = new Ninja();

Ninja.prototype.swingSword = function () {
    return this.swung;
};

console.log(typeof ninja == "object");
console.log(ninja instanceof Ninja);
console.log(ninja.constructor == Ninja);