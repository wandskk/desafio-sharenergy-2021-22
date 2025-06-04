# Backend - Sharenergy Challenge

Este é o backend do desafio Sharenergy 2021/22, desenvolvido em Node.js com Express, Prisma e PostgreSQL.

## Instalação

```bash
cd backend
npm install
```

## Configuração do Banco de Dados

- Certifique-se de ter uma instância do PostgreSQL rodando.
- Configure a variável de ambiente `DATABASE_URL` no arquivo `.env` com a string de conexão do seu banco.
- Para criar as tabelas e o client Prisma, rode:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Rodando o projeto

```bash
npm run dev
```

## Tecnologias principais
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- CORS 