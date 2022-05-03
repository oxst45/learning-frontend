const user = {
    name: 'Bob',
    age: 33
};

user.name = 'Gale'; // Переопределение (изменить свойство)
user.secondName = "London"; // Добавление нового свойства
delete user.secondName; // Удаление свойства

// =========================================== //
// 1. Добавить свойство со значением, которое хранится в переменной
const newProp = 'likes cat';

// user.newProp = true; // x --> newProp: true
// user.likes cat = true; // x --> error

user['isMan'] = true;
// user['likes cat'] = true;
user[newProp] = true;


// =========================================== //
// 2. Перебор - for in

// свойство (ключ: значение)

// а) Перебрать все ключи
for (const key in user) {
   console.log(key); 
}
// 'name'
// 'age'
// 'isMan'
// 'likes cat'


// б) Перебрать все значения
for (const prop in user) {
    console.log(user[prop]);
}
// 'Gale'
// 33
// true
// true

console.log(user);

// =========================================== //
// Проверить существует ли ключ (свойство)
console.log("name" in user); // true
console.log("age" in user); // true
console.log("isis" in user); // false


// * ===== копирование объектов ===== * //

const man1 = {
    name: 'Pavel',
    address: {
        city: 'Moscow'
    }
};
const man2 = {
    name: 'Pavel',
    address: {
        city: 'Moscow'
    }
};

// Разные объекты даже с одинаковыми свойствами не равны
console.log(man1 === man2); // false - объекты не связаны по ссылке - значит объекты разные


const copyMan1 = man1; // Неверное копирование
console.log(copyMan1 === man1); // true - Значит объекты соединены по ссылке - значит объекты одинаковые

console.log(copyMan1.address === man1.address); // true - вложенный объект тоже передаётся по ссылке



// Скопировать объект: Object.assign() - склекивает объекты

// Неглубокое копирование
console.log('Неглубокое копирование');
const newCopyMan1 = Object.assign({}, man1);
console.log(newCopyMan1 === man1); // false
console.log(newCopyMan1.address === man1.address); // true


// Неглубокое копирование
// function deepCopyObject(obj) {
//     const copyObj = {};

//     for (const key in obj) {
//         copyObj[key] = obj[key];
//     }

//     return copyObj;
// }


// Глубокое копирование
// Через рекурсию или циклы

function deepCopyObject(obj) {
    const copyObj = {};

    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            copyObj[key] = deepCopyObject(obj[key]);
        } else {
            copyObj[key] = obj[key]; // Копирование примитивов
        }
    }
    return copyObj;
}


const testObj = {
    name: 'Pavel',
    test: null,
    address: {
        city: 'Moscow',
        house: {
            numberHouse: 12,
            numberFlat: 9,
            arr: [1, 2, 3]
        }
    }
};



const copy = {
    name: 'Pavel',
    address: {
        city: 'Moscow',
    }
};

console.log('Глубокое копирование')
const newCopyObj = deepCopyObject(testObj)
console.log(newCopyObj === testObj); 
console.log(newCopyObj.address === testObj.address);
console.log(newCopyObj.address.house === testObj.address.house);
console.log(newCopyObj.address.house.arr === testObj.address.house.arr);

console.log(newCopyObj);


// Напоминание

// 1 - меняет объект, который подали
function name(obj) {
    obj['name'] = 'Kate';
}

// 2 - возвращает новый объект
function name(obj) {
    const newObj = {}

    newObj['name'] = 'Kate';

    return newObj;
}


