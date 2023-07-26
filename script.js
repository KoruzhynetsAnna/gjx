
// var age = 13;

// console.log(age);


// var name = "Anya";

// console.log(name);


// var isStudent = true;

// console.log(isStudent);


// var myString = "Life is what happens when you're busy making other plans.";

// console.log(myString);


// var myNumber = 5;

// myNumber += 10;

// console.log(myNumber);

// var myNull = null;

// console.log(myNull);


// var userName = prompt("Введіть ваше ім'я:");

// alert("Привіт, " + userName + "!");


// var confirmation = confirm("Ви погоджуєтесь з цією дією?");

// if (confirmation) {
//   alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено!");
// }


// alert("Ця дія небезпечна!");

// var dangerConfirmation = confirm("Ви погоджуєтесь з цією дією?");

// if (dangerConfirmation) {
//   alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено!");
// }



1.

let tCelsius = 30;

let tFahrenheit = (tCelsius * 9/5) + 32;

console.log("Температура у Фаренгейтах:", tFahrenheit);


2.

let daysInOneMonths = 30;

let hoursInOneMonths = daysInOneMonths * 24;

let minutesInOneMonths = hoursInOneMonths * 60;

console.log("К-ть годин у місяці:", hoursInOneMonths);

console.log("К-ть хвилин в місяці:", minutesInOneMonths);

3.

let levelOfHealth = 100;

let levelOfEnergy = 100;

levelOfHealth -= 45;

levelOfEnergy -= 28;

console.log("рівень здоров'я:", levelOfHealth);

console.log("рівень енергії:", levelOfEnergy);

4.

let purchaseAmount = 500;

let discountPercentage = 10;

let discountedAmount = purchaseAmount * (1 - discountPercentage/100);

console.log("сума зі знижкою:", discountedAmount);

5.

let floatNumber = 4.90;

let roundNumber = Math.floor(floatNumber);

console.log("округлене число:", roundNumber);

6.

let stringNumber = "8.67";

let decimalNumber = parseFloat(stringNumber);

console.log("десяткове число:", decimalNumber);

7.

stringIdk = 15;

let idkNumber = parseInt(stringIdk);

console.log("Ціле число:", idkNumber);

let stringFromIdk = idkNumber.toString();

console.log("Рядок зі значенням:", stringFromIdk);

8.

let number = 16;

let squareRoot = Math.sqrt(number);

console.log("Корінь числа:", squareRoot);

9.

let integerValue = 45; 
let numberString = "123";

let parsedInteger = parseInt(numberString);
console.log("Ціле число після перетворення:", parsedInteger);

let stringFromInteger = integerValue.toString();
console.log("Рядок після перетворення:", stringFromInteger);
