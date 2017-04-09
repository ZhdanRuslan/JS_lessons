function Ninja() {
    this.swung = true;
    this.swingSword = function () {
        return !this.swung;
    };
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function () {
    return this.swung;
};

console.log(ninja.swingSword());
