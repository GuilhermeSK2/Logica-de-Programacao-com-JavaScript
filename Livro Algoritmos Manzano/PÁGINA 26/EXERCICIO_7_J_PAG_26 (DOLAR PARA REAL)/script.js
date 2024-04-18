/* Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares
disponível com o usuário, para que seja apresentado o valor em moeda brasileira. */

let dolares, reais, cotacao;

cotacao = parseFloat(prompt("Insira o valor da cotação do Dólar atual:"));

dolares = parseFloat(prompt("Qual a quantidade de Dólares você deseja converter?"));

reais = cotacao * dolares;

alert("Considerando que você tenha $" + dolares + ", ao fazer a conversão você terá R$" + reais);
