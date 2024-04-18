let quantidade_atual = parseInt(prompt("Digite a quantidade atual em estoque do produto X:"))
let quantidade_maxima = parseInt(prompt("Digite a quantidade máxima do produto:"))
let quantidade_minima = parseInt(prompt("Digite a quantidade mínima do produto:"))

let media = parseFloat((quantidade_maxima + quantidade_minima)/2)

if (media<=quantidade_atual){
    alert(`Não realizar compra do produto`)
}else{
    alert(`Necessário realizar compra do produto`)
}