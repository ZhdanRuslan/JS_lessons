/**
 * Created by admin on 06.04.2017.
 */
function merge(root) {
    for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            root[key] = arguments[i] [key];
        }
    }
    return root;
}

var merged = merge(
    {name: "Ruslan"},
    {city: "Kyiv"});

console.log(merged.name == "Ruslan");
console.log(merged.city == "Kyiv");