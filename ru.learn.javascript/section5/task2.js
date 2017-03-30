/**
 * Created by admin on 30.03.2017.
 */

function StaticExample() {
    StaticExample.count++;
}

StaticExample.count = 0;

StaticExample.showCount = function() {
    alert( this.count );
}

new StaticExample();
new StaticExample();

StaticExample.showCount();