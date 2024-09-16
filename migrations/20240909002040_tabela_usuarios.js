/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable("usuarios", table => {
            table.increments("id").primary()
            table.string("nome", 255).notNullable()
            table.string("email", 255).notNullable().unique()
            table.string("senha", 60).notNullable()
            table.integer("perfil").notNullable()
            table.string("status").notNullable()
            table.timestamp("data_criacao").defaultTo(knex.fn.now())
        }).then(function () {
            return knex("usuarios").insert([
                { nome: "master", email: 'master@master.com', senha: process.env.SENHA_MASTER, perfil: 1, status: "ATIVO" }

            ])
        })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("usuarios")

};
exports.config = { transaction: false };