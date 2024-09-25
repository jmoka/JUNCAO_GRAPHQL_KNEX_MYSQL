const db = require("@data/db");
const { forEachField } = require("apollo-server");

async function TodosPerfis() {
    try {
        console.log("todos os prefis");
        const PerfisEnconstrados = await db("perfis")
            .select(
                '*'
            )
        for (item of PerfisEnconstrados) {
            const perfis = {
                id: item.id,
                nome: item.nome,
                rotulo: item.rotulo
            }
            console.log(perfis);

        }
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
