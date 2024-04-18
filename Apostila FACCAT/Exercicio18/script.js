let ano_atual = parseInt(prompt("Digite o ano atual:"))
let nascimento = parseInt(prompt("Digite o ano do seu nascimento:"))

let calculo = ano_atual - nascimento

if (calculo < 0) {
    alert(`Idade inválida`)
} else {
    if (calculo < 16) {
        alert(`Proibido votar!`)
    } else {
        if (calculo < 18) {
            alert(`Voto opcional!`)
        } else {
            alert(`Voto obrigatório!`)
        }
    }
}