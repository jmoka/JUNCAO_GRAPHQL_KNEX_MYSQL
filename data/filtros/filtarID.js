const { usuarios } = require('../db');

function filtarID(id) {
    const idSelecionado = usuarios.filter(u => u.id === id);
    console.log("selecionadoID: " + JSON.stringify(idSelecionado));

    if (idSelecionado.length > 0) {
        console.log("iiiiii: " + JSON.stringify(idSelecionado));
        return idSelecionado;
    } else {
        throw new Error("Id não encontrado");
    }
}

module.exports = {
    filtarID
};
