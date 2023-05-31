let temDinheiro = false
let estaEnsolarado = true

let resultadoE = "(AND) #1 Vai pro shopping? "
resultadoE += temDinheiro && estaEnsolarado 
console.log(resultadoE)

/*para que a resposta seja positiva os dois elementos
precisam ser verdadeiros
*/

let carroEstaNaGaragem = true

let resultadoOU = "(OR) #2 - Vai pro shopping? "
resultadoOU += estaEnsolarado || carroEstaNaGaragem

console.log(resultadoOU)

/*para a resposta ser positiva no cenario "ou" uma das respostas
tem que ser verdadeiras
*/

console.log(false !== false)
console.log(true !== true)
console.log(true !== false)
console.log(false !== true)

//Operação "Ou exclusivo"

console.log("Não verdadeiro: " + !true)
console.log("Não falso: " + !false)

//Operador "Unario" aplica encima de apenas um operando