let valor1 = parseFloat(prompt("Digite o valor do primeiro lado:"))
let valor2 = parseFloat(prompt("Digite o valor do segundo lado:"))
let valor3 = parseFloat(prompt("Digite o valor do terceiro lado:"))

if (valor1 < valor2 + valor3 && valor2 < valor1 + valor3 && valor3 < valor1 + valor2) {
    alert(`É possível formar um triângulo`)
} else {
    alert(`Não é possível formar um triângulo`)
}