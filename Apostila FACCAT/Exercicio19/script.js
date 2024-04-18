let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))

if (valor1>valor2){
    alert(`${valor1} é maior!`)
}else{
    if(valor2>valor1){
        alert(`${valor2} é maior!`)
    }else{
        alert(`Os valores são iguais!`)
    }
}