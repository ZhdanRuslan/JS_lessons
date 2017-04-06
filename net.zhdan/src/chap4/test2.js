/**
 * Created by admin on 06.04.2017.
 */

function smallest(arr) {
    return Math.min.apply(Math, arr);
}

function biggest(arr) {
    return Math.max.apply(Math, arr);
}

console.log(smallest([3, 15, 17, 25, 1, -4]));
console.log(biggest([3, 15, 17, 25, 1, -4]));