var outerValue = 'ninja';
var later;

function outerFunction() {
    var innerValue = 'samurai';

    function innerFunction(paramValue) {
        console.log(outerValue + ' - outer val in inner function');
        console.log(innerValue + ' - inner val in inner');
        console.log(paramValue + ' - param in inner');
        console.log(tooLate + ' - in inner func');
    }
    later = innerFunction;
}

console.log(tooLate + ' - invocation from global context');

var tooLate = 'ronin';

outerFunction();
later('wakizashi');
