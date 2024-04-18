/* Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
variável A. Apresentar os valores trocados
 */

let A, B, C, troca;

A = parseFloat(prompt("Digite o valor de A:"));

B = parseFloat(prompt("Digite o valor de B:"));

C = parseFloat(prompt("Digite o valor de C:"));

// verifica se A é maior que B
if (A > B) {
    troca = A;
    A = B;
    B = troca;
}

// verifica se B é maior que C
if (B > C) {
    troca = B;
    B = C;
    C = troca;
}

// verifica novamente se A é maior que B
if (A > B) {
    troca = A;
    A = B;
    B = troca;
}

alert("Os valores em ordem crescente são:", A, ",", B, " e", C);
