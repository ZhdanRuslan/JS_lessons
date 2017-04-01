/**
 * Created by admin on 01.04.2017.
 */

function formatDate(date) {
    if (typeof date == 'number') {
        date = new Date(date * 1000);
    } else if (typeof date == 'string') {
        date = new Date(date);
    } else if (Array.isArray(date)) {
        date = new Date(date[0], date[1], date[2]);
    }

    return date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});
}

alert(formatDate('2011-10-02'));
alert(formatDate(1234567890));
alert(formatDate([2014, 0, 1]));
alert(formatDate(new Date(2014, 0, 1)));