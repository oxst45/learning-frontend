// * ===== Date ===== * //

const currentDate = new Date(); // Создать объект с текущей датой

console.log(currentDate);

// * === get-методы объекта === * //

console.log(currentDate.getFullYear()); // 2022
console.log(currentDate.getMonth() + 1); // 3
// !!! 0 - явварь, 1 февраль, 2 - март ... !!! //
console.log(currentDate.getDate()); // от 1 до 31(30)(29)(28)

console.log(currentDate.getHours()); // от 0 до 23 вкл
console.log(currentDate.getMinutes()); // от 0 до 59 вкл
console.log(currentDate.getSeconds()); // от 0 до 59 вкл

console.log(currentDate.getMilliseconds()); // от 0 до 999



const date = new Date("2010-01-26"); //
console.log(date);


// * === set-методы объекта === * //
date.setFullYear(2004, 10 - 1, 20);
// Аналогично есть setMonth и т.д.
// месяц с нуля!

console.log(date);


// * Автоисправление даты * //

const anotherDate = new Date(2020, 1, 28); // Feb 28

anotherDate.setDate(anotherDate.getDate() + 2);

console.log(anotherDate); // Mar 01 2020



// * ===== Методы Date() ===== * //
// 1. Date.now() - Текущее время в мс, начиная от 1 января 1970 года

console.log(Date.now());
console.log(Date.now() / (1000 * 60 * 60 * 24 * 365)); // 


// Расчитать скорость выполнения цикла
const beforeDate = Date.now();
for (let i = 0; i < 300000; i++) {
    let j = i * i ** i;
}
const afterDate = Date.now();
console.log(afterDate - beforeDate);


// Посчитать разницу дней
const date1 = new Date(2016, 1, 28); // високосный год
const date2 = new Date(2017, 1, 28);

console.log(date1.getTime()); // 1456606800000 - время в мс, начиная от 1 января 1970 года

// Разность двух дат
console.log((date2 - date1) / (1000 * 60 * 60 * 24));


// 2. Date.parse() - получить из строки, похожей на тип Date, мс от 1 января 1970 года

console.log(Date.parse('Oct 29 2000')); // время в мс, начиная от 1 января 1970 года
// 972763200000
console.log(Date.parse('Oct 29 1969')); // время в мс, начиная от 1 января 1970 года
// -24030000000
