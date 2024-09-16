const { usuarios } = require('@data/db');

function validarIdUsuarios(id) {
    const i = usuarios.findIndex(u => u.id === id); // findIndex retorna o índice do array; caso retorne -1, significa que não encontrou
    if (i >= 0) {
        console.log("i usuario encontrado === " + i);
        console.log("usuario encontrado === " + usuarios[i].id);
        return i;
    } else {
        throw new Error("Id não encontrado");
    }
}

module.exports = {
    validarIdUsuarios
};
