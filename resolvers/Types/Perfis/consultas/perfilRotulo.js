const db = require("@data/db");

async function perfilRotulo(rotulo) {

    // if (!rotulo || rotulo.length === 0) {
    //     throw new Error(`Perfil não encontrado com o Rotulo ${rotulo}`);

    // }
    const perfil = await db("perfis")
        .select('*')
        .where({ rotulo: rotulo })
        .first();

    console.log(perfil);


    const perfilEncontrado = {
        Id: perfil.id,
        nome: perfil.nome,
        rotulo: perfil.rotulo
    }

    console.log(`Perfil Encontrado é => ${perfilEncontrado}`);
    return perfilEncontrado;



    // } catch (error) {
    //     console.log(rotulo);

    //     throw new Error(`1 Perfil não encontrado com o Rotulo ${rotulo}`);

    // }

}

module.exports = perfilRotulo;