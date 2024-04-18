let valor1 = parseInt(prompt("Digite o primeiro valor"))
let valor2 = parseInt(prompt("Digite o segundo valor"))

if (valor1 == valor2) {
    alert(`Os valores são iguais`)
} else {
    if (valor1 > valor2) {
        alert(`O primeiro é maior`)
    } else {
        alert(`O segundo é maior`)
    }
}