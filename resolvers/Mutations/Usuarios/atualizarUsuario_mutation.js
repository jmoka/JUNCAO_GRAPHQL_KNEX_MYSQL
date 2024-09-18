const db = require("@data/db")

module.exports = {
    async alterarUsuario(_, { args, filtro }) {
        const { id, nome, email } = filtro

        //     console.log(`id= ${id} , nome = ${nome}, email = ${email}  `);

        let usuarioEncontrado;

        const atualizacoes = {
            nome: args.nome,
            email: args.email,
            perfil: args.perfil,
            status: args.status
        };
        try {

            if (id) {
                usuarioEncontrado = await db("usuarios")
                    .where({ id })
                    .update(atualizacoes)
                usuarioEncontrado = await db("usuarios")
                    .where({ id }).first()
                    .then(resp => console.log(resp)
                    )

            } else if (nome) {
                usuarioEncontrado = await db("usuarios")
                    .where({ nome })
                    .update(atualizacoes)

                usuarioEncontrado = await db("usuarios")
                    .where({ nome }).first()


            } else if (email) {
                usuarioEncontrado = await db("usuarios")
                    .where({ email }).first()
                    .update(atualizacoes)


            } else {
                throw new Error("Nenhum critério válido foi fornecido para atualizar o usuário.");

            }


        } catch (error) {
            throw new Error(`Erro ao atualizar usuário: ${error.message}`);
        }





    }
}
