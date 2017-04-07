var outerValue = 'ninja';

var later;

function outerFunction() {
    var innerValue = 'samurai';

    function innerFunction() {
        console.log(outerValue);
        console.log(innerValue)
    }

    later = innerFunction;
}

outerFunction();

later();
