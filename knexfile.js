const dotenv = require('dotenv'); // Importação ESM
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const config = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds'
    },
  },
};

module.exports = config;