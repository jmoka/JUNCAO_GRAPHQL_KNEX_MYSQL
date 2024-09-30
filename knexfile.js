const dotenv = require('dotenv');
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
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'mysql', // ou outro cliente que você estiver usando em produção
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306, // Certifique-se de definir a porta correta
      ssl: { // Opcional: Se o seu banco de dados requer SSL
        rejectUnauthorized: false
      }
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds'
    },
    pool: {
      min: 2,
      max: 20
    },
    // Outras opções específicas para produção podem ser adicionadas aqui
  },
};

module.exports = config;
