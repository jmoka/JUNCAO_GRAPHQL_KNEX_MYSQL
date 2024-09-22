const db = require("@data/db")

async function TodosPerfis() {
    try {
        console.log("todos os prefis");
        const PerfisEnconstrados = await db("perfis")
            .select(
                '*'
            )
        if (!PerfisEnconstrados || !PerfisEnconstrados.length === 0) {
            throw new Error(`Perfil não encontrado com o nome ${nome}`);

        }

        return PerfisEnconstrados

    } catch (error) {
        throw new Error(`Perfil não encontrado com o nome ${nome}`);

    }


}

module.exports = TodosPerfis;