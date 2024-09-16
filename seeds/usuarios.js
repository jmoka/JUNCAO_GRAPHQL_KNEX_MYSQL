
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {

    await knex('usuarios').insert([
        { nome: "admin", email: "admin@jota.com", senha: "123", perfil: 1, status: "ATIVO" },
    ]);
};
