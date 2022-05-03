// 1 - возвращает новый массив
// 2 - мутирует(изменяет) переданный массив







const taskArr = [1, 2, 3, 4, 2]; // Исходный массив
replaceItemsMutate(taskArr, 2, 'a');
console.log('Исходный мутированный массив:', taskArr);



const taskArr222 = [1, 2, 3, 4, 2]; // Исходный массив
const newClearArr = replaceItemsClear(taskArr222, 2, 'a');
console.log('newClearArr:', newClearArr);
console.log('Исходный массив', taskArr222);


function replaceItemsMutate(arr, item, replaceItem) {
    arr.forEach((value, index, array) => {
        array[index] === item ? array[index] = replaceItem : array[index] = array[index];
    });
}


function replaceItemsClear(arr, item, replaceItem) {
    return arr.map((value) => {
        return value === item ? replaceItem : value;
    });
}







