// * ===== try - catch - throw - finally ===== * //

// Обработка ошибок
// Что делать, если случилась ошибка?




// console.log(111);

// Запрашивать у пользователя числа до тех пор, пока он не ввёл 0
// Как только пользователь ввёл 0, вывести сумму ранее введённых чисел



// sum = 0;
// while (true) {
//     let num = Number(prompt('Введите число'));
//     try {
//         if (isNaN(num)) {
//             // throw new Error("Вы ввели не число");
//             // throw new SyntaxError("Вы ввели не число");
//             throw new SyntaxError("Вы ввели не число");
//         }
//         if (num === 20) {
//             throw new Error("Вы ввели 20");
//         }
//     } catch (error) {
//         if (error.name === "SyntaxError") {
//             console.log("Ошибка " + error);
//             console.log("Имя ошибки " + error.name);
//             console.log("Текст ошибки " + error.message);
//             console.log("Стэк вызовов " + error.stack);
//             console.log("Повторите набор числа");

//             continue;
//         } else {
//             break;
//         }
//     }

//     if (num === 0) {
//         break;
//     }
//     sum += num;
// }
// console.log(sum);




function load() {
    // Запрос
    let testJson = `{}`; // Неверные данные
    try {
        let result = JSON.parse(testJson);
        // Если объект пустой, то бросить ошибку
        // throw new Error("");

    } catch (error) {
        console.log("JSON неверен");
        setTimeout(load, 1000);
    } finally {
        // Из try или catch - попадаем сюда
        console.log("Работает всегда");
    }
}
load();

console.log("Программа живёт дальше");

