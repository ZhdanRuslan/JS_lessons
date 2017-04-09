function Ninja() {}

var ninja = new Ninja();

var ninja2 = new ninja.constructor();

console.log(ninja2 instanceof Ninja);
console.log(ninja2 !== ninja);
