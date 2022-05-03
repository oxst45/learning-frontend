// * ===== Методы объектов ===== * //

const pavel = {
    name: 'Pavel',
    age: 30,
    test: 11,
};


// * Копирование / склеивание объектов
// 1. Object.assign({}, {});

// const copyObject = { ...pavel };
// console.log(copyObject);

const copyObject = Object.assign({}, pavel);
console.log(copyObject === pavel); // false


// * Получить массив ключей
// 2. Object.keys({})

const keysArr = Object.keys(pavel);
console.log(keysArr);


// * Получить массив значений
// 3. Object.values({})

const valueArr = Object.values(pavel);
console.log(valueArr);

// * Получить массив массивов(ключ + значение)
// 4. Object.entries({})

const entriesArr = Object.entries(pavel);
console.log(entriesArr);


// * Получить объект из массива
// 5. Object.fromEntries({})

const fromEntriesArr = Object.fromEntries(entriesArr);
console.log(fromEntriesArr);



// Посчитать сумму всей покупки
const cart = {
    banana: 100,
    orange: 50,
    milk: 20,
    meat: 200,
};

// let price = 0
// for (const key in cart) {
//     price += cart[key];
// }
// console.log(price);


const price = Object.values(cart).reduce( (prV, cV) => prV + cV );

console.log(price);


// Удвоить сумму тележки