// https://swapi.dev/api/people/1/


// const promise = fetch(urlRequest); // Возвращает промис
// * 1 вариант

// function functionName(urlRequest) {
//     fetch(urlRequest)
//         .then((response) => {
//             // console.log(response); // Ответ, что всё ок / или не ок
//             if (!response.ok) {
//                 throw new Error(`Error! Could not fetch ${response.url}, recevied ${response.status}`);
//             }

//             // Если ответ успешный, то запрашиваем JSON (асинхронная операция)
//             return response.json(); // Запросить JSON
//         })
//         .then((bodyResponse) => {
//             // ! Здесь код отрисовки
//             console.log(bodyResponse);
//             rendering(bodyResponse);
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
// };


// * ===== async - await * ===== //

// * 2 вариант

async function functionName(urlRequest) {
    const response = await fetch(urlRequest); // Запрос на сервер

    if (!response.ok) {
        throw new Error(`Error! Could not fetch ${response.url}, recevied ${response.status}`);
    }

    const bodyResponse = await response.json(); // Запросить JSON

    console.log(bodyResponse);
    rendering(bodyResponse);
};




function rendering(bodyResponse) {
    const personTag = document.createElement('div');

    personTag.innerHTML = `name: ${bodyResponse.name} <br> height: ${bodyResponse.height}`;

    document.body.append(personTag)
}


const inputElement = document.querySelector('.input');
const buttonElement = document.querySelector('.button');

buttonElement.addEventListener('click', () => {
    functionName(`https://swapi.dev/api/people/${inputElement.value}/453453`)
        .catch((error) => {
            console.log(error.message);
        });
});