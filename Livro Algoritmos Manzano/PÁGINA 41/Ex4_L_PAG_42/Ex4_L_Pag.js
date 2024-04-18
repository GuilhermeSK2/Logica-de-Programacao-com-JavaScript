/*
Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com
saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a
mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da
mensagem de saudação o nome previamente informado.  
*/

let numero
let genero

numero = (prompt("Digite seu nome"));
genero = (prompt("Digite seu gênero (M = Masculino / F = Feminino)"));

if (genero == "M") {
    alert("llmo Sr. " + nome + " o sexo que você selecionou foi o: " + genero)
}
else if (genero == "F"){
    alert("llmo Sra. " + nome + " o sexo que você selecionou foi o: " + genero)
}