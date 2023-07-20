"use strict";
const firstname = "Sarvar"; // string
let x = 9; // number
// firstname = 9; // wrong
const isMarried = false; // boolean
const num = null; // null
const a = undefined; // undefined
// arrays
let colors = ["yellow", "red"];
// colors = ["sariq", 1, 2]; // wrong, only string
const numbers = [1, 2, 3, 4]; // only numbers
// any
let smth = 1;
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
const logCar = (car) => {
    return `Car name: ${car.name}, year: ${car.year}`;
};
// as
function logPoint(point) {
    const d3 = point;
}
const canvas = document.getElementById("canvas");
// literal type
let car = "bmw";
car = "mers";
// literal car
let Lcar;
Lcar = "mers";
function logger2(action) {
    switch (action) {
        case "hide":
            return 1;
        case "show":
            return -1;
    }
}
console.log(car);
// enum
var Dictionary;
(function (Dictionary) {
    Dictionary[Dictionary["Uz"] = 6] = "Uz";
    Dictionary[Dictionary["Ru"] = 7] = "Ru";
    Dictionary[Dictionary["En"] = 8] = "En";
})(Dictionary || (Dictionary = {}));
const runEnum = () => {
    return 2;
};
var Decision;
(function (Decision) {
    Decision[Decision["yes"] = 1] = "yes";
    Decision[Decision["no"] = runEnum()] = "no";
})(Decision || (Decision = {}));
const uzbIndex = Dictionary.Uz;
const uzb = Dictionary[uzbIndex];
console.log(uzb);
