let idade = parseInt(prompt("Digite o ano do seu nascimento:"))
let trabalho = parseInt(prompt("Digite o ano em que ingressou no trabalho:"))

idade = 2024 - idade
trabalho = 2024 - trabalho

alert(`Sua idade: ${idade} ano`)
alert(`Tempo trabalhado: ${trabalho} ano(s)`)

if (idade > 64 || trabalho > 29) {
    alert(`Requerer aposentadoria`)
} else {
    if (idade > 59 && trabalho > 24) {
        alert(`Requerer aposentadoria`)
    } else {
        alert(`Não requerer aposentadoria`)
    }
}