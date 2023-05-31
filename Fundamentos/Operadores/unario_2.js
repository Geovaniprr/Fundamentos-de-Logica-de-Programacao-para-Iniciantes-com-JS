let a = 1;
let b = 2;

console.log(++a === b++)//mt confuso

a++
console.log(a === b)//melhor entendimento
b++

/*quando se usa essa expressao "++a" ele da prioridade para essa expressao
que é igual a 2, nesse console.log o resultado e true por conta que depois 
de ++a dar 2 a segunda prioridade vai ser === e depois sim b++ mas durante
a execução a=2 b=2 resultando que sao iguais
*/