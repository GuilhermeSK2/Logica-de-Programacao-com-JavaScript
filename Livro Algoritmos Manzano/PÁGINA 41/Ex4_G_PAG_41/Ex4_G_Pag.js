/*
Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.
*/

let numero1
let numero2
let numero3
let numero4

numero1 = parseFloat(prompt("Digite o primeiro número:"))
numero2 = parseFloat(prompt("Digite o segundo número:"))
numero3 = parseFloat(prompt("Digite o terceiro número:"))
numero4 = parseFloat(prompt("Digite o quarto número:"))

if ((numero1 % 2 == 0) && (numero1 % 3 == 0)){
    alert(numero1 + " é divisivel por 2 e por 3");
}
else {
    alert(numero1 + " nao é divisivel por 2 e por 3")
}

if ((numero2 % 2 == 0) && (numero2 % 3 == 0)){
    alert(numero2 + " é divisivel por 2 e por 3");
}
else {
    alert(numero2 + " nao é divisivel por 2 e por 3")
}

if ((numero3 % 2 == 0) && (numero3 % 3 == 0)){
    alert(numero3 + " é divisivel por 2 e por 3");
}
else {
    alert(numero3 + " nao é divisivel por 2 e por 3")
}

if ((numero4 % 2 == 0) && (numero4 % 3 == 0)){
    alert(numero4 + " é divisivel por 2 e por 3");
}
else {
    alert(numero4 + " nao é divisivel por 2 e por 3")
}