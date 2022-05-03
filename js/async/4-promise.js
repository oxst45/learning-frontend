// * ===== promise ===== * //

// promise - объект
// 1. Ожидание - 'pending'
// 2. Успешно - 'fullfiled'
// 3. Ошибка - 'rejected'

// Создать промис - синхронная операция

// Как только промис создан, функция внутри сразу выполняется

const promise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js"

    script.addEventListener('load', () => {
        console.log('Script loadded');
        resolve(111);
    });

    // script.addEventListener('error', () => {
    //     console.log('Script unloadded');
    //     // reject() // ! На практике чаще всего его не используют
    //     throw new Error("Test");
    // });

    document.head.append(script);
});


// .then (Синхронный код - добавить в очередь выполнения)
promise
    .then((value) => {
        console.log(value); // 111
        // Загрузка второго скрипта
        return value;
    })
    .then((val) => {
        console.log(val); // 111
        // Загрузка третьего скрипта
    })
    .catch((error) => {
        console.log(error)
    });

