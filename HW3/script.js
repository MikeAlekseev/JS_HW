// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2 ^ 3 степени + 3 ^ 3 степени
let num = Number(prompt("ВВедите число: "));

function cube(num) {
    return num ** 3;
}
console.log(cube(num));
console.log(cube(2) + cube(3));
//Не совсем понятное условие - куб из 2 и 3 должны складываться или отдельно выводиться в консоль?
// console.log(cube(2));
// console.log(cube(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13 % от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
let number = prompt("Введите число: ");
if (isNaN(number)) {
    console.log("Введено не число");
} else {
    function nalog(number) {
        return number - (number * 0.13)
    }
    // console.log("введено число: ", Number(number));
    console.log("Размер заработной платы за вычетом налогов равен значение: ", nalog(number));
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
let num1 = prompt("Введите первое число: ");
let num2 = prompt("Введите второе число: ");
let num3 = prompt("Введите третье число: ");
if (num1 > num2 && num1 > num3) {
    console.log(`${num1} больше`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} больше`);
} else if (num3 > num1 && num3 > num2) {
    console.log(`${num3} больше`);
}

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций(каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
// должно вывести число 8 в консоль(sum - функция сложения в данном примере, ваши названия функций могут отличаться).Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
let number1 = Number(prompt("Введите первое число: "));
let number2 = Number(prompt("Введите второе число: "));

function sum(number1, number2) {
    return number1 + number2;
}
console.log(sum(number1, number2));

function dif(number1, number2) {
    if (number1 > number2) {
        return number1 - number2;
    } else if (number2 > number1) {
        return number2 - number1;
    } else if (number1 === number2) {
        return 0;
    }
}
console.log(dif(number1, number2));

function mult(number1, number2) {
    return number1 * number2;
}
console.log(mult(number1, number2));

function div(number1, number2) {
    return number1 / number2;
}
console.log(div(number1, number2));
// В условии не было сказано делать проверку для деления большего на меньшее