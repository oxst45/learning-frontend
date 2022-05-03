class Player {
    level = 1;
    money = 0;
    bag = [];

    constructor(name = "noname", age = 0) {
        this.name = name;
        this.age = age;

        // Методы, описанные в констуркторе - записываются в объект
        this.hello = function () {
            console.log(`Hello! My name is ${this.name}`);
        }
    }

    // Методы, описанные в классе - записываются в prototype
    helloProto() {
        console.log(`Hello! My name is ${this.name}`)
    }
}


const alex = new Player('Alex', 15);
console.log(alex);

alex.hello();
alex.helloProto();


const nikol = new Player('Nikol', 14);
console.log(nikol);



// Отличия от функции-конструктора
// 1. Класс не может быть вызван без new
// 2. Весь код внутри класса находится в строго режиме ("use strict")
// 3. Методы класса являются неперечисляемыми (цикл for in их не видит)


// Классы
// наследники класса
// супер-функция
// 4 принципа ООП
// __proto__ && prototype
