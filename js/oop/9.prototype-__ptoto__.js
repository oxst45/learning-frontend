// * ===== __proto__ & prototype ===== * //

// __proto__ - из браузерного API
// prototype - из JS


// * __proto__
// 1. Что это?
// __proto__ - это объект (ссылка на prototype)
// 2. У кого есть __proto__ - у всех, кого можно создать с помощью new 


const age = 18; // new Number()
const text = 'string'; // new String()
const isAdmin = true; // new Boolean()

const man = []; // new Array()
const user = {}; // new Object()
const funcHello = function () { console.log('hello') }; // new Function()
class Music { }; // - это функция-конструктор => new Function() 


const test = null;
const test2 = undefined;
const bigNum = 154356345345423532453253n; // bigint


console.log(man.__proto__);
console.log(user.__proto__);
console.log(age.__proto__);
// console.log(test.__proto__); // TypeError
// console.log(test2.__proto__); // TypeError
console.log(bigNum.__proto__);


// 3. Чему равен __proto__ ?
console.log(man);
console.log(man.__proto__ === Array.prototype); // true


// * prototype
// 1. Что это?
// prototype - объект с методами
// 2. У кого есть prototype?
// prototype есть только у функций и у классов
// ! У стрелочных функций нету prototype, this, arguments, super

const arr = new Array();
console.log(arr.__proto__ === Array.prototype);
console.log(arr.prototype); // undefined
console.log(Array.prototype);


let num = new Number(100);
console.log(num.__proto__ === Number.prototype); // true
console.log(num.prototype); // undefined
console.log(Number.prototype);



let num1 = 10;
let num2 = 16;

console.log(num1.__proto__ === num2.__proto__); // true

function testFunction() {
    console.log('Test');
}
console.log(testFunction.__proto__ === Function.prototype); // true
console.log(testFunction.prototype);



class Player {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

console.log(Player.__proto__ === Function.prototype); // true
console.log(Player.prototype);


const pl1 = new Player();
console.log(pl1.__proto__ === Player.prototype);
console.log(pl1.prototype); // undefined



console.log(Array.__proto__ === Function.prototype); // true
console.log(Array.prototype);

// const testArr = [1, 3, 4];
const testArr = new Array(1, 3, 4);

console.log(testArr.__proto__ === Array.prototype);
console.log(testArr.prototype); // undefind


const funcTest = () => { console.log('Text') };
console.log(funcTest.__proto__ === Function.prototype);
console.log(funcTest.prototype); // undefined

// * extanded tasks * //




// Player - создан от Function
console.log(pl1.__proto__ === Player.prototype); // true
console.log(pl1.__proto__.__proto__ === Object.prototype); // true
console.log(pl1.__proto__.__proto__.__proto__); // null 

console.log(pl1.__proto__.constructor.__proto__ === Function.prototype); // true




// __proto__ объекта равен (по ссылке) prototype того класса, с помощью которого был создан
