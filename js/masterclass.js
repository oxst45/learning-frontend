// Написать программу, которая выводит все простые числа до n вкл.

// Простое число:
// 1. Натуральные - (целые числа начиная с 1 ...)
// 1 2 3 4 5 ...

// 2. число > 1
// 2 3 4 5 ...

// 3. Делится на 1 и на само себя
// На остальные не делится
// (i не делится от 2 до i не вкл)

// 2 3 5 7 11 13 17 19 23 29 31 37



const n = 120;
for (let i = 2; i <= n; i++) {
    for (let k = 2; k < i; k++) {
        // Если число делится, то оно уже не простое
        if (i % k === 0) {
            break;
        } 
        // Условие последней итерации:
        if (k + 1 === i) {
            console.log('Простое -', i);
        }
    }
}



