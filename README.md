# Sistema esta Configurado para Produção

- Dessa forma está bloqueado o Playground ara efetuar os testes
- Para colocar o sistema em desenvolvimento faça o seguinte
- Abra o arquivo

            knexfile.js

- E altere:

## Modo Produção

            NODE_ENV=production

## Modo Desenvolvimento

            NODE_ENV=development

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
                "_moduleAliases": {
                    "@data": "data"
                },
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

- Instala o yarn caso queira usar o comando yarn

        npm install -g yarn ( opcional)

### Implantação do knex

#### Instalação Knex Global ( Opcional)

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

## Instalar graphql-import

    npm install graphql-import
    yarn add graphql-import ( opcional)

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

## Instalar date-fns

    npm install date-fns
    yarn add date-fns

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

### Crie uma base ded dados com o nome

    knexdb

## VARIÁVEIS DE AMBIENTE

### Criar uma arquivo de conexão com a Base de Dados

### Criar aoquivo .env

    Crie na raiz de seu projeto o arquivo .env

### Dentro do arquivo .env

    DB_HOST=127.0.0.1       -   Informe aqui o caminho da rede de seu servidor, ou deixe como ta se for local
    DB_USER=root            -   Informe o usuario de seu Banco de Dados
    DB_PASS=                -   Informe a senha de seu Banco de Dados
    SENHA_MASTER =master    -   Informe a senha Master
    DB_NAME=knexdb          -   Informe o nome do Banco de Dados

### No arquivo knexfile

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

### CONFIGURAÇÃO VARIÁVEIS DE AMBIENTE NO WINDOWS

// DIGITE NO WINDOWS

"VARIAVEIS DE AMBIENTE"

        APERTE "VARIAVEIS DEAMBIENTE"
        "VARIAVEIS DO SISTEMA"
        "NOVO"

// CRIE AS SEGUNTES VARIAVEIS E SALVE

    nome: DB_HOST , valor: 127.0.0.1
    nome: DB_USER , valor:root
    nome: DB_PASS , valor:
    nome: DB_NAME , valor: knexdb
    nome: SENHA_MASTER , valor:master

# Inicializar servidor

// npx caso o apollo server estaja instalado localmente
// knex , se o apllo server estiver instalado grobalmnete

    knex migrate:latest
    npx knex migrate:latest

## Migration

### Temos três migrations de criação das tabelas

### Vamos Criar as Três tabelas, rode o comando

    knex migrate:latest
    ou
    npx kanex migrate:latest

#### perfis

    20240909002019_tabela_perfis

#### usuarios

    20240909002040_tabela_usuarios

#### usuario-perfis

    20240909002057_tabela_usuarios_parfis

## Seend

// Iremos povoar as tabelas criadas
// cada seed povoa uma tabela específica
// rode o seguinte comando abaixo

    knex seed:run
    ou
    npx knex seed:run

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

- Após a instalação de todas as dependencias o arquivo deve ficar dessa forma

                    {
        "name": "juncao_graphql_knex_mysql",
        "version": "1.0.0",
        "_moduleAliases": {
            "@data": "data"
        },
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
            "@graphql-tools/schema": "^10.0.6",
            "apollo-server": "^2.4.8",
            "axios": "^1.7.7",
            "cross-fetch": "^4.0.0",
            "date-fns": "^3.6.0",
            "dotenv": "^16.4.5",
            "graphql": "^14.2.1",
            "graphql-import": "^0.7.1",
            "graphql-tag": "^2.12.6",
            "knex": "^3.1.0",
            "module-alias": "^2.2.3",
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
        "@data": "data"
    }
    }

# REALIZANDO CONSULTAS

## USUARIOS CONSULTAR

### TODOS USUARIOS

    query ConsultarUsuarios {
    usuarios{
     id
     nome
     email
     status
     dataCriacao
     perfil{
       nome
       rotulo
     }

}
}

### USUARIO POR ID

    query{
    usuario_ID(id: 313) {
      id
      nome
      email
      status
      perfil {
        id
        nome
        rotulo
      }
      dataCriacao
    }

}

### USUARIOS POR NOME

    query{
    usuario_Nome(nome:"dddddsddiddddd"){
      id
      nome
      email
      status
      perfil {
        id
        nome
        rotulo
      }
      dataCriacao
    }

}

## PERFIS CONSULTAR

### PERFIS POR ID

    query{
    perfil_ID(id:1){
         id
        nome
         rotulo
    }
     }

### PERFIS POR NOME

    query{
    perfil_Nome(nome:"master"){
        id
        nome
        rotulo
    }
    }

### TODOS PERFIS

    query{
    perfis{
        id
        nome
        rotulo
    }
    }

# MUTATIONS

## CRUD USUARIOS

### CRIAR USUARIO

    mutation{
    novoUsuario(
      user: {
        nome: "d",
        email: "df@xxx.com",
        senha: "12fddsds34d56",
        perfil: 1,
        status: ATIVO
    }
    ) {
    id
      nome
      email
      status
    	perfil{
        id
    			nome
    			rotulo
      }
    dataCriacao
      }
    }

### EXCLUIR USUARIO

// No filtro use apenas uma opção id, nome ou email

    mutation{
        excluirUsuario(
        filtro:{
        id:318
        nome:""
        email:""
        }
        ){
        nome
            id
        email
        status
        dataCriacao
        perfil{
        nome
        rotulo
        }
        }
        }

### ALTERAR USUARIO

// No filtro use apenas uma opção id, nome ou email

        mutation{
            alterarUsuario(
                user:{
                    nome:"j"
                    email:"jjok~~ta@xxx.com"
                    status:INATIVO
                    perfil:3
            }
                filtro:{
                    id: 3
                    nome: "jooa"
                    email:"jjok~~ta@xxx.com"
            }
            )
            {
                id
                nome
                email
                status
                dataCriacao
                perfil{
                    id
                    nome
                    rotulo
                }
        }
            }

## CRUD PERFIS

### CRIAR PERFIL

    mutation{
        novoPerfil(
    perfil:{
        nome:"XXXX"
        rotulo:"zzzzzz"
    }
        ){
    id
    nome
    rotulo
        }
    }

### EXCLUIR PERFIL

    ----------------------------------
    consultar por ID
    ------------------------------
        mutation{
            excluirPerfil(
            filtro:{
                id:5
            }
        ){
            id
            nome
            rotulo
            }
        }
    ----------------------------------
    consultar por NOME
    ------------------------------
        mutation{
            excluirPerfil(
            filtro:{
                nome:"frontEnsd"
            }
        ){
            id
            nome
            rotulo
            }
        }
        ----------------------------------
        consultar por ROTULO
        ------------------------------
        mutation{
            excluirPerfil(
            filtro:{
                rotulo:"Webd Dessigner"
            }
        ){
            id
            nome
            rotulo
            }
        }

### ALTERAR PERFIL

        ----------------------------------
        Alterar por ID
        ------------------------------
        mutation{
            alterarPerfil(
                perfil:{
                nome:"LOOdK"
                rotulo:"FLdAY"
            }
            filtro:{
                id:8
            }
            )
            {
            id
            nome
            rotulo
        }
            }
        ----------------------------------
        Alterar por NOME
        ------------------------------
        mutation{
            alterarPerfil(
                perfil:{
                nome:"LOOdK"
                rotulo:"FLdddddddAY"
            }
            filtro:{
                nome:"LOOdK"
            }
            )
            {
            id
            nome
            rotulo
        }
            }
        ----------------------------------
        Alterar por ROTULO
        ------------------------------
        mutation{
            alterarPerfil(
                perfil:{
                nome:"zeca"
                rotulo:"FLdddddddAY"
            }
            filtro:{
                rotulo:"FLdddddddAY"
            }
            )
            {
            id
            nome
            rotulo
        }
            }
