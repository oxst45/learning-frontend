// * ===== ... spread (оператор расширения) ===== * //

const citiesRussia = ['Москва', 'Санкт-Петербург', 'Волгоград'];

const citiesEurope = ['Мюнхен', 'Париж', 'Вена'];


console.log(citiesRussia); // ['Москва', 'Санкт-Петербург', 'Волгоград']
console.log(...citiesRussia); // Москва Санкт-Петербург Волгоград

// * Копирование массива
// const CopycitiesRussia = [...citiesRussia];
// console.log(CopycitiesRussia);
// console.log(CopycitiesRussia === citiesRussia); // Копия - неглубокая (не ссылка)


// Необходимо склеить два массива и добавить город между ними (ES6) 
const citiesWorldAnother = [...citiesRussia, 'Лос-Анджелес', ...citiesEurope];
console.log(citiesWorldAnother);


// Как мы делали раньше ES5:
const citiesWorld = citiesRussia.concat('Лос-Анджелес', citiesEurope);
console.log(citiesWorld);

// Работа с объектами

const ratingCityRussia = {
    Moscow: 10,
    Novgorod: 9,
    Volgograd: 8,
};
const ratingCityEurope = {
    London: 10,
    Paris: 8,
    Vienna: 9,
    Moscow: 7,
};

// console.log(...ratingCityRussia); // TypeError 
console.log( { ...ratingCityRussia } ); // Copy ratingCityRussia 

// Склеить объекты
ratingCityWorld = { ...ratingCityRussia, ...ratingCityEurope }
console.log(ratingCityWorld);

// ! Если свойства одинаковые, то перезаписываются


// Примеры использования:
// 1 пример
const numbers = [3, 6, 7, 324, 54, 32, 67];
// console.log(numbers);
// console.log(...numbers);
console.log(Math.max(numbers)); // NaN
console.log(Math.max(...numbers)); // 324

// 2 пример
const divArray = document.querySelectorAll('div');
console.log(divArray); // NodeList - не работают reduce, filter, map ...
console.log([...divArray]); // Array

// Старое Решение: 
// divList = Array.from(divArray);
// console.log(divList);

// * Копирование
// * Склеивание
// * Преобразование типа


// * ===== rest (остаточные параметры) ===== * //

// Написать функцию, которая считает сумму параметром, которые подали в функцию

// 1.
function sum(a, b, ...arr) {
    // console.log(arguments);
    if (arr.length) {

        return a + b + arr.reduce((prValue, value) => {
            return prValue + value;
        });
    } else {
        return a + b;
    }
}


console.log(sum(3, 5, 3, 7, 5, 3));

// Раньше делали через argumnets


// 2. rest-оператор применяется в деструкторизации массивов / объектов

function calc(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}
const [summ, sub, ...other] = calc(6, 2);
console.log(summ, sub); // 8 4
console.log(other); // [12, 3]

// *********
// Итого:
// spread - разворачивает массивы, объекты
// rest - собирает в массив или объект