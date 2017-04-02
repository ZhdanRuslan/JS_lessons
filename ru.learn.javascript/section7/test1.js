/**
 * Created by admin on 02.04.2017.
 */

'use strict';
function CoffeeMachine(power) {

    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;
    var timerId;
    var self = this;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.run = function() {
        timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function () {
        clearTimeout(timerId)
    };
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 20;

coffeeMachine.run();
// coffeeMachine.stop();
