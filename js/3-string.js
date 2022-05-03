// ===== string ===== //


let testString = "  It's my text";
const array = ['  It', 's my text'];
// ! Все функции со строками не меняют исходную строку. Только возвращает новую!
// 

console.log(testString.length); // 16

console.log(testString.toLowerCase()); // "  it's my text  "
console.log(testString.toUpperCase()); // "  IT'S MY TEXT  "
console.log(testString.trim()); // "It's my text"

console.log(testString.indexOf("t", 4)); // 10
console.log(testString.includes("text", 1)); // true
console.log(testString.substr(2, 6)); // Начиная со 2 символа количеством 6 символов
console.log(testString.slice(2, 6)); // Начиная со 2 символа по 6 символ

// Из строки в массив по разделителю, разделитель не входит в массив
console.log(testString.split("'")); // ['  It', 's my text']
// Из массива в строку
console.log(array.join("'")); // ['  It', 's my text']

// Меняем местами буквы
console.log(testString.split("").reverse().join(""));



console.log(typeof alert);

alert.newProp = 11;
console.log(alert.newProp);






















// Задача 12.
// Написать функцию, принимающая строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются 'a, e, i, o, u'

const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1
} 
function findVowels(string) {
    
}