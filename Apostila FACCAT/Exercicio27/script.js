let valor = parseFloat(prompt("Digite um valor:"))

if (valor < 0) {
    alert(`O valor é negativo`)
} else {
    if (valor == 0) {
        alert(`O valor digitado é igual 0`)
    } else {
        alert(`O valor digitado é positivo`)
    }
}