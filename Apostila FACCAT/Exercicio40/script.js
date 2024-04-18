let produto = prompt("Digite o nome do produto:")
let quantidade = parseInt(prompt("Digite a quantidade comprada do produto:"))
let valor = parseFloat(prompt("Digite o valor unitário do produto"))

let total = quantidade * valor

if (quantidade <= 5) {
    total = total - total * 0.02
} else {
    if (quantidade > 5 && quantidade <= 10) {
        total = total - total * 0.03
    } else {
        total = total - total * 0.05
    }
}

alert(`${produto}: valor total da compra foi R$ ${total}`)