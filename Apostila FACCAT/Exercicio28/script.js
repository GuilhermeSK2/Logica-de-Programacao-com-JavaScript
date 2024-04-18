let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))
let valor3 = parseFloat(prompt("Digite o terceiro valor:"))

if (valor1>valor2 && valor1>valor3){
    alert(`${valor1} é maior (primeiro valor)`)
}else{
    if(valor2>valor1 && valor2>valor3){
        alert(`${valor2} é maior (segundo valor)`)
    }else{
        alert(`${valor3} é maior (terceiro valor)`)
    }
}