/*
Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de
segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o
referido cálculo. Lembre-se de que a variável A deve ser diferente de zero.
*/

let valorA
let valorB
let valorC
let delta
let resultadoA
let resultadoB

valorA = parseFloat(prompt("Digite um valor para A: "))
valorB = parseFloat(prompt("Digite um valor para B: "))
valorC = parseFloat(prompt("Digite um valor para C: "))

delta = valorB ** 2 - 4 * valorA * valorC

if (valorA == 0) {
    alert("Impossivel fazer a equação de segundo grau")
}
else if (delta < 0 ) {
    alert("Não existem raizes reais")
}
else {
    resulatadoA = ((numeroB + Math. sqrt(delta)) / (2 * valorA))
    resulatadoB = ((numeroB - Math. sqrt(delta)) / (2 * valorA))
    alert("A primeira raiz é:" + resultadoA + " a segunda raiz é" + resultadoB)
}



