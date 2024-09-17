const db = require("@data/db");
const { validarEmail } = require("@data/validacoes/ValidarUsuarios/validarEmail")

const perfilDefault = 1;
const statuDefault = 'ATIVO'

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


}

// Consulta do Cliente

// mutation{
//     novoUsuario(
//       args: {
//         nome: "nomesuaio",
//         email: "EmaiUsurio3@xxx.com",
//         senha: "12ddds3456",
//     }
//     ) {
//       nome
//       email   
//       status
     
//       }
//   }