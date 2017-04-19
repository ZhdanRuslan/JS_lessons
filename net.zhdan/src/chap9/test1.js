console.log(eval("5 + 5") === 10);

/*variable not returned*/
console.log(eval("var n = 5") === 10);

/*but var was created*/
console.log(n === 5);