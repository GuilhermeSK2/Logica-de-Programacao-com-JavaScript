/*
Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o
valor da média do aluno para qualquer condição.
*/

let nota1
let nota2
let nota3
let nota4

let mediaNotas

nota1 = parseFloat(prompt("Digite a primeira nota: "))
nota2 = parseFloat(prompt("Digite a segunda nota: "))
nota3 = parseFloat(prompt("Digite a terceira nota: "))
nota4 = parseFloat(prompt("Digite a quarta nota: "))

mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4

if (mediaNotas < 5) {
    alert(`O aluno foi reprovado com nota ${mediaNotas}`)
}
else {
    alert(`O aluno foi aprovado com nota ${mediaNotas}`)
}