// * ===== callback ===== * //

// array = [3, 6, 7, 'fds'];
// const callbackFunction = (value, index, array) => {
//     // console.log(value, index, array);
//     return typeof value === 'number' ? value : value.length;
// }
// console.log(array.map(callbackFunction));

// * Задача * //
// По нажатию на кнопку подключить 3 скрипта
// 1. Неважно в какой последовательности подключатся скрипты

// 2. Подключить сначала 1 и только если он успешно загрузился, подключить затем второй, если не успешно, то подключать второй не нужно!

// Проверить работу скриптов.

// callback()


function scriptLoad(src) {
    const script = document.createElement('script');
    script.src = src

    script.addEventListener('load', () => {
        loading(null, src);
    });

    script.addEventListener('error', () => {
        loading(new Error(), src)
    });
    document.head.append(script);
}


function loading(error, src) {
    if (error) {
        console.log(`Script ${src} error!`);
    } else {
        console.log(`Script ${src} loaded!`);

        // Здесь скачан только juery

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js';

        script.addEventListener('load', () => {
            loading2(null, 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js');
        });

        script.addEventListener('error', () => {
            loading2(new Error(), 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js')
        });
        document.head.append(script);
    }
}

function loading2(error, src) {
    if (error) {
        console.log(`Script ${src} error!`);


    } else {
        console.log(`Script ${src} loaded!`);
        console.log('All Scripts loaded!');

        // Здесь скачаны jquery и lodash

        obj = { name: 'Pavel' };
        let copyObj = _.cloneDeep(obj);
        console.log(copyObj);
        console.log(copyObj === obj);
    }
}


// 1 задача
// function loadScripts() {
//     scriptLoad("https://code.jquery.com/jquery-3.6.0.min.js");

//     scriptLoad("https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.1.4/swiper-bundle.js");

//     scriptLoad("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");
// }


const btnElement = document.querySelector('.btn');

btnElement.addEventListener("click", () => { scriptLoad("https://code.jquery.com/jquery-3.6.0.min.js") });


// obj = { name: 'Pavel' };
// let copyObj = _.cloneDeep(obj);
// console.log(copyObj);
// console.log(copyObj === obj);


