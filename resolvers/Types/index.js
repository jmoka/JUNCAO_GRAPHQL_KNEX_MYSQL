const ResolverUsuario = require('./Usuarios/ResolverUsuario')
const ResolverPerfis = require('./Perfis/resolverPerfis')
module.exports = {
    ...ResolverUsuario,
    ...ResolverPerfis
}