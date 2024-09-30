const db = require("@data/db")

async function PerfilID(id) {
    try {
        const perfis = await db("perfis").select('*').where({ id: id }).first();

        const perfilEnconstrado = {
            id: perfis.id,
            nome: perfis.nome,
            rotulo: perfis.rotulo
        }
        return perfilEnconstrado


    } catch (error) {
        throw new Error(`Usuario não encontrado com o ID =  ${id}`)

    }

}

module.exports = PerfilID;

// -----------------------------



// query{
//     perfil_ID(id:1){
//           id
//       nome
//           rotulo
//     }
//   }