var firstname = "Sarvar"; // string
var x = 9; // number
// firstname = 9; // wrong
var isMarried = false; // boolean
var num = null; // null
var a = undefined; // undefined
// arrays
var colors = ["yellow", "red"];
// colors = ["sariq", 1, 2]; // wrong, only string
var numbers = [1, 2, 3, 4]; // only numbers
// any
var smth = 1;
smth = "qwer";
smth = ["blue", 1];
console.log(smth);
// functions
// void function dan hech qanday ma'lumot qaytmaydi
function logger(a) {
    if (typeof a == "number")
        console.log(a.toFixed());
    else if (typeof a == "string")
        console.log(a.toLowerCase());
}
// year is not required
var logCar = function (car) {
    return "Car name: ".concat(car.name, ", year: ").concat(car.year);
};
console.log(logCar({ name: "BMW", year: 2017 }));
