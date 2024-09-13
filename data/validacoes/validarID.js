const { usuarios } = require("../db")

function validarIdUsuarios(id) {

    const i = usuarios.findIndex(u => u.id === id) // findIndex retorna o indece do array caso retorne -1
    // significa que não encontrou igual a zero encontrou
    if (i >= 0) {
        console.log("i usuario encontrado === " + i);
        console.log("i.id usuario encontrado === " + i.id);
        return i
    } else {
        throw new Error("Id não encontrado")
    }

}

module.exports = {
    validarIdUsuarios
}