const db = require("@data/db");

async function TodosPerfis() {
    try {
        const PerfisEnconstrados = await db("perfis")
        return PerfisEnconstrados
    } catch (error) {
        throw new Error(`Perfil não encontrado com o nome ${nome}`);
    }
}
module.exports = TodosPerfis;

//---------------------------------------

// query{
//     perfis{
//       id
//        nome
//       rotulo
//     }
//   }
