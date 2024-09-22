const db = require("@data/db")

async function PerfilID(id) {
    try {
        const perfis = await db("perfis").select('*').where({ id: id }).first();
        if (!perfis || !perfis.length === 0) {
            throw new Error(`Usuario não encontrado com o ID =  ${id}`);
        }
        const perfilEnconstrado = {
            id: perfis.id,
            nome: perfis.nome,
            rotulo: perfis.rotulo
        }
        console.log(perfilEnconstrado);
        return perfilEnconstrado


    } catch (error) {
        throw new Error(`Usuario não encontrado com o ID =  ${id}`)

    }

}

module.exports = PerfilID;
