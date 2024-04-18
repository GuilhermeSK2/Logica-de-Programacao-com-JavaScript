/* Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível
com o usuário, para que seja apresentado o valor em moeda americana. */

let dolares, reais, cotacao;

cotacao = parseFloat(prompt("Insira o valor da cotação do Real em relação ao Dólar atualmente:"));

reais = parseFloat(prompt("Qual a quantidade de Reais você deseja converter?"));

dolares = reais / cotacao;

alert("Considerando que você tenha R$" + reais + ", ao fazer a conversão você terá $" + dolares);
