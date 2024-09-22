const db = require("@data/db");

async function PerfilNome(nome) {
    console.log(`Nome =  ${nome}`);

    const perfil = await db("perfis")
        .select('*')
        .where({ nome: nome }).first()

    const perfilEnconstrado = {
        id: perfil.id,
        nome: perfil.nome,
        rotulo: perfil.rotulo
    }
    console.log(perfilEnconstrado);
    return perfilEnconstrado


}

module.exports = PerfilNome;