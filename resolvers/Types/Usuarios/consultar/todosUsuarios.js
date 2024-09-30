const db = require("@data/db")
require('module-alias/register')
const { format } = require('date-fns');
async function TodosUsuarios() {
    try {
        const usuarios = await db("usuarios")
            .leftJoin("perfis", "usuarios.perfil", "=", "perfis.id") // Usar leftJoin para incluir usuários sem perfil
            .select(
                "usuarios.id",
                "usuarios.nome",
                "usuarios.email",
                "usuarios.status",
                "usuarios.data_criacao",
                "perfis.nome as perfil_nome", // Nome do perfil
                "perfis.rotulo as perfil_rotulo" // Rótulo do perfil
            );
        if (!usuarios || usuarios.length === 0) {
            throw new Error("Não foi possível retornar nenhum usuário ou a tabela está vazia");
        }
        // Agrupar os resultados para formato esperado pelo GraphQL
        const resultado = usuarios.map(usuario => ({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            status: usuario.status,
            dataCriacao: format(new Date(usuario.data_criacao), 'yyyy-MM-dd HH:mm:ss'), // Formatar a data
            perfil: {
                nome: usuario.perfil_nome,
                rotulo: usuario.perfil_rotulo
            }
        }));
        // console.log(...resultado);
        return resultado;
    } catch (error) {
        return new Error("Não foi possível retornar nenhum usuário");
    }
}
module.exports = TodosUsuarios;

// consulta no cliente

// query ConsultarUsuarios {
//     usuarios{
//      id
//      nome
//      email
//      status
//      dataCriacao
//      perfil{
//        nome
//        rotulo
//      }
//    }
//    }