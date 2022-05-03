// * ===== Потеря контекста ===== * //

const user = {
    name: 'Pavel',
    age: 30,
    logInfo: function (job, tel) {
        console.log(this.name);
        console.log(this.age);
        console.log(job);
        console.log(tel);
    },
    renameUser: function (newName) {
        this.name = newName;
    }
}

const anotherUser = {
    name: 'Victor',
    age: 23,
}

user.logInfo('frontend developer');


// Выполнить метод logInfo в user для объекта anotherUser
// Есть 3 метода у функций!

// * ===== метод bind() ===== * //
// Передаёт контекст this в метод
// Функцию нужно вызвать самостоятельно
// bind() - возвращает новую функцию

// Я создал копию функции logInfo для объекта anotherUser

// 1 вариант
console.log('===== bind - 1 =====');
const copyLogInfo = user.logInfo.bind(anotherUser);
copyLogInfo('doctor', '+7777');

// 2 вариант - лучше использовать call
console.log('===== bind - 2 =====');
user.logInfo.bind(anotherUser, 'doctor', '+7777')();



// * ===== метод call() ===== * //

// Передаёт контекст this в метод
// Метод call сам вызывает функцию
// call() - ничего не возвращает 


console.log('===== call =====');
user.logInfo.call(anotherUser, 'doctor', '+7777');


user.renameUser.call(anotherUser, "Nick");
console.log(anotherUser);



// * ===== метод apply() ===== * //

// Передаёт контекст this в метод
// Метод call сам вызывает функцию
// call() - ничего не возвращает
// Вторая переменная должна быть массивом

console.log('===== apply =====');
user.logInfo.apply(anotherUser, ['doctor', '+7777']);



// Итоги:

// bind(this, ...params) - возвращает функцию с переданным контекстом

// call(this, ...params) - вызывает функцию с переданным контекстом

// apply(this, [...params]) - вызывает функцию с переданным контекстом


// * 1. Контекст в классах * //

class User {
    constructor(name) {
        // this = объекту, который мы создам после объявления класса
        // person
        // person2
        this.name = name;
    }
    testThis = function () {
        console.log(this);
    }
}

// this применяется к объекту person
const person = new User("Bob");
const person2 = new User("Gale");

console.log(person);

person.testThis();


// * 2 Контекст в функциях * //
// 1
const obj = {
    fn() {
        console.log(this);
    }
}
obj.fn(); // this === obj


// 2 
function fn2() {
    console.log(this);
}
fn2(); // this === window

// 3
obj.copyFn = fn2;
obj.copyFn(); // this === obj


// 4
const testFunction = obj.copyFn; // ! потеря контекста
testFunction(); // this === window

// Исправление ситуации
const testFunction2 = () => { obj.copyFn() }; // ! потеря контекста
testFunction2(); // this === obj


// 5
// const someFn = (callback) => {
//     callback = anotherObj.method // ! потеря контекста
//     callback(); // this === window
// }

const someFn = function (callback) {
    // callback = anotherObj.method // ! потеря контекста
    callback(); // this === window
}

const anotherObj = {
    method: function () {
        console.log(this);
    }
}

someFn(anotherObj.method)
// this === window

// Избежать потерю контекста моно следующий образом:

const wrapFunction = () => { anotherObj.method() };
someFn(wrapFunction);

// callback = wrapFunction
// callback()

// callback = () => { anotherObj.method() };
// callback()




// 6
// const objective = {
//     fn: function () {
//         console.log(this); // this === objective
//         function funct() {
//             console.log(this); // this === window
//         }
//         funct(); // Вызвал не через точку - потерял контекст
//     }
// }
// objective.fn();


// Исправление ситуации
const objective = {
    fn: function () {
        console.log(this); // this === objective

        const funct = () => {
            console.log(this); // this === objective
        }
        funct(); // Вызвал не через точку - потерял контекст
    }
}
// Внутряняя функция в методе должна быть стрелочной, чтобы наследовать контекст
objective.fn();




