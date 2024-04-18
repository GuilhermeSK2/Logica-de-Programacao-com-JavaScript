/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.*/
var anos, meses, dias, idade;

anos=parseInt(prompt("Digite sua idade em anos:"));
meses=parseInt(prompt("Digite quantos meses se passaram desde seu último aniversário"))
dias=parseInt(prompt("Digite quantos dias se passaram desde seu último mesversário"))

idade=anos * 365 + meses * 30 + dias

alert("Quantidade de dias de vida: " + idade)