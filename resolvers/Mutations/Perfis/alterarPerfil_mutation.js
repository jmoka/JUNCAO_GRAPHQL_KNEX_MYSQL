const db = require("@data/db");


module.exports = {

    async alterarPerfil(_, { perfil, filtro }) {
        const { id, nome, rotulo } = filtro;

        if (id) {
            const idEnonstrado = await db("perfis").where({ id }).first()
            if (!idEnonstrado) {
                // console.log(`Perfil com Id ${id} não encontrado!!!`);
                throw new Error(`Perfil com Id ${id} não encontrado!!!`);
            }

            const novosDados = {
                nome: perfil.nome,
                rotulo: perfil.rotulo
            }
            // console.log("===NOVOS DADOS===");
            // console.log(novosDados);
            // console.log("===DADOS ANTIGOS===");
            // console.log(JSON.stringify(idEnonstrado));

            // console.log("===PERFIL ATUALIZADO===");
            await db("perfis")
                .where({ id })
                .update(novosDados)

            const perfilAtualizado = await db("perfis").where({ id }).first()

            // console.log(JSON.stringify(perfilAtualizado));



            return perfilAtualizado


        } else if (nome) {
            // console.log(nome);
            const nomeEnonstrado = await db("perfis").where({ nome }).first()
            if (!nomeEnonstrado) {
                // console.log(`Perfil com nome ${nome} não encontrado!!!`);
                throw new Error(`Perfil com nome ${nome} não encontrado!!!`);
            }

            const novosDados = {
                nome: perfil.nome,
                rotulo: perfil.rotulo
            }
            // console.log("===NOVOS DADOS===");
            // console.log(novosDados);
            // console.log("===DADOS ANTIGOS===");
            // console.log(JSON.stringify(nomeEnonstrado));

            // console.log("===PERFIL ATUALIZADO===");
            await db("perfis")
                .where({ nome })
                .update(novosDados)

            const perfilAtualizado = await db("perfis").where({ nome }).first()

            // console.log(JSON.stringify(perfilAtualizado));



            return perfilAtualizado


        } else if (rotulo) {
            // console.log(rotulo);
            const rotuloEnonstrado = await db("perfis").where({ rotulo }).first()
            if (!rotuloEnonstrado) {
                // console.log(`Perfil com rotulo ${rotulo} não encontrado!!!`);
                throw new Error(`Perfil com rotulo ${rotulo} não encontrado!!!`);
            }

            const novosDados = {
                nome: perfil.nome,
                rotulo: perfil.rotulo
            }
            // console.log("===NOVOS DADOS===");
            // console.log(novosDados);
            // console.log("===DADOS ANTIGOS===");
            // console.log(JSON.stringify(rotuloEnonstrado));

            // console.log("===PERFIL ATUALIZADO===");
            await db("perfis")
                .where({ rotulo })
                .update(novosDados)

            const perfilAtualizado = await db("perfis").where({ rotulo }).first()

            // console.log(JSON.stringify(perfilAtualizado));



            return perfilAtualizado

        }

    }



}


//----------------------------------
// Alterar por ID
//------------------------------
// mutation{
//     alterarPerfil(
//         perfil:{
//         nome:"LOOdK"
//         rotulo:"FLdAY"
        
//       }    
//       filtro:{
//         id:8
//       }
//     )
//     {
//       id
//       nome
//       rotulo
     
      
//   }
  
//     }


//----------------------------------
// Alterar por NOME
//------------------------------


// mutation{
//     alterarPerfil(
//         perfil:{
//         nome:"LOOdK"
//         rotulo:"FLdddddddAY"
        
//       }    
//       filtro:{
//         nome:"LOOdK"
//       }
//     )
//     {
//       id
//       nome
//       rotulo
     
      
//   }
  
//     }

//----------------------------------
// Alterar por ROTULO
//------------------------------
// mutation{
//     alterarPerfil(
//         perfil:{
//         nome:"zeca"
//         rotulo:"FLdddddddAY"
        
//       }    
//       filtro:{
//         rotulo:"FLdddddddAY"
//       }
//     )
//     {
//       id
//       nome
//       rotulo
     
      
//   }
  
//     }
  