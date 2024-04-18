let hora_inicio = parseInt(prompt("Digite a hora de início da partida (sem os minutos):"))
let hora_fim = parseInt(prompt("Digite a hora de término da partida (sem os minutos):"))

let duracao = hora_fim - hora_inicio

if (duracao<0){
    duracao = duracao+24
}

alert(`A duração da partida foi: ${duracao} hora(S)`)