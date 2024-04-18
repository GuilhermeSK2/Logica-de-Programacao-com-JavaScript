let resposta

let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))

let resultado = valor1 * valor2 + 5

if (resultado <= 0){
    resposta = "A"
}else{
    if (resultado <= 100){
        resposta = "B"
    }else{
        resposta = "C"
    }
}

alert(`${resultado}, ${resposta}`)