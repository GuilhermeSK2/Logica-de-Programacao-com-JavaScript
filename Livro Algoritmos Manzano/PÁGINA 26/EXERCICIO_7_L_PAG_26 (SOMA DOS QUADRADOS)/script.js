/* Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à
soma dos quadrados dos três valores lidos */

let a, b, c, soma;

a = parseFloat(prompt("Insira o Primeiro número:"));

b = parseFloat(prompt("Insira o Segundo número:"));

c = parseFloat(prompt("Insira o Terceiro número:"));

soma = (a ** 2) + (b ** 2) + (c ** 2);
alert("A soma dos quadrados é " + soma);
