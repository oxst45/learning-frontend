// https://learn.javascript.ru/destructuring-assignment

// * ===== Деструкторизация массива ===== * //


function calc(a, b) {
    return [
        a + b,
        undefined,
        a * b,
        a / b,
        null
    ]
}

// const calcArray = calc(5, 3);
// const a = calcArray[0];
// const b = calcArray[1];
// console.log(a, b);

// Параметры по умолчанию (присваиваются, если значение массива отсутствует или undefined)


const [summ, sub = true, , ...other] = calc(6, 2);
// const [summ, sub] = [8, 4, 12, 3];

console.log(summ, sub); // 8 true
// 12 - пропущен, засчёт запятой 
console.log(other); // [3, null]



// * ===== Деструкторизация объекта ===== * //

const user = {
    names: 'Mark',
    age: 29,
    address: {
        city: 'Moscow',
        country: 'Russia'
    }
};


// const { names, age: old, address } = user;
// const names = user.names;
// const old = age.names;
// const address = address.names;


// !!! Важно: свойства и переменные должны быть одинаково названы
// Либо указаны явно <свойство объекта>: <переменная куда сохраним>

// const { names, age: old, address } = user;


const { 
    names, 
    age: old, 
    address 
} = user;

console.log(names); // 'Mark'
console.log(old); // 29

console.log(address === user.address); // true - Связаны по ссылке


// Аналогично параметры по умолчанию
// Аналогично оператор rest

