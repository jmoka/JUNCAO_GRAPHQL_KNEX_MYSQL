const db = require("@data/db");

module.exports = {

    async novoPerfil(_, { perfil }) {
        try {
            const perfis = await db("perfis")
            const novoPerfil = {
                nome: perfil.nome,
                rotulo: perfil.rotulo
            }
            for (itens of perfis) {
                if (itens.nome === perfil.nome) {
                    // console.log("Nome ja Cadastrado   =>" + perfil.nome);
                    return new Error("Nome ja Cadastrado =>" + perfil.nome);
                }
            }
            const perfilCadastrado = await db("perfis").insert(novoPerfil)

            for (itens of perfilCadastrado) {
                // console.log(itens);
                const perfilNovo = await db("perfis").select(
                    "id",
                    "nome",
                    "rotulo"
                ).where({ id: itens }).first()


                const retorno = {
                    id: perfilNovo.id,
                    nome: perfilNovo.nome,
                    rotulo: perfilNovo.rotulo
                }

                // console.log(retorno);


                return retorno
            }


        }
        catch (error) {
            throw new Error(`Erro ao criar usuário: ${error.message} `);
        }
    }
}


//----------------------------------

// mutation{
//     novoPerfil(
//    perfil:{
//     nome:"XXXX"
//      rotulo:"zzzzzz"
//   }
//     ){
//   id
//   nome
//   rotulo
//     }
//   }

