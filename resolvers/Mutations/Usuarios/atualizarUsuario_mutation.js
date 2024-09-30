const db = require("@data/db")
module.exports = {
    async alterarUsuario(_, { user, filtro }) {
        const { id, nome, email } = filtro
       
        let usuarioEncontrado;
        const atualizacoes = {
            nome: user.nome,
            email: user.email,
            perfil: user.perfil,
            status: user.status,
        };
        try {
            if (id) {
                usuarioEncontrado = await db("usuarios")
                    .where({ id })
                    .update(atualizacoes)
                usuarioEncontrado = await db("usuarios")
                    .where({ id }).first();
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
            } else if (nome) {
                usuarioEncontrado = await db("usuarios")
                    .where({ nome })
                    .update(atualizacoes)
                usuarioEncontrado = await db("usuarios")
                    .where({ nome }).first();
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
            } else if (email) {
             
                usuarioEncontrado = await db("usuarios")
                    .where({ email })
                    .update(atualizacoes)
                usuarioEncontrado = await db("usuarios")
                    .where({ email }).first();
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
            } else {
                throw new Error("Nenhum critério válido foi fornecido para atualizar o usuário.");
            }
        } catch (error) {
            throw new Error(`Erro ao atualizar usuário: ${error.message}`);
        }
    }
}


// mutation{
//     alterarUsuario(
//         user:{
//         nome:"j"
//         email:"jjok~~ta@xxx.com"
//         status:INATIVO
//         perfil:3
//       }    
//       filtro:{
//          id: 3
//          nome: "jooa"
//         email:"jjok~~ta@xxx.com"
//       }
//     )
//     {
//       id
//       nome
//       email
//       status
//       dataCriacao
//       perfil{
//         id
//         nome
//         rotulo
//     }
      
//   }
  
//     }
  
  
      
    
  
  