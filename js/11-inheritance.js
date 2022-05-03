class Peolpe {
    constructor(name = "noname", age = 18) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

// const pavel = new Peolpe("Pavel", 25);
// console.log(pavel);


// Teacher (учит)
// Merchant (продаёт)

class Teacher extends Peolpe {
    constructor(name, age, subject) {
        // Вызвать его обязательно, чтобы создали прототипы
        super(name, age); // Вызвать родительский конструктор Peolpe
        this.subject = subject;
    }

    teach() {
        console.log("I'm teacher");
    }
}

class Merchant extends Peolpe {
    constructor(name, age, field) {
        super(name, age); // Вызвать родительский конструктор Peolpe
        this.field = field
    }

    sell() {
        console.log("I'm merchant");
    }
}

const maks = new Teacher('Maks', '40', 'math');
console.log(maks);

maks.hello();
maks.teach();


const pavel = new Merchant('Pavel', '36', 'aviasells');
console.log(pavel);

pavel.hello();
pavel.sell();




class Component {
    constructor(selector) {
        this.element = document.querySelector(selector)
    }

    hide() {
        this.element.hidden = true;
    }
    show() {
        this.element.hidden = false;
    }
    changeBackground(color) {
        this.element.style.backgroundColor = color;
    }
}

const footer = new Component('.footer');

console.log(footer.element);
footer.hide()
footer.show()
footer.changeBackground('gold');

const main = new Component('.page');
main.changeBackground('tomato');



// * Pure React
// React.createElement("div", { className: "test" }, "Hello world!");

// * React JSX
// <div className="test">Hello world!</div>

// * Native JS
// const tagDiv = document.createElement('div');

// tagDiv.classList.value = 'test';

// tagDiv.innerText = "Hello world!";

// console.log(tagDiv);


