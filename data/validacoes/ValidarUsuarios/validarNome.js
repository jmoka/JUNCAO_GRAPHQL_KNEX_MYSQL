const db = require('@data/db');

async function validarNomeUsuarios(nome) {
    console.log("nome = " + nome);

    try {
        const usuario = await db("usuarios").where({ nome: nome })

        if (usuario.length > 0) {
            console.log("Usuário encontrado validade retorno true");
            return true

        } else {
            console.log("Usuário não encontrado");
            return false
        }
    } catch (error) {
        throw new Error("Informe um valor válido");


    }



}

module.exports = validarNomeUsuarios;

