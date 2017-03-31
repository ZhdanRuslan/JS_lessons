/**
 * Created by admin on 31.03.2017.
 */
function sayHi() {
    alert( this.name );
}
sayHi.test = 5;
alert( sayHi.test );

var bound = sayHi.bind({
    name: "Вася"
});

alert( bound.test );
