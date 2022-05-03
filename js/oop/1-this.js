// * ===== this (контекст) ===== * //

console.log(this);
console.log(this.alert);

// alert()

const pavel = {
    name2: 'Pavel',
    age: 30,
    hello: function () {
        // ! Контекст this есть только у функции

        // console.log(`My name is ${user.name2}`);
        console.log(`My name is ${this.name2}`);
        // console.log(this); // {name2: 'Pavel', age: 30, hello: ƒ}
    }
};

console.log(name); // window.name = ""
pavel.hello(); // Вызвать метод hello и передать контекст user (внутри функции this === user)
// hello() // У window нету такого метода - error



function mainHello() {
    console.log(`Контекст: ${this}`);
    console.log(`My name is ${this.name2}`);
}

// console.log(mainHello); // Содержимое функции
// console.log(mainHello()); // Вызвать

const bob = {
    name2: 'Bob',
    age: 40,
    purse: [5, 2, 1, 10, 25],
    hello: mainHello,
    calcCoin: function () {
        return this.purse.reduce( (prV, cV) => {
            // В стрелочной функции нету контекста (this), поэтому он возьмёт контекст у родительской функции
            console.log(this); // Bob
            console.log(this.name2);
            return prV + cV;
        } );
    }
};

// Задача. Написать метод для объекта bob, которые считает количество монет из purse
console.log(bob.calcCoin());

const richard = {
    name2: 'Richard',
    age: 25,
    mainHello,
};

mainHello(); 
// Контекст: [object Window]
// My name is undefined

bob.hello(); 
// Контекст: [object Object]
// My name is Bob

richard.mainHello(); 
// Контекст: [object Object]
// My name is Richard