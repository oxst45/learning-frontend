// * ===== set ===== * //


// set - вид коллекции, состоящий из значений
// ! Каждое значение может повториться только один раз !
// ! Ключ (индекс) равен значению

const setType1 = new Set('button');
console.log(setType1); // {'b', 'u', 't', 'o', 'n'}


const setType2 = new Set(['button', 'div', 'a', 'button']);
console.log(setType2); // {'button', 'div', 'a'}


// Добавить
setType2.add('ul');
setType2.add('div');
console.log(setType2); // {'button', 'div', 'a', 'ul'}


// Проверить
if (setType2.has('div')) {
    // Удалить
    setType2.delete('div');
} else {
    // Добавить
    setType2.add('div');
}
console.log(setType2); {'button', 'a', 'ul'}

// Размер
console.log(setType2.size); // 3


// Удалить всё
setType2.clear();
console.log(setType2); {size: 0}

// Копирование

const copySet = new Set(setType1);
console.log(copySet);  // {'b', 'u', 't', 'o', 'n'}
console.log(copySet === setType1);  // false


// * Методы * //

console.log(copySet.keys()); // Возвращает итерируемый объект по ключам (значение)
console.log(copySet.values()); // Возвращает итерируемый объект по значениям


// console.log(copySet.entries()); // Возвращает итерируемый объект по парам [ключ, значение] - присутствует для совместимости с Map


console.log([...copySet]); // Из Set в Array


for (const value of copySet) {
    console.log(value);
}

copySet.forEach( (value, againValue, set) => {
    console.log(value);
    // console.log(againValue); // Одно и то же
} );


// Set лучше оптимизирован для добавлений, он автоматически проверяет на уникальность - лучше в производительности


// Есть аналоги 
// WeekMap
// WeekSet