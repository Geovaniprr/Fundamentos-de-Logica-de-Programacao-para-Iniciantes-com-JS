const a = 2;
const b = 2;
const operacao = '+'; 

let resultado

if (operacao === '*'){
    resultado = a * b
} else if (operacao === '+'){
    resultado = a + b
} else if (operacao === '-'){
    resultado = a - b
} else if (operacao === '/'){
    resultado = a / b
} else if (operacao === '%'){
    resultado = a % b
} else
console.log ("essa operação não existe na calculadora")


console.log(resultado)