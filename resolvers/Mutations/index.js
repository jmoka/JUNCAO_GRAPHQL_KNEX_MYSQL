const NovoUsuario = require('./Usuarios/novoUsuario_mutation')
const ExcluirUsuario = require('./Usuarios/excluirUsuario_mutation')
const AlterarUsuario = require('./Usuarios/atualizarUsuario_mutation')
const NovoPerfil = require('./Perfis/novoPerfil_mutation')
const ExcluiPerfil = require('./Perfis/excluirPerfil_mutation')
const AlterarPerfil = require('./Perfis/alterarPerfil_mutation')
module.exports = {
    ...NovoUsuario,
    ...ExcluirUsuario,
    ...AlterarUsuario,
    ...NovoPerfil,
    ...ExcluiPerfil,
    ...AlterarPerfil
}