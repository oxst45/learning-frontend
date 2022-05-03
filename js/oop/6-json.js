// * ===== json (Java Script Object Notation) ===== * //


const student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    stack: ['html', 'css', 'js'],
    address: {
        country: 'Russia',
        city: 'Moscow'
    },
    test: undefined,
    hello: function () {
        console.log('Hello world!');
    }
}
console.log(student);


// *** Сделать json из object

const jsonObj = JSON.stringify(student);
console.log(jsonObj); // json-формат, но тип string
console.log(typeof jsonObj); // string


// JSON.stringify пропускает:
// 1. Методы объектов (функции)
// 2. Cвойства содержащие undefined
// 3. Символьные свойства (symbol)

// JSON.stringify поддерживает:
// + object (кроме map, set, date, ...)
// + array
// + string
// + number
// + boolean
// + null


// *** Получить объект из string (формата-json)

const obj = JSON.parse(jsonObj);
console.log(obj);



// * === Deep Clone === * //
// С помощью JSON.stringify и JSON.parse можно выполнить глубокое копирование

console.log(obj === student); // false
console.log(obj.stack === student.stack); // false
console.log(obj.address === student.address); // false

