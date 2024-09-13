const { usuarios, proximoId } = require("../../../data/db");
const { validarEmail, validarEmailExistnte } = require("../../../data/validacoes/validarEmail")
const { validarIdUsuarios } = require("../../../data/validacoes/validarID")

const perfilDefault = 1;
const statuDefault = 'ATIVO'
let indice;

// pode usar  a o operador expred .... usando o args
// ... args espalha todos os atributos que vem nos argumentos 
// quando você vai usar todos essa é a melhor forma
// caso contrario , você quira somente um ou dois itens ou de forma explicita usa-se { nome, email, idade }
// { nome, email, idade } ou args
module.exports = {

    novoUsuario(_, { args }) {
        validarEmail(args.email) // envia para a função de validação de email o email digitado

        const novo = {
            id: proximoId(),
            ...args,
            // nome,
            // email,
            // idade,
            perfil_id: perfilDefault,
            status: statuDefault
        }
        usuarios.push(novo)
        return novo
    },
    excluirUsuario(_, { filtro }) {
        const { id, email } = filtro
        if (id) {
            indice = validarIdUsuarios(id)
        } else if (email) {
            indice = validarEmailExistnte(email)
        } else {
            throw new Error("Id ou Email deve ser fornecido para alterar o usuário.");
        }
        if (indice === undefined) {
            throw new Error("Usuário não encontrado.");
        }
        const excluido = usuarios.splice(indice, 1)
        return excluido ? excluido[0] : null

    },
    alterarUsuario(_, { args, filtro }) {

        const { id, email } = filtro
        console.log("id-alteração ===>" + id);

        if (id) {
            indice = validarIdUsuarios(id)

        } else if (email) {
            indice = validarEmailExistnte(email)
        } else {
            throw new Error("Id ou Email deve ser fornecido para alterar o usuário.");
        }

        if (indice === undefined) {
            throw new Error("Usuário não encontrado.");
        }

        const usuarioAlterado = {
            ...usuarios[indice],
            ...args,
        }
        usuarios.splice(indice, 1, usuarioAlterado)
        return usuarioAlterado

    }
}

