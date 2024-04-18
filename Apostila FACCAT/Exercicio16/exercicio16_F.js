quantidadeMacas=parseInt(prompt("Digite a quantidade de maçãs compradas:"))

if (quantidadeMacas<12){
    total=quantidadeMacas*1.3
    alert("O valor total deu: R$" + total)
}
else{
    alert("O valor total deu: R$" + quantidadeMacas)
}