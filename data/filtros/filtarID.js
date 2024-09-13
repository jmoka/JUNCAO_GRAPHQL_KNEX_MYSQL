const { usuarios } = require("../db");

function filtarID(id) {
    const idSelecionado = usuarios.filter(u => u.id === id)
    console.log("selecionadoID" + idSelecionado);

    if (idSelecionado >= 0) {

        console.log("iiiiii" + idSelecionado)
        return idSelecionado

    } else {
        throw new Error("Id não encontrado")
    }
}

module.exports = {
    filtarID
}