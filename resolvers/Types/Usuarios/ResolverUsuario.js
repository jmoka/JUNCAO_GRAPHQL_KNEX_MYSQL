//const { usuarios, perfis } = require('../../../data/db')
require('module-alias/register')
const db = require("@data/db")
const TodosUsuarios = require("./consultar/todosUsuarios.js")
const UsuarioNome = require("./consultar/usuarioNome.js")


module.exports = {
    usuarios() {
        return TodosUsuarios();

    },
    usuario_ID(_, { id }) {
        return UsuarioID(id)


    },
    usuario_Nome(_, { nome }) {
        return UsuarioNome(nome)


    },

}