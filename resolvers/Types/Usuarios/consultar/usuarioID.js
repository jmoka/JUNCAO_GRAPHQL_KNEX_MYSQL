const db = require("@data/db");
const { format } = require("date-fns");

async function UsuarioID(id) {
    try {
        const usuarioID = await db("usuarios")
            .leftJoin("perfis", "usuarios.perfil", "=", "perfis.id") // Usar leftJoin para incluir usuários sem perfil
            .select(
                "usuarios.id",
                "usuarios.nome",
                "usuarios.email",
                "usuarios.status",
                "usuarios.data_criacao",
                "perfis.nome as perfil_nome", // Nome do perfil
                "perfis.rotulo as perfil_rotulo" // Rótulo do perfil
            )
            .where({ "usuarios.id": id }) // Use "usuarios.id" para evitar conflito de escopo
            .first();

        if (!usuarioID) {
            throw new Error("Não foi possível retornar nenhum usuário com esse ID");
        }

        // Agrupar os resultados para formato esperado pelo GraphQL
        const resultado = {
            id: usuarioID.id,
            nome: usuarioID.nome,
            email: usuarioID.email,
            status: usuarioID.status,
            dataCriacao: format(new Date(usuarioID.data_criacao), 'yyyy-MM-dd HH:mm:ss'), // Formatar a data
            perfil: {
                nome: usuarioID.perfil_nome || "Perfil não definido",
                rotulo: usuarioID.perfil_rotulo || "Rótulo não definido"
            }
        };
        console.log(resultado);
        return resultado;
    } catch (error) {
        console.error("Erro ao buscar usuário:", error.message); // Log do erro no console
        throw new Error("Não foi possível retornar o usuário com esse ID."); // Mensagem sem "cathe"
    }
}

module.exports = UsuarioID;



// consulta clearInterval

// query UsuarioID{
//     usuario_ID(id:1){
//       id
//       nome
//         email
//       status
//       dataCriacao
//       perfil{
//         nome
//         rotulo
//       }
//     }
//     }