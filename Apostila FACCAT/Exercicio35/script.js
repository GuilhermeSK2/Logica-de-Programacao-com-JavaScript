let litros = parseInt(prompt("Digite a quantidade de litros de combustível"))
let tipo_combustivel = prompt("Qual o tipo de combustível? (A ou G):")

if (tipo_combustivel=="A"){
    if (litros>20){
        valor = (litros*2.90) - (litros*2.90) * 0.05
    }else{
        valor = (litros*2.90) - (litros*2.90) * 0.03
    }
}

if (tipo_combustivel=="G"){
    if (litros>20){
        valor = (litros*3.30) - (litros*3.30) * 0.06
    }else{
        valor = (litros*3.30) - (litros*3.30) * 0.04
    }
}

alert(`Valor total: ${valor}`)