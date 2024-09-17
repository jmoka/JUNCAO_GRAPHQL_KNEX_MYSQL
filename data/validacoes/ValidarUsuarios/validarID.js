const db = require('@data/db');

async function validarIdUsuarios(id) {
    try {
        const usuario = await db("usuarios").where({ id: id })
        console.log(usuario.length);

        if (usuario.length > 0) {
            console.log("Usuário encontrado");
            return true


        } else {
            console.log("Usuário não encontrado");
            return false
        }
    } catch (error) {

    }



}

module.exports = validarIdUsuarios;

