const NovoUsuario = require('./Usuarios/novoUsuario_mutation')
const ExcluirUsuario = require('./Usuarios/excluirUsuario_mutation')
const AlterarUsuario = require('./Usuarios/atualizarUsuario_mutation')
module.exports = {
    ...NovoUsuario,
    ...ExcluirUsuario,
    ...AlterarUsuario,
}