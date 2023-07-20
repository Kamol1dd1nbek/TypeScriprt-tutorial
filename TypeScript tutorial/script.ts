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
type CarType = {
    name: string;
    year: number;
}

type StrinOrNumber = string | number;

// const ds: StrinOrNumber = false; // wrong



// year is not required
const logCar = (car: CarType): string => {
    return `Car name: ${car.name}, year: ${car.year}`;
}

console.log(logCar({name: "BMW", year: 2017}));



