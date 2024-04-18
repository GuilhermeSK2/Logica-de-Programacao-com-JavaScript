var vendas, comissao, salarioFixo, valorVendas, salarioFinal;

vendas=parseInt(prompt("Digite a quantidade de vendas realizadas"));

salarioFixo=2500;
comissao=vendas*100;
valorVendas=comissao*0.05;

salarioFinal=salarioFixo+comissao+valorVendas;

alert("O salário final é: R$" + salarioFinal);