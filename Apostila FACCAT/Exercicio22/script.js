let horas_trabalhadas = parseFloat(prompt("Digite a quantidade de horas mensais trabalhadas:"))
let salario_hora = parseFloat(prompt("Digite seu salário por hora:"))

if (horas_trabalhadas>160){
    salario_hora = salario_hora * 0.5 + salario_hora
}

let salario_total = horas_trabalhadas * salario_hora

alert (`Seu salário total é: R$ ${salario_total}`)