// ===== number ===== //
// + 
// - * / % ** 
// ( )
// ++i / i++
// --i / i--

// += *= /= %= **=

let number = 10;
number *= 10; // number = number * 10
console.log(number);

let i = 0;
console.log(i++);
console.log(++i);

// Math

console.log(Math.abs(-3));
console.log(Math.abs(3));

// Math.abs
// Написать функцию, которая вычитает из большего числа меньшее и возвразает результат

function minus(a, b) {
    return Math.abs(a - b);
}

console.log(minus(3, 10));

// Math.max
// Написать функцию, которая возвращает наибольшее число из переданных

// ... spread-оператор
function maxValue(...params) {
    return Math.max(...params);
}

console.log(maxValue(10, 3, 7));


// Math.min
console.log(Math.min(3, 9, 0, 1));


// Math.random
console.log(Math.floor(Math.random() * 10 + 1)); // 1 ... 10 вкл

console.log(Math.floor(3.999)); // Math.floor - в меньшую
console.log(Math.ceil(3.0001)); // Math.ceil - в большую
console.log(Math.round(3.5)); // Math.round - по правилам математики

let paddingRight = "108.5px";

console.log(Number(paddingRight)); // NaN
console.log(parseInt(paddingRight)); // 108
console.log(parseFloat(paddingRight)); // 108.5


let value = 10.54353453
console.log(value.toFixed(3)); // "10.544"

console.log(0.1 + 0.2 === 0.3);



console.log(0.1 + 0.2);
console.log(0.3);

console.log(10 / 3);

console.log(0.1 + 0.2 - 0.3);









