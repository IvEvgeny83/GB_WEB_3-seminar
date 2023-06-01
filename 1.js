"use strict"

let enteredValue = Number.parseFloat(prompt('Введите значение температуры в градусах Цельсия для его перевода в градусы по Фаренгейту'));
console.log(enteredValue);
let outputValue = enteredValue * (9 / 5) + 32;
console.log(outputValue);
alert(`Введенное значение температуры ${enteredValue} градуса(ов) Цельсия\nравно ${outputValue.toFixed(2)} градуса(ов) по Фаренгейту.`);