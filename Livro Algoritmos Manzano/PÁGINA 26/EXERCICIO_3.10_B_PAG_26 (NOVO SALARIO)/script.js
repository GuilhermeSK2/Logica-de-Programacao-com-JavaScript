let salario = parseFloat(prompt("Digite seu salário:"))
let reajuste = parseFloat(prompt("Digite o percentual de reajuste:"))
let salario_novo = salario + salario * 10 / 100
alert(`Seu salário reajustado é: ${salario_novo}`)