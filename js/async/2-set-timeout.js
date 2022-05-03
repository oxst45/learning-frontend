// * ===== set-timeout ===== * //

// * Обычный код

// function testing() {
//     for (let i = 0; i < 2900000000; i++) {
//         let test = i * i ** i;
//     }
// }

// console.log(11);
// testing(); // Не даёт выполнить код дальше
// console.log(12);




// function test() {
//     for (let i = 0; i < 2900000000; i++) {
//         let test = i * i ** i;
//     }
//     console.log("Функция завершена");
// }

// // setTimeout - асинхронная функция
// // Вызывает функцию test через 1000ms
// console.log(11);
// setTimeout(test, 0); // Мы не ждём окончания работы этой функции
// console.log(12);




// * На собесе часто спрашивают:

console.log(1);
setTimeout(() => { console.log(111) }, 0);
console.log(3);
console.log(4);
setTimeout(() => { console.log(222) }, 20);
console.log(5);
setTimeout(() => { console.log(333) }, 10);
console.log(6);


for (let i = 0; i < 2000; i++) {
    let test = i * i ** i;
    console.log("Долгий цикл");
}

// * Все асинхронный функции выполняются только после того, как отработает весь синхронный код

// 1 3 4 5 6 111 333 222



// * ===== Event Loop ===== * //
// * stack (стэк) ==== По очереди попадает синхронный и асинхроный код
// синхронный - выполняется сразу
// асинхроный код - отправляется в Browser API

// * Browser API ===== setTimeout/setInteravel/AddEventListener/fetch/promise ...

// * queue (очередь) = Сюда попадают после выполнения условия в Browser API


