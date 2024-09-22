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
    perfil_ID(_, { id }) {
        return PerfilID(id)

    },

    perfil_Nome(_, { nome }) {
        return PerfilNome(nome)
    },

    perfil_Rotulo(_, { rotulo }) {
        return PerfilRotulo(rotulo)
    }


}