let soma

let valor1 = parseFloat(prompt("Digite o primeiro valor"))
let valor2 = parseFloat(prompt("Digite o segundo valor"))
let valor3 = parseFloat(prompt("Digite o terceiro valor"))

if (valor1 > valor3 && (valor2 > valor3)) {
    soma = valor1 + valor2
    alert(`A soma dos dois maiores valores é: ${soma}`)
} else {
    if (valor1 > valor2 && (valor3 > valor2)) {
        soma = valor1 + valor3
        alert(`A soma dos dois maiores valores é: ${soma}`)
    }else{
        soma = valor2 + valor3
        alert(`A soma dos dois maiores valores é: ${soma}`)

    }
}