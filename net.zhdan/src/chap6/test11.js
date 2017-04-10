function MyArray() {}

MyArray.prototype = new Array();

var mine = new MyArray();

mine.push(1, 2, 3);

console.log(mine.length == 3);
console.log(mine instanceof Array);