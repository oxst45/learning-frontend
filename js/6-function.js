// * ===== Function ===== * //

// Function Declaration
// Function Expression
// Arrow Function (Отсутствует: this, arguments, super)
// Pure Function
// High order function (HOF) - функции с callback
// Рекурсия - recursion


// 1. Написать функцию, на вход которой подаётся много чисел
// Функция возвращает сумму этих чисел

// * arguments * //
function calcSum() {
    console.log(arguments);

    const array = Array.from(arguments);
    console.log(array);

    return array.reduce((previous, current) => {
        return previous + current
    }, 0);
}
console.log(calcSum(3, 7, 3, 1, 2, 9));



// * Pure Function * //
// 1. Возвращаемое значение зависит только от аргументов
// При вызове одной и той же функции будет одинаковый результат

// 2. У функции нет побочных эффектов
// Функция не должна влияет на внешние параметры

// Примеры побочных эффектов:
// а) Запись в глобальную переменную
// б) Обновление DOM-дерева
// в) Запись к КЭШ (localStorage)

// г) Запись в БД
// д) Ассинхронный код (setTimeout, fetch ...)

// e) Изменение свойств (obj.name = 'Pavel';)
// ж) Не должен изменять массив/объект извне


// const sumTwo = (a, b) => a + b; // Чистая функция

// const sumTwo = (a, b) => a + b + Math.random(); // Не чистая функция


let c = 10;

const user = {
    name: 'Alex'
};

const sumTwo = (obj, b) => {
    // c = 18;
    // document.body.style.backgroundColor = 'tomato';
    obj.name = 'Pavel';
    return b + c;
}; 

console.log(sumTwo(user, 7, c));


// const btnElement = document.querySelector();
// btnElement.addEventListener('click', (event) => {
//     const btn = event.target;
//     // console.log(event.target);
//     btn.classList.toggle('active');
// });



// * Рекурсия * //
// 2 ** 10 = 1024
// Написать функцию, которая вовзводит число в степень

function pow(num, rate) {
    let result = 1;
    for (let i = 0; i < rate; i++) {
        result *= num; // reslut = result * num
    }
    return result;
}
console.log(pow(2, 10));

console.group('Рекурсия');
function powRec(num, rate) {
    if (rate === 1) {
        return num;
    } else {
        // const temp = powRec(num, rate - 1)
        // console.log(temp);
        return num * powRec(num, rate - 1);
    }
}

// = 2 * powRec(2, 3)
//       2 * powRec(2, 2)
//           2 * powRec(2, 1)
//               2


// = 2 * 8
//       8
//           4
//               2

console.log(powRec(2, 4));
console.groupEnd();


function powRec2(num, rate) {
    return rate === 1 ? num : num * powRec(num, rate - 1);
}
console.log(powRec2(2, 10));


// Рекурсивное решение обычно короче (не всегда)
// Рекурсивное решение обычно быстрее (не всегда)




// Написать функцию, которая вычисляет факториал числа
// 3! = 1 * 2 * 3 = 6
// 5! = 1 * 2 * 3 * 4 * 5 = 240
// 1! = 1
// 0! = 1

function fact(num) {
    let result = 1;
    if (num === 0) {
        return result;
    }
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(fact(1));