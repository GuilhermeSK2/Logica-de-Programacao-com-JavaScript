/* Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o
quadrado da soma dos três valores lidos. */


let a, b, c, soma;

a = parseFloat(prompt("Insira o Primeiro número:"));

b = parseFloat(prompt("Insira o Segundo número:"));

c = parseFloat(prompt("Insira o Terceiro número:"));

soma = (a + b + c) ** 2;
alert("A soma dos quadrados é " + soma);
