const db = require("@data/db");

async function perfilRotulo(rotulo) {
    try {

        const perfil = await db("perfis")
            .select('*')
            .where({ rotulo: rotulo })
            .first();

        const perfilEncontrado = {
            Id: perfil.id,
            nome: perfil.nome,
            rotulo: perfil.rotulo
        }

        return perfilEncontrado;


    } catch (error) {
        throw new Error(`Usuario não encontrado com o ID =  ${rotulo}`)
    }



}

module.exports = perfilRotulo;

// --------------------------------

// query{
//     perfil_Rotulo(rotulo:"Master"){
//           id
//       nome
//           rotulo
//     }
//   }