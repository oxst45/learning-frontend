// * ===== Замыкания ===== * //

// Функция в функции


// 1. Написать функцию, которая считает количество нажатий по кнопке

let countClick = 0;

function btnClicked() {
    countClick++;
}

for (let i = 0; i < 4; i++) {
    btnClicked();
}
// countClick = '111s';

// console.log(countClick);



// ===== Через замыкание =====


function clicked() {
    let clickCount = 0;

    return function () {
        // Функция имеет доступ к переменным вне её в момент выполнения
        clickCount++;
        // console.log(clickCount);
        return clickCount;
    }
}


const newFunction = clicked(0);

// const newFunction2 = clicked();


for (let i = 0; i < 4; i++) {
    console.log(newFunction());
}

// newFunction2()

// newFunction2()

// console.log(clickCount);




// ===== Другой пример ===== //


// Написать функцию, которая собирает url
// https://<url>.<domain>


// const domainCom
// const domainRu
// const domainUk

function urlGenreator(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    }
}

const comUrl = urlGenreator('com');

console.log(comUrl('vk'));
console.log(comUrl('google'));
console.log(comUrl('type'));


const ruUrl = urlGenreator('ru');

console.log(ruUrl('yandex'));
console.log(ruUrl('mail'));
console.log(ruUrl('rambler'));


const ukUrl = urlGenreator('uk');

console.log(ukUrl('london'));

