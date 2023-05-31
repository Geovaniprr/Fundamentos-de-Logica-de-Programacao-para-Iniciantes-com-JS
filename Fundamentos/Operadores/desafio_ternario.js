const a = 8
const b = 4
const operacao = "/"

const resultado = operacao === "+"? 8 + 4 : (operacao === "-"? 8 - 4 : (operacao === "*"? 8 * 4 : 8 / 4))
console.log(resultado)