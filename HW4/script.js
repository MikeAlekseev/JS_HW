// Задание 1
// Необходимо с помощью цикла
// for вывести следующие 11 строк в консоль:
//     0– это ноль
// 1– нечетное число
// 2– четное число
// 3– нечетное число…
// 10– четное число

for (let i = 0; i <= 10; i++) {
    if ([i] == 0) {
        console.log([i] + "- это ноль");
    } else if ([i] % 2 != 0) {
        console.log([i] + "- нечетное число");
    } else if ([i] % 2 == 0) {
        console.log([i] + "- четное число");
    }
}

// Задание 2
// Дан массив[1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий[1, 2, 3, 6, 7]
const arr = [1, 2, 3, 4, 5, 6, 7];
const valRemove = 4;
const valRemove2 = 5;
const indexRemove = arr.indexOf(valRemove);


if (indexRemove > -1) {
    arr.splice(indexRemove, 1);
}
const indexRemove2 = arr.indexOf(valRemove2);

if (indexRemove2 > -1) {
    arr.splice(indexRemove2, 1);
}
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const num1 = Math.floor(Math.random(0, 9) * 10);
const num2 = Math.floor(Math.random(0, 9) * 10);
const num3 = Math.floor(Math.random(0, 9) * 10);
const num4 = Math.floor(Math.random(0, 9) * 10);
const num5 = Math.floor(Math.random(0, 9) * 10);
const array = [num1, num2, num3, num4, num5];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
    console.log(`Минимальное число ${num1}`);
} else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
    console.log(`Минимальное число ${num2}`);
} else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
    console.log(`Минимальное число ${num3}`);
} else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) {
    console.log(`Минимальное число ${num4}`);
} else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4) {
    console.log(`Минимальное число ${num5}`);
}

for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        console.log("Тут есть цифра 3");
    } else {
        console.log("Тут нет цифры 3");
    }
}