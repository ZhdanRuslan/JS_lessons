function Ninja() {
    this.swung = true;
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function () {
    return this.swung;
};

console.log(ninja.swingSword() + " method exists in object");
