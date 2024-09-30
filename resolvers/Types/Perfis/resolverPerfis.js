require('module-alias/register')
const db = require("@data/db")
const TodosPerfis = require("./consultas/todosPerfis")
const PerfilID = require("./consultas/perfilID")
const PerfilNome = require("./consultas/perfilNome")
const PerfilRotulo = require("./consultas/perfilRotulo")

module.exports = {
    perfis() {
        return TodosPerfis();


    },
    perfilID(_, { id }) {
        return PerfilID(id)

    },

    perfilNome(_, { nome }) {
        return PerfilNome(nome)
    },

    perfilRotulo(_, { rotulo }) {
        return PerfilRotulo(rotulo)
    }


}