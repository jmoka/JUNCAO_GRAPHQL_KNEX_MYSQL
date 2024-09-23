const db = require('@data/db');

async function validarEmail(email) {
    try {
        // Recupera todos os usuários da base de dados
        const usuarios = await db("usuarios");
        // Filtra os usuários com o email especificado
        const EmailEncontrado = usuarios.filter(u => u.email === email).length > 0;
        console.log("EmailEncontrado= " + EmailEncontrado);
        // Retorna verdadeiro True se o e-mail for encontrado, caso contrário, falso
        return EmailEncontrado

    } catch (error) {
        throw new Error("Algo deu errado, verifique sua conexão com o banco de dados");
    }
}

module.exports = validarEmail;
