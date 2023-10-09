var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));
var num3 = parseFloat(prompt("Digite o terceiro número: "));

function maiorNumero() {
    var maior = Math.max.apply(null, arguments);
    alert(" O maior número entre eles é: " + maior);
}

maiorNumero(num1, num2, num3);

let ordem = [3];
var numeros = 0;

function ordenar(ordem) {
    return ordem.sort(function(a,b){return a - b});
}

for(i=0; i<3; i++){
    ordem[i] = parseInt(prompt("Informe três números para ordenar: "));
}

alert(ordenar(ordem));