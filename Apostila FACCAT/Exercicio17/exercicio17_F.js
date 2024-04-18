nota1=parseFloat(prompt("Digite sua primeira nota:"))
nota2=parseFloat(prompt("Digite sua segunda nota:"))

media=(nota1+nota2)/2

if (media<6){
    alert("Reprovado! Sua média foi: " + media)
}
else{
    alert("Aprovado!Sua média foi: " + media)
}