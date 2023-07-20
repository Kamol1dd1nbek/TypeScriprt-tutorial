const firstname:string = "Sarvar"; // string
let x: number = 9; // number

// firstname = 9; // wrong

const isMarried: boolean = false; // boolean

const num: null = null; // null
const a: undefined = undefined; // undefined

// arrays

let colors: string[] = ["yellow", "red"];
// colors = ["sariq", 1, 2]; // wrong, only string

const numbers: number[] = [1, 2, 3, 4]; // only numbers

// any

let smth: any = 1;
smth = "qwer";
smth = ["blue", 1];
console.log(smth);


// functions

// void function dan hech qanday ma'lumot qaytmaydi

function logger(a: number | string): void{
    if (typeof a == "number") console.log(a.toFixed());
    else if (typeof a == "string") console.log(a.toLowerCase());
}
// type
// type CarType = {
//     name: string;
//     year: number;
// }

type StrinOrNumber = string | number;

// const ds: StrinOrNumber = false; // wrong

interface ICar {
    name: string;
    year?: number;
}

interface IBmw extends ICar {
    color: string;
    extraBallons: boolean;
}

type CarType = {
    name: string;
    year?: number;
}

type BmwType = CarType & {
    color: string;
    extraBallons: boolean;
}

// year is not required
const logCar = (car: ICar): string => {
    return `Car name: ${car.name}, year: ${car.year}`;
}

// console.log(logCar({name: "BMW", year: 2017}));

interface IPoint {
    x: number;
    y: number;
}

interface I3DPoint extends IPoint {
    z: number;
}

// as

function logPoint(point: IPoint): void {
    const d3: I3DPoint = point as I3DPoint;
}

const canvas = document.getElementById("canvas") as HTMLCanvasElement;


// ============== Project==========

// To TypeScript

// {
//     "name": "BMW",
//     "color": "red",
//     "isBallon": false,
//     "speed": {
//         "max": 330,
//         "min": 100
//     },
//     "price": {
//         "total": "20.000",
//         "credit": "100",
//         "discount": 10
//     }
// }

// Answer

interface ICar {
    name: string;
    color: string;
    isBallon: boolean;
    speed: ISpeed;
    price: IPrice
}

interface ISpeed {
    max: number;
    min: number;
}

interface IPrice {
    total: string;
    credit: string;
    discount: number;
}

// literal type

let car: string = "bmw";
car = "mers";

// literal car

let Lcar: "mers";
Lcar = "mers";

// --
type actionType = "show" | "hide";

function logger2(action: actionType): 1 | -1 {
    switch (action) {
        case "hide":
            return 1;
        case "show":
            return -1;
    }
}

console.log(car);

// enum

enum Dictionary  {
    Uz = 6,
    Ru,
    En
}

const runEnum = () => {
    return 2;
}

enum Decision {
    yes = 1,
    no = runEnum()
}

const uzbIndex = Dictionary.Uz;
const uzb = Dictionary[uzbIndex];
console.log(uzb);

enum Numbers {
    One,
    Two,
    Three,
    Four
}

function getUzbNumber(number: Numbers) {
    switch (number) {
        case Numbers.One:
            return "bir";
        case Numbers.Two:
            return "ikki";
        case Numbers.Three:
            return "uch";
        case Numbers.Four:
            return "tort";
        default: 
        const a: never = number;
    }
}

// tupple

const array2: [number, number, string] = [1, 2, "hi"];

array2.push(3);
// console.log(array2[3]); // wrong

// generics

function loggerTime<T>(number: T): T {
    console.log(new Date());  
    return number;
}
loggerTime<number>(2);

function loggerDate(number: number): number {
    console.log(new Date());
    return number
}

interface ICarim {
    name: string;
    color: string;
    onSpeed: <T, G>(data: T) => G;
}

const carim = {name: "Damas", color: "white"}

const myCar =  loggerTime<ICarim>(carim);

// ---

function loggerTime2<T>(data: T): T {
    if (typeof data == "string") {
        data.toLowerCase();
    } else if (typeof data == "number") {
        data.toFixed();
    }
    return data;
}

//  ---

// class Car<T> {
//         data: T;
// }

// const a = new Car<numbre>();

interface ImyCar {
    name: string;
}

function loggerci<T extends ImyCar>(data: T): T {
    return data;
}