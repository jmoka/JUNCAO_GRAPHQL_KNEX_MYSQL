const { usuarios } = require("../db")

function validarEmail(email) {
    const emailExistente = usuarios.some(u => u.email === email)
    console.log("email retornado" + emailExistente)
    if (emailExistente) {
        throw new Error("Email já existe")

    } else {
        return emailExistente;
    }
}
function validarEmailExistnte(email) {
    console.log("email recebido =====" + email);

    const emailExistente = usuarios.findIndex(u => u.email === email)
    console.log("emailExistente====" + emailExistente);
    if (emailExistente >= 0) {
        return emailExistente
    } else {
        throw new Error("Email não Encontrado")
    }
}

module.exports = {
    validarEmail,
    validarEmailExistnte
}