/*
    Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.
*/

let numero1
let numero2
let numero3
let numero4
let numero5
let menor
let maior

numero1 = parseInt(prompt("Digite o primeiro numero:"))
numero2 = parseInt(prompt("Digite o segundo numero:"))
numero3 = parseInt(prompt("Digite o terceiro numero:"))
numero4 = parseInt(prompt("Digite o quarto numero:"))
numero5 = parseInt(prompt("Digite o quinto numero:"))

menor = numero1
if (numero2 < menor){
    menor = numero2
}

if (numero3 < menor){
    menor = numero3
}

if (numero4 < menor){
    menor = numero4
}

if (numero5 < menor){
    menor = numero5
}


maior = numero1
if (numero2 > menor){
    maior = numero2
}

if (numero3 > menor){
    maior = numero3
}

if (numero4 > menor){
    maior = numero4
}

if (numero5 > menor){
    maior = numero5
}


alert("O maior numero é: " + maior)
alert("O menor numero é: " + menor)