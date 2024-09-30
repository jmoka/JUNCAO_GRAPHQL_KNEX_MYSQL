const db = require("@data/db")

module.exports = {

    async excluirPerfil(_, { filtro }) {

        const { id, nome, rotulo } = filtro;

        if (id) {
            // console.log(id);
            const idEnonstrado = await db("perfis").where({ id }).first()
            if (!idEnonstrado) {
                // console.log(`Perfil com Id ${id} não encontrado!!!`);
                throw new Error(`Perfil com Id ${id} não encontrado!!!`);
            }
            // console.log(JSON.stringify(idEnonstrado));
            await db("perfis").where({ id }).first().del()
            return idEnonstrado


        } else if (nome) {
            // console.log(nome);
            const nomeEncontrado = await db("perfis").where({ nome }).first()
            if (!nomeEncontrado) {
                // console.log(`Perfil com Nome ${nome} não encontrado!!!`);
                throw new Error(`Perfil com Nome ${nome} não encontrado!!!`);
            }
            // console.log(JSON.stringify(nomeEncontrado));
            await db("perfis").where({ nome }).first().del()
            return nomeEncontrado


        } else if (rotulo) {
            // console.log(rotulo);
            const rotuloEncontrado = await db("perfis").where({ rotulo }).first()
            if (!rotuloEncontrado) {
                // console.log(`Perfil com rotulo ${rotulo} não encontrado!!!`);
                throw new Error(`Perfil com rotulo ${rotulo} não encontrado!!!`);
            }
            // console.log(JSON.stringify(rotuloEncontrado));
            await db("perfis").where({ rotulo }).first().del()
            return rotuloEncontrado

        }

    }

}


//----------------------------------
// consultar por ID
//------------------------------

// mutation{
//     excluirPerfil(
//       filtro:{
//         id:5
//       }
//   ){
//     id
//     nome
//       rotulo
//     }
//   }

//----------------------------------
// consultar por NOME
//------------------------------
// mutation{
//     excluirPerfil(
//       filtro:{
//         nome:"frontEnsd"
//       }
//   ){
//     id
//     nome
//       rotulo
//     }
//   }

//----------------------------------
// consultar por ROTULO
//------------------------------

// mutation{
//     excluirPerfil(
//       filtro:{
//         rotulo:"Webd Dessigner"
//       }
//   ){
//     id
//     nome
//       rotulo
//     }
//   }