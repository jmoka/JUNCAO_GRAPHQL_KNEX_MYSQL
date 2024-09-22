const db = require("@data/db");
const validarEmail = require("@data/validacoes/ValidarUsuarios/validarEmail");
const {Usuario_ID} =  require("../../Types/Usuarios/consultar/usuarioID")
const perfilDefault = 1;
const statuDefault = 'ATIVO'

// pode usar  a o operador expred .... usando o args
// ... args espalha todos os atributos que vem nos argumentos 
// quando você vai usar todos essa é a melhor forma
// caso contrario , você quira somente um ou dois itens ou de forma explicita usa-se { nome, email, idade }
// { nome, email, idade } ou args
module.exports = {

    async novoUsuario(_, { user }) {
        try {
            // Verifica se o e-mail já está cadastrado
            const emailExistente = await validarEmail(user.email);
            if (emailExistente) {
                console.log("Usuário já cadastrado com esse email");
                throw new Error("Usuário já cadastrado com esse email = " + user.email);
            }
            // Cria um novo usuário usando os atributos fornecidos em user
            let UsuarioEnviado = {
                nome: user.nome,
                email: user.email,
                senha: user.senha,
                perfil: user.perfil || perfilDefault, // Usa perfilDefault se não for fornecido          
                status: user.status || statuDefault // Usa statuDefault se não for fornecido
            };

            // Insere o novo usuário no banco de dados
             const usuarioInserido = await db('usuarios').insert(UsuarioEnviado)
     
            return Usuario_ID(usuarioInserido)
            
            }    
                 
            
         catch (error) {
            throw new Error(`Erro ao criar usuário: ${ error.message } `);
        }
}}
          
           
          
              
                
                
                
   
                
            
                
            //     novoUsuario = {
            //         id: novoUsuarioCadastrado.id,
            //         nome: user.nome,
            //         email: user.email,
            //         senha: user.senha,
            //         perfil: user.perfil || perfilDefault, // Usa perfilDefault se não for fornecido          
            //         status: user.status || statuDefault // Usa statuDefault se não for fornecido
            //     };
            //     console.log(novoUsuario);
            //     return novoUsuario
                
              
               
            // }
           





// Consulta do Cliente

// mutation{
//     novoUsuario(
//       user: {
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