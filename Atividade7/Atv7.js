var num1 = prompt("Informe um número: ");
var num2 = prompt("Informe outro número: ");

var soma = parseFloat(num1) + parseFloat(num2);
var sub = parseFloat(num1) - parseFloat(num2);
var mult = parseFloat(num1) * parseFloat(num2);
var div = parseFloat(num1) / parseFloat(num2);
var resto = parseFloat(num1) % parseFloat(num2);

alert(`Soma: ${soma.toFixed(2)}`);
alert(`Subtração: ${sub.toFixed(2)}`);
alert(`Multiplicação: ${mult.toFixed(2)}`);
alert(`Divisão: ${div.toFixed(2)}`);
alert(`Resto: ${resto.toFixed(2)}`);
