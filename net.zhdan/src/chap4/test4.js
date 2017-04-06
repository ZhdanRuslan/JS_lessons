function addMethod(object, name, fn) {

    var old = object[name];

    object[name] = function () {

        if (fn.length == arguments.length)
            return fn.apply(this, arguments);
        else if (typeof old == 'function')
            return old.apply(this, arguments);
    };
}

var ninja = {};

addMethod(ninja, 'whatever', function () {
    console.log("Without args")
});
addMethod(ninja, 'whatever', function (a) {
    console.log("With one arg")
});
addMethod(ninja, 'whatever', function (a, b) {
    console.log("With two args")
});


ninja.whatever(5,9);
ninja.whatever();
ninja.whatever(1);