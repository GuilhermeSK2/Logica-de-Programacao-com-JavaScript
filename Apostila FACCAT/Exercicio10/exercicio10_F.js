var precoFabrica, distribuidor, imposto, precoFinal;

precoFabrica=parseFloat(prompt("Digite o preço de fábrica do carro"))

distribuidor=precoFabrica*0.28;
imposto=precoFabrica*0.45;
precoFinal=precoFabrica+distribuidor+imposto

alert("O preço final do carro é: " + precoFinal)