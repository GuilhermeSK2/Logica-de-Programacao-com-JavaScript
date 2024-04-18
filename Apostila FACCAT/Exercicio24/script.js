let comissao_maior

let salario_fixo = parseFloat(prompt("Digite seu salário fixo:"))
let vendas = parseFloat(prompt("Digite o valor das suas vendas:"))

let comissao_menor = vendas * 0.03
let salario_total = salario_fixo + comissao_menor

if (vendas>1500){
    comissao_maior = (vendas - 1500) * 0.05
    salario_total = salario_fixo + comissao_menor + comissao_maior
}

alert(`Seu salário é: R$ ${salario_total}`)