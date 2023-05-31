let preco = 19.90
let desconto = 0.4

console.log(19.9 * 0.6) //Valores literais
console.log(desconto)

let precoComDesconto = preco * (1 - desconto)

console.log(precoComDesconto)

let nome = "Caderno"           //String (texto) --> Sequencia de símbolos
let categoria = "Papelaria"
console.log("Produto: " + nome 
    + ", Categoria: " 
    + categoria 
    + ", Preço: " + preco 
    + ", Preco a vista: " + precoComDesconto )