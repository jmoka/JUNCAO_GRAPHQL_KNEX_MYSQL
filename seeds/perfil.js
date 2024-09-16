/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {

  await knex('perfis').insert([
    { nome: "user", rotulo: 'Usuário' },
    { nome: "admin", rotulo: 'Administrador' },
    { nome: "master", rotulo: 'Master' }
  ]);
};
