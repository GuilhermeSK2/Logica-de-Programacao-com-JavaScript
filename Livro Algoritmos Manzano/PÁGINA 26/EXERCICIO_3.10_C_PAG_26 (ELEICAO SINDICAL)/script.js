let validos_A = parseInt(prompt("Digite a quantidade de votos válidos do candidato A:"))
let validos_B = parseInt(prompt("Digite a quantidade de votos válidos do candidato B:"))
let validos_C = parseInt(prompt("Digite a quantidade de votos válidos do candidato C:"))
let votos_branco = parseInt(prompt("Digite a quantidade de votos em branco:"))
let votos_nulo = parseInt(prompt("Digite a quantidade de votos nulos:"))

let validos_total = validos_A+validos_B+validos_C
let votos_total = votos_branco+votos_nulo+validos_total

let perc_valido = validos_total/votos_total*100
let perc_branco = votos_branco/votos_total*100
let perc_nulo = votos_nulo/votos_total*100
let perc_A = validos_A/votos_total*100
let perc_B = validos_B/votos_total*100
let perc_C = validos_C/votos_total*100

alert(`Total de votos: ${votos_total}\nPercentual de votos válidos: ${perc_valido}%\nPercentual de votos em branco: ${perc_branco}%\nPercentual de votos nulos: ${perc_nulo}%\nPercentual de votos válidos do candidato A: ${perc_A}%\nPercentual de votos válidos do candidato B: ${perc_B}%\nPercentual de votos válidos do candidato C: ${perc_C}%`)