const db = require("@data/db")

module.exports = {
    async alterarUsuario(_, { user, filtro }) {
        const { id, nome, email } = filtro

        //     console.log(`id= ${id} , nome = ${nome}, email = ${email}  `);

        let usuarioEncontrado;

        const atualizacoes = {
            nome: user.nome,
            email: user.email,
            perfil: user.perfil,
            status: user.status
        };
        try {

            if (id) {
                usuarioEncontrado = await db("usuarios")
                    .where({ id })
                    .update(atualizacoes)
                usuarioEncontrado = await db("usuarios")
                    .where({ id }).first();

                return usuarioEncontrado;

            } else if (nome) {
                usuarioEncontrado = await db("usuarios")
                    .where({ nome })
                    .update(atualizacoes)
                usuarioEncontrado = await db("usuarios")
                    .where({ nome }).first();
                return usuarioEncontrado;

            } else if (email) {
                usuarioEncontrado = await db("usuarios")
                    .where({ email }).first()
                    .update(atualizacoes)
                return usuarioEncontrado;


            } else {
                throw new Error("Nenhum critério válido foi fornecido para atualizar o usuário.");

            }


        } catch (error) {
            throw new Error(`Erro ao atualizar usuário: ${error.message}`);
        }





    }
}
