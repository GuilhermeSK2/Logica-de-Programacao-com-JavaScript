var votosTotal, votosBranco, votosNulo, votosValido, percentualBranco, percentualNulo, percentualValido;

votosValido=parseInt(prompt("Digite a quantidade de votos válidos"));
votosBranco=parseInt(prompt("Digite a quantidade de votos brancos"));
votosNulo=parseInt(prompt("Digite a quantidade de votos nulos"));

votosTotal=votosBranco+votosNulo+votosValido;

percentualValido=votosValido/votosTotal*100;
percentualBranco=votosBranco/votosTotal*100;
percentualNulo=votosNulo/votosTotal*100;

alert("Total de votos: "+votosTotal);
alert("Percentual de votos válidos: " + percentualValido + "%")
alert("Percentual de votos em branco: " + percentualBranco + "%")
alert("Percentual de votos nulos: " + percentualNulo + "%")