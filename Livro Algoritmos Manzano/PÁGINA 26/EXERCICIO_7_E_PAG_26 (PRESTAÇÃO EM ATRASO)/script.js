/* Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
PRESTACAO <- VALOR + (VALOR * TAXA/100) * TEMPO).
 */

let valorPresta1;
let taxa;
let tempo_;
let novaPrestacao;

valorPresta1 = parseFloat(prompt("Insira o valor original da prestação:"));

taxa = parseFloat(prompt("Insira a taxa que será acrescentada em cima do valor:"));

tempo_ = parseFloat(prompt("Insira o tempo de atraso da prestação em dias:"));

novaPrestacao = valorPresta1 + (valorPresta1 * taxa / 100) * tempo_;

alert("O valor total a ser pago com juros é de R$ " + novaPrestacao);
