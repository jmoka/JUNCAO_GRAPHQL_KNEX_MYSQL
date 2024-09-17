const db = require("@data/db");
const validarEmail = require("@data/validacoes/ValidarUsuarios/validarEmail");
const validarIdUsuarios = require("@data/validacoes/ValidarUsuarios/validarID");
const validarNomeUsuarios = require("@data/validacoes/ValidarUsuarios/validarNome");

module.exports = {
    async excluirUsuario(_, { filtro }) {
        const { id, nome, email } = filtro;

        // Verificar se pelo menos um dos valores foi fornecido
        if (!id && !nome && !email) {
            throw new Error("Informe o ID, nome ou email.");
        }

        let usuarioEncontrado;
        let criterio = {};

        // Validar e buscar o usuário
        if (id) {
            await validarIdUsuarios(id);
            usuarioEncontrado = await db("usuarios").where({ id }).first();
            criterio = { id };
        } else if (nome) {
            await validarNomeUsuarios(nome);
            usuarioEncontrado = await db("usuarios").where({ nome }).first();
            criterio = { nome };
        } else if (email) {
            await validarEmail(email);
            usuarioEncontrado = await db("usuarios").where({ email }).first();
            criterio = { email };
        }

        // Verificar se o usuário foi encontrado
        if (!usuarioEncontrado) {
            throw new Error("Usuário não encontrado para o critério fornecido.");
        }

        // Deletar o usuário
        await db("usuarios").where(criterio).del();
        console.log(`Usuário com ${JSON.stringify(criterio)} deletado.`);
        // Retornar uma mensagem de sucesso com informações do usuário
        return {
            message: `Usuário '${usuarioEncontrado.nome}' deletado com sucesso`,
            nome: usuarioEncontrado.nome,
            email: usuarioEncontrado.email,
            id: usuarioEncontrado.id
        };
    }
};
