/*
Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem
informando se o número é par ou ímpar.
*/

let numero

numero = parseFloat(prompt("Digite um numero inteiro"))

if (numero % 2 == 0){
    alert("O numero digitado é Par")
}
else {
    alert("O numero digitado é Impar")
}