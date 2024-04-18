let valor1 = parseInt(prompt("Digite o primeiro valor:"))
let valor2 = parseInt(prompt("Digite o segundo valor:"))

if (valor1<valor2){
    alert(`Ordem crescente: ${valor1}, ${valor2}`)
}else{
    alert(`Ordem crescente: ${valor2}, ${valor1}`)
}