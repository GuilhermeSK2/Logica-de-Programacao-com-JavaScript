let senha

let usuario = parseInt(prompt("Digite seu código de usuário:"))

if (!(usuario == 1234)) {
    alert(`Usuário inválido! Tente novamente`)
} else {
    senha = parseInt(prompt("Digite sua senha:"))
    if (senha == 9999) {
        alert(`Acesso permitido`)
    } else {
        alert(`Acesso negado! Senha incorreta`)
    }
}