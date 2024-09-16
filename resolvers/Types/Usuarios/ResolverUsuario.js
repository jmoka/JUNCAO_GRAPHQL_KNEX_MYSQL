//const { usuarios, perfis } = require('../../../data/db')
require('module-alias/register')
const db = require("@data/db")
const TodosUsuarios = require("./consultar/todosUsuarios.js")
const UsuarioNome = require("./consultar/usuarioNome.js")

module.exports = {
    usuarios() {
        return TodosUsuarios();
        db.finally(() => db.destroy())
    },
    usuario_ID(_, { id }) {
        return UsuarioID(id)
        db.finally(() => db.destroy())

    },
    usuario_Nome(_, { nome }) {
        return UsuarioNome(nome)
        db.finally(() => db.destroy())

    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const sels = perfis
            .filter(p => p.id === id)
        return sels ? sels[0] : null
    },
    perfil(usuario) {
        const sels = perfis
            .filter(p => p.id === usuario.perfil_id)
        return sels ? sels[0] : null
    }
}