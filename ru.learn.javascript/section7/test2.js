/**
 * Created by admin on 02.04.2017.
 */
/*Напишите конструктор User для создания объектов:

    С приватными свойствами имя firstName и фамилия surname.
    С сеттерами для этих свойств.
    С геттером getFullName(), который возвращает полное имя.
    Должен работать так
*/

function User() {
    var firstName;
    var surname;
    
    this.setFirstName = function (fName) {
        firstName = fName;
    }
    
    this.setSurname = function(sName){
        surname = sName;
    }
    
    this.getFullName = function () {
        return firstName + " " + surname;
    }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

console.log( user.getFullName() ); // Петя Иванов
