const db = require("@data/db");
const validarEmail = require("@data/validacoes/ValidarUsuarios/validarEmail");
const validarIdUsuarios = require("@data/validacoes/ValidarUsuarios/validarID");
const validarNomeUsuarios = require("@data/validacoes/ValidarUsuarios/validarNome");

module.exports = {
    async excluirUsuario(_, { filtro }) {
        const { id, nome, email } = filtro;

        // Verificar se pelo menos um dos valores foi fornecido
        if (!id && !nome && !email) {
            throw new Error("Informe o ID, nome ou email.");
        }

        let usuarioEncontrado;
        let criterio = {};

        // Validar e buscar o usuário
        if (id) {
            await validarIdUsuarios(id);
            usuarioEncontrado = await db("usuarios").where({ id }).first();
            criterio = { id };
            await db("usuario-perfis").where({ usuario_id: id }).del()

            // console.log(`Usuario deletado da tabela de referência com perfis ${JSON.stringify(usuarioEncontrado)}`);
        } else if (nome) {
            await validarNomeUsuarios(nome);
            usuarioEncontrado = await db("usuarios").where({ nome }).first();
            criterio = { nome };
            await db("usuario-perfis").where({ usuario_id: usuarioEncontrado.id }).del()
            // console.log(`Usuario deletado da tabela de referência com perfis ${JSON.stringify(usuarioEncontrado)}`);


        } else if (email) {
            await validarEmail(email);
            usuarioEncontrado = await db("usuarios").where({ email }).first();
            criterio = { email };
            await db("usuario-perfis").where({ usuario_id: usuarioEncontrado.id }).del()
            // console.log(`Usuario deletado da tabela de referência com perfis ${JSON.stringify(usuarioEncontrado)}`);
        }
        await db("usuarios").where(criterio).del()


        // console.log(`Usuário com ${JSON.stringify(criterio)} deletado.`);


        const perfil = await db("perfis").where({ id: usuarioEncontrado.perfil }).first()
        const retorno = {
            id: usuarioEncontrado.id,
            nome: usuarioEncontrado.nome,
            email: usuarioEncontrado.email,
            status: usuarioEncontrado.status,
            dataCriacao: usuarioEncontrado.data_criacao,
            perfil: {
                id: perfil.id,
                nome: perfil.nome,
                rotulo: perfil.rotulo
            }
        }
        return retorno;
    },

};

// Excluir Usuarios



// mutation{
//     excluirUsuario(
//     filtro:{
//        id:318
//        nome:""
//        email:""
//     }  
//     ){
//       nome
//         id
//       email
//       status
//       dataCriacao
//     perfil{
//       nome
//       rotulo
//     }
    
      
//     }
      
//     }


