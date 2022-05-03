// Объекты для хранения пар (ключ + значение) - для именновых коллекция
// Массивы для упорядоченных коллекций

// Литеральная запись
const a = 7;
const user = { name: 'Maks' };

// Нелитеральная запись
const person = new Object({name: 'Alex'});

const num = new Number(77);
const str = new String('text');
const isBool = new Boolean(true);

const arr = new Array(1, 3, 4);
const func = new Function();

// null, undefined - не объекты


// console.log(person['name']);

console.log(person);
console.log(num);
console.log(str);
console.log(isBool);
console.log(arr);
console.log(func);

const text = 'fds';
console.log(text.toUpperCase());

// * ===== map ===== * //
// map - коллекция ключ/значение
// map может использовать ключи любого типа

// Создание map (у него нету литеральной формы)




// * Установить значение
// 1 вариант
// const mapType = new Map();
// mapType.set("test", 42); // Строка в качестве ключа
// mapType.set(108, "thunder"); // Число в качестве ключа
// mapType.set(false, 100); // Boolean в качестве ключа


// 2 вариант
// const mapType = new Map();
// mapType
//     .set("test", 50)
//     .set(10, "thunder")
//     .set(false, 132)
// ;
// 3 вариант
const mapType = new Map([
    ['1', 'text1'],
    [1, 'text2'],
    [10, "thunk"],
    [false, 132]
]);
console.log(mapType);


// * Получить значение
console.log(mapType.get(10)); // Получить значение по ключу
console.log(mapType.get('1')); // text1
console.log(mapType.get(1)); // text2

// Узнать размер
console.log(mapType.size); // 3


// ! map сохрнаяет тип ключей, так что можно создать 2 похожи "свойства"
// ! В объектаъ тип ключа - строка, а здесь может быть любой тип, даже object


// Пример - ключ является объектом
const maks = { name: "Maks" };

const newMap = new Map();
newMap.set(maks, 1000);

console.log(newMap);
console.log(newMap.get(maks)); // 1000



// * Методы Map * //

console.log(mapType.keys()); // Возвращает итерируемый объект по ключам
console.log(mapType.values()); // Возвращает итерируемый объект по значениям
console.log(mapType.entries()); // Возвращает итерируемый объект по парам [ключ, значение] - этот вариант используется по умолчанию в for..of


console.log('===========');

const mapCart = new Map([
    ['apple', 500],
    ['potato', 300],
    ['carrot', 700],
    ['juice', 70]
]);

for (const item of mapCart.keys()) {
    console.log(item);
}

for (const item of mapCart.values()) {
    console.log(item);
}

for (const item of mapCart) { // mapCart.entries()
    console.log(item);
}

mapCart.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});


// * Копия Map * //
console.log(mapCart.entries());
const copyMap = new Map(mapCart.entries());
console.log(copyMap === mapCart);



// В случаях частого добавления/удаления/изменения ключей - map имеет высокую производительность