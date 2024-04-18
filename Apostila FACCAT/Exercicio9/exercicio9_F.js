var salario, percentual;

salario=parseFloat(prompt("Digite seu salário atual:"));
percentual=parseFloat(prompt("Digite o percentual de reajuste:"));

salario=salario+salario*percentual/100;

alert("Salário reajustado: " + salario)