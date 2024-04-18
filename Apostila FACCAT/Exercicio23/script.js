let peso_ideal

let nome = prompt("Digite seu nome:")
let sexo = prompt("Digite seu sexo (M ou F):")
let altura = parseFloat(prompt("Digite sua altura:"))

if (sexo == "M"){
    peso_ideal = 72.7 * altura - 58
    alert(`${nome}, seu peso ideal é: ${peso_ideal} KG`)
}else{
    peso_ideal = 62.1 * altura - 44.7
    alert(`${nome}, seu peso ideal é: ${peso_ideal} KG`)
}