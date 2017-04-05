/**
 * Created by admin on 05.04.2017.
 */
var ninja = {
    chirp: function (n) {
        return n > 1 ? ninja.chirp(n - 1) + "-chirp" : "chirp";
    }
};

console.log(ninja.chirp(3));