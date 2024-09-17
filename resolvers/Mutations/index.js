const NovoUsuario = require('./Usuarios/novoUsuario_mutation')
const ExcluirUsuario = require('./Usuarios/excluirUsuario_mutation')
module.exports = {
    ...NovoUsuario,
    ...ExcluirUsuario
}