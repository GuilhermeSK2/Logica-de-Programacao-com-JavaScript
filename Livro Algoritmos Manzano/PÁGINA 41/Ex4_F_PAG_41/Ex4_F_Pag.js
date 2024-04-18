/*
Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.
*/


let a;
let b;
let c;
let troca;


a = (prompt("Insira o Primeiro valor"));
b = (prompt("Insira o Segundo valor"));
c = (prompt("Insira o Terceiro valor"));


if (a>b) {
    troca = a
    a = b
    b = troca
}

if (b>c) {
    troca = b
    b = c
    c = troca
}

if (a>b) {
    troca = a
    a = b
    b = troca
}

alert("Os valores e ordem crescentes são: " + a + " " + b + " " + " " + c);