let nota1 = parseFloat(prompt("Digite a nota da sua primeira verificação:"))
let nota2 = parseFloat(prompt("Digite a nota da sua segunda verificação:"))
let nota3 = parseFloat(prompt("Digite a nota da sua terceira verificação:"))
let exercicios = parseFloat(prompt("Digite a média dos seus exercícios:"))

let media = (nota1 + nota2 * 2 + nota3 * 3 + exercicios) / 7

if (media<6){
    alert(`Conceito: D`)
}else{
    if(media<7.5){
        alert(`Conceito: C`)
    }else{
        if(media<9){
            alert(`Conceito: B`)
        }else{
            alert(`Conceito: A`)
        }
    }
}