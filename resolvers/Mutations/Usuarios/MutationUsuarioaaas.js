const db = require("@data/db");
const { validarEmail, validarEmailExistnte } = require("@data/validacoes/ValidarUsuarios/validarEmail")
const { validarIdUsuarios } = require("@data/validacoes/ValidarUsuarios/validarID")

const perfilDefault = 1;
const statuDefault = 'ATIVO'
let indice;

// pode usar  a o operador expred .... usando o args
// ... args espalha todos os atributos que vem nos argumentos 
// quando você vai usar todos essa é a melhor forma
// caso contrario , você quira somente um ou dois itens ou de forma explicita usa-se { nome, email, idade }
// { nome, email, idade } ou args
module.exports = {

    async novoUsuario(_, { args }) {
        try {
            // Verifica se o e-mail já está cadastrado
            const emailExistente = await validarEmail(args.email);
            if (emailExistente) {
                console.log("Usuário já cadastrado com esse email");
                throw new Error("Usuário já cadastrado com esse email = " + args.email);
            }
            // Cria um novo usuário usando os atributos fornecidos em args
            const novoUsuario = {
                nome: args.nome,
                email: args.email,
                senha: args.senha,
                perfil: args.perfil || perfilDefault, // Usa perfilDefault se não for fornecido          
                status: args.status || statuDefault // Usa statuDefault se não for fornecido
            };

            // Insere o novo usuário no banco de dados
            await db('usuarios').insert(novoUsuario);
            // Retorna o usuário criado
            console.log("Usuário Cadastrado com Sucesso");
            return novoUsuario;
        } catch (error) {
            throw new Error(`Erro ao criar usuário: ${error.message}`);
        }
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

