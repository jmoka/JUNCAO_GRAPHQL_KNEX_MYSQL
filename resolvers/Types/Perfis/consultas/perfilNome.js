const db = require("@data/db");

async function PerfilNome(nome) {
    try {
        const perfil = await db("perfis")
            .select('*')
            .where({ nome: nome }).first()

        const perfilEnconstrado = {
            id: perfil.id,
            nome: perfil.nome,
            rotulo: perfil.rotulo
        }

        return perfilEnconstrado

    } catch (error) {
        throw new Error(`Usuario não encontrado com o Nome =  ${nome}`)

    }


}

module.exports = PerfilNome;

//-------------------------------

// query{
//     perfil_Nome(nome:"master"){
//           id
//       nome
//           rotulo
//     }
//   }