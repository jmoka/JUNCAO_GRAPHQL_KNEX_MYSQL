# Aula sobre knex

## Inicializar Usando o package.json

- Crie um arquivo packege.json na raiz do projeto
- Cole o Script padrão relacionado no fim da pagina
- Salve
- Em seguida rode o seguinte comando

        npm install

## Instalação Manual das Dependencias

### Inicializar

    npm init -y

### Configurar packag.json

- Abra o arquivo package.json
- Apague o conteúdo
- Cole o Script abaixo
- Altere os Seguintes pontos
  - name = Coloque o nome do projeto
- Salve

            {
            "name": "juncao_graphql_knex_mysql",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
            "start": "nodemon --ext js,graphql",
            "client": "node client.js"
            },
            "keywords": [],
            "author": "",
            "license": "ISC",
            "dependencies": {
            },
            "devDependencies": {

            }
            }

### Intalação do Yarn - Opcional

- Instala o yarn caso quei usar o comando yarn

        npm install -g yarn ( opcional)

### Implantação do knex

#### Instalação Knex Global

    npm install -g knex

    yarn global add knex ( opcional)

#### Instalção Knex Local( recomendado )

    npm install knex

    yarn add knex ( opcional)

## Instalar GraphQl e o Apollo Server ( apollo server 4 e GraphQl 16)

    npm install @apollo/server graphql

    yarn add @apollo/server graphql ( opcional)

## Instale o module-alias

    npm install module-alias

## Instalar @graphql-tools/schema

    npm install @graphql-tools/schema

    yarn add @graphql-tools/schema ( opcional)

## Instalar graphql-tag

    npm install graphql-tag

    yarn add graphql-tag ( opcional)

## Instale a biblioteca dotenv

    npm install dotenv

    yarn add dotenv (opcional)

## Instalar o Axios

    npm install axios

    yarn add axios (opcional)

## Instalar cross-fetch

    npm install cross-fetch

    yarn add cross-fetch (opcional)

## Instalar node-fetch

    npm install node-fetch

    yarn add node-fetch (opcional)

## Instalar @graphql-tools/load-files

    npm install @graphql-tools/load-files

    npm install @graphql-tools/merge

## Mysql

    npm install mysql

    yarn add mysql (opcional)

## Instalar as devDependências

### Nodemon

    npm install --save-dev nodemon

    yarn add --dev nodemon (opcional)

### @babel/core

    npm install --save-dev @babel/core

    yarn add --dev @babel/core (opcional)

### @babel/node

    npm install --save-dev @babel/node

    yarn add --dev @babel/node (opcional)

### @babel/preset-env

    npm install --save-dev @babel/preset-env

    yarn add --dev @babel/preset-env (opcional)

### Instalar o mysql (uso o xammp)

     https://www.apachefriends.org/download.html

### Instalar o MariaDB

     https://mariadb.org/download/

### Criar uma Base de Dados

// Ou qualeur outro nome, desde que coloque o mesmo nome em .env ( DB_NAME=knexdb)
// No arquivo knexfile
// E nas Variavais de Ambiente do Windows
// Criar o arquivo .env

      "knexdb"

## VARIÁVEIS DE AMBIENTE

### Criar aoquivo .env

    Crie na raiz de seu projeto o arquivo .env

#### configuração arquivo .env

    DB_HOST=127.0.0.1       -   Informe aqui o caminho da rede de seu servidor, ou deixe como ta se for local
    DB_USER=root            -   Informe o usuario de seu Banco de Dados
    DB_PASS=                -   Informe a senha de seu Banco de Dados
    SENHA_MASTER =master    -   Informe a senha Master
    DB_NAME=knexdb          -   Informe o nome do Banco de Dados

### CONFIGURAÇÃO DO WINDOWS

// DIGITE NO WINDOWS
"VARIAVEIS DE AMBIENTE"

        APERTE "VARIAVEIS DEAMBIENTE"
        "VARIAVEIS DO SISTEMA"
        "NOVO"

// CRIE AS SEGUNTES VARIAVEIS E SALVE

    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASS=
    DB_NAME=knexdb
    SENHA_MASTER =master

## Migration

### Temos três migrations de criação das tabelas

// perfis
// usuarios
// usuario-perfis

# Inicializar servidor

// npx caso o apollo server estaja instalado localmente
// knex , se o apllo server estiver instalado grobalmnete

    knex migrate:latest

    npx knex migrate:latest

## Seend

## Tabela Perfis

### Iremos povoar a tabela perfis com 3 perfis

// user
// admin
// master

## Tabela Usuarios

### Iremos povoar a tabela usuarios com o usuario master

// usuario master

## Tabela Usuario-Perfis

### Iremos povoar com a peimira relação usuario master com perfil master

// usuario master 1 / perfil master 1

# packege.json Padrão

- Após a instalação de todas as dependencias oarquivo deve ficar dessa forma

                {
        "name": "nome do seu projeto",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "start": "nodemon --ext js,graphql",
            "client": "node client.js"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "dependencies": {
            "@apollo/server": "^4.11.0",
            "@graphql-tools/schema": "^10.0.6",
            "axios": "^1.7.7",
            "cross-fetch": "^4.0.0",
            "dotenv": "^16.4.5",
            "esm": "^3.2.25",
            "graphql": "^16.9.0",
            "graphql-tag": "^2.12.6",
            "knex": "^3.1.0",
            "mysql": "^2.18.1",
            "node-fetch": "^3.3.2"
        },
        "devDependencies": {
            "@babel/core": "^7.25.2",
            "@babel/node": "^7.25.0",
            "@babel/preset-env": "^7.25.4",
            "nodemon": "^3.1.4"
        }
        }

# Usando o module-alias

    Você pode simplificar o caminho de importação configurando um alias no Node.js,
    o que permite criar caminhos relativos mais curtos e fáceis de entender.
    Vou mostrar como fazer isso de duas maneiras:
    usando o module-alias e utilizando recursos nativos do Node.js

## Instale o module-alias

    npm install module-alias

## Coloque o código no index do projeto

    require('module-alias/register')

## Adicione os Aliases ao package.json

    {
    "name": "meu-projeto",
    "version": "1.0.0",
    "_moduleAliases": {
        "@config": "config"
    }
    }
