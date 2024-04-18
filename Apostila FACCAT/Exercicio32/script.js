let time1 = parseInt(prompt("Digite a quantidade de gols do time 1:"))
let time2 = parseInt(prompt("Digite a quantidade de gols do time 2:"))

if (time1 > time2){
    alert (`O time 1 foi o vencedor!`)
}else{
    if(time2 > time1){
        alert(`O time 2 foi o vencedor!`)
    }else{
        alert(`Empate!`)
    }
}