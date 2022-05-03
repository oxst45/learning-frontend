// Задача 1:
// Написать программу, в которой 3 ошибки:
// 1 - SyntaxError - неверный синтаксис, пропущенная скобка, неверно записаны ключевые слова, используется несуществующий оператор
// Программа не заработает вообще

// 2 - ReferenceError - обращаемся неверно к переменной или несуществующей переменной, или вызываем несуществую функцию
// Программа выполняется до тех пор, пока не возникнет ошибка

// 3 - TypeError
// Обращаемся к типу number, как к функции
// Программа выполняется до тех пор, пока не возникнет ошибка
// Вызвали функцию для массива к строке
// Обращаемся к свойству, свойству объекта

console.log(111);
function numPi() {
    return Math.PI;
}
function test(a) {
    return a * numPi();
}
console.log(test(3));

console.log(222);

let number = 108;
// Uncaught TypeError: number is not a function
// number(3);

console.log();



// Пример: Стек вызовов (call stack) 

// 1-script.js:11 Uncaught ReferenceError: PI is not defined
//     at numPi (1-script.js:11:5)
//     at test (1-script.js:15:16)
//     at 1-script.js:17:13



// Преобразование типов
// Как проверить тип
console.log(typeof NaN);
console.log(Number("33.3px"));
console.log(typeof []);


let tester;
console.log(typeof null);

// Типы данных:
// number
// string
// boolean
// object
// function
// null (object)
// undefined

// Array (object) - Array.isArray()
// symbol


// Задача 2
// Укажите все значеня NaN (Not a Number)

//   "17px" + 2    -> string + number => string -> "17px2"
// V "17px" - 2    -> string - number => NaN - 2 -> NaN
//   3 * 4 * null  -> 0 
// V "5px" / "3px" -> NaN / NaN -> NaN
//   true + false  -> 1

// Унарный плюс
// +"32131" <=> Number("32131")


// Задача 3
// Укажите все случаи, когда typeof === "number"

//   " -3 " + 4   ->   
// V "" - 7 + 11  ->   
//   1 + 2 + ""   ->   
// V "77" - 77    ->   

// Задача 4

// Перечислить все случаи, когда typeof === "object"

console.log(typeof null);      // null (object)
console.log(typeof alert);     // function
console.log(typeof {});        // object 
console.log(typeof []);        // Array (object)
console.log(typeof undefined); // undefined 
console.log(typeof "log");     // string

// alert()
// prompt()
// confirm()


// Укажите все значения для которых верно равенство
// Boolean(<value>) === true
// ""               -> false
// " "              -> true
// "text"           -> true
// {}               -> true
// []               -> true
// 0                -> false
// 10               -> true
// -11              -> true
// 1                -> true
// null             -> false
// undefined        -> false
// [3, 7, 4]        -> true
// [0]              -> true
// [1]              -> true

console.log(Boolean([3, 7, 4]));


// Boolean()
// Number()
// String()








