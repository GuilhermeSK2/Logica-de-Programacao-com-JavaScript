let conta = parseInt(prompt("Digite o número da sua conta:"))
let saldo_atual = parseFloat(prompt("Digite o saldo da sua conta: R$"))
let debito = parseFloat(prompt("Digite seu débito: R$"))
let credito = parseFloat(prompt("Digite seu crédito: R$"))

saldo_atual = saldo_atual - debito + credito

if (saldo_atual>0){
    alert(`Informações sobre a conta ${conta}\nSaldo positivo\nNovo saldo: R$ ${saldo_atual}`)
}else{
    alert(`Informações sobre a conta ${conta}\nSaldo negativo\nNovo saldo: R$ ${saldo_atual}`)
}