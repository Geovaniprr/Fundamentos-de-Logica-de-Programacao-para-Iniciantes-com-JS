const hora = 24
let saudacao;

if (hora < 12) {
    saudacao = "bom dia"
} else {
    if (hora < 18) {
        saudacao = "boa tarde"
    } else {
        if (hora < 23) {
            saudacao = "boa noite"
        } else {
            saudacao = "Esse horario nao existe!"
        }
    }
}
console.log(saudacao)