let morango_peso = parseFloat(prompt("Digite a quantidade de morangos comprados (em KG):"))
let maca_peso = parseFloat(prompt("Digite a quantidade de maçãs compradas (em KG):"))

let morango_preco = morango_peso * 2.5
let maca_preco = maca_peso * 1.8

if (morango_peso > 5) {
    morango_preco = morango_peso * 2.2
}

if (maca_peso > 5) {
    maca_preco = maca_peso * 1.5
}

let peso_total = morango_peso + maca_peso
let preco_total = morango_preco + maca_preco

if(peso_total>8 || preco_total>25){
    preco_total = preco_total - 0.1 * preco_total
}

alert(`Total da compra: R$${preco_total}`)