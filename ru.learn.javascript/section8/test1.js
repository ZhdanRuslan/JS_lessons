/**
 * Created by admin on 02.04.2017.
 */

/*
Задание состоит из двух частей:

    Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head.

    То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

    После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.

*/

var head = {
    glasses: 1
};

var table = {
    pen: 3,
    __proto__ : head
};

var bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

var pockets = {
    money: 2000,
    __proto__ : bed
};

console.log(pockets.pen == 3);
console.log(bed.glasses == 1);
console.log(table.money == undefined);
