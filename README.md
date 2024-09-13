# Aula sobre knex

## implantação do knex

### Instalação Global

    npm install -g knex

### Instalção Local

    npm install knex

## Instale a biblioteca dotenv

    npm install dotenv

## Mysql

    npm install mysql

## Instalar as Dependências

    npm install

### Instalar o mysql (uso o xammp)

     https://www.apachefriends.org/download.html

### Instalar o MariaDB

     https://mariadb.org/download/

### Criar uma Base de Dados

// Ou qualeur outro nome, desde que coloque o mesmo nome em .env ( DB_NAME=knexdb)
// No arquivo knexfile
// E nas Variavais de Ambiente do Windows

      "knexdb"

## VARIÁVEIS DE AMBIENTE

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
// npx caso estaja instalado localmente
// knex , se estiver instalado grobalmnete

    knex migrate:latest

    npx knex migrate:latest

## Seend

## Tabela Perfis

### Iremos povoar a tabela perfis com 3 perfis

// commun
// admin
// master

## Tabela Usuarios

### Iremos povoar a tabela usuarios com o usuario master

// usuario master

## Tabela Usuario-Perfis

### Iremos povoar com a peimira relação usuario master com perfil master

// usuario master 1 / perfil master 1
