/* Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo
segundo. */

let numero1, numero2, numero3, numero4, numero5, menor, maior;

numero1 = parseInt(prompt("Digite o primeiro número:"));

numero2 = parseInt(prompt("Digite o segundo número:"));

numero3 = parseInt(prompt("Digite o terceiro número:"));

numero4 = parseInt(prompt("Digite o quarto número:"));

numero5 = parseInt(prompt("Digite o quinto número:"));

menor = numero1;
if (numero2 < menor) {
    menor = numero2;
}
if (numero3 < menor) {
    menor = numero3;
}
if (numero4 < menor) {
    menor = numero4;
}
if (numero5 < menor) {
    menor = numero5;
}

maior = numero1;
if (numero2 > maior) {
    maior = numero2;
}
if (numero3 > maior) {
    maior = numero3;
}
if (numero4 > maior) {
    maior = numero4;
}
if (numero5 > maior) {
    maior = numero5;
}

alert("O maior número é: " + maior);
alert("O menor número é: " + menor);
