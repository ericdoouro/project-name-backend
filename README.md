# News Explorer — Back-end

API REST desenvolvida com Node.js e Express para dar suporte à aplicação News Explorer. O servidor é responsável pelo cadastro e autenticação de usuários, gerenciamento de artigos salvos e comunicação com o banco de dados MongoDB.

O projeto foi desenvolvido como parte do Projeto Final da formação Web Development da TripleTen.

## Demonstração

**Aplicação:** https://project-name-frontend-sepia.vercel.app

**API em produção:** https://project-name-backend.vercel.app

**Repositório:** https://github.com/ericdoouro/project-name-backend

## Funcionalidades

- Cadastro de usuários.
- Autenticação de usuários com JWT.
- Criptografia de senhas utilizando bcryptjs.
- Consulta dos dados do usuário autenticado.
- Criação de artigos salvos.
- Listagem dos artigos salvos pelo usuário autenticado.
- Exclusão de artigos salvos.
- Proteção de rotas por autenticação.
- Validação de dados recebidos pela API.
- Tratamento centralizado de erros.
- Registro de requisições HTTP.

## Tecnologias utilizadas

- **Node.js:** ambiente de execução JavaScript.
- **Express 5:** criação e gerenciamento das rotas da API.
- **MongoDB:** banco de dados NoSQL.
- **Mongoose:** modelagem e comunicação com o MongoDB.
- **JWT (jsonwebtoken):** autenticação baseada em tokens.
- **bcryptjs:** criptografia de senhas.
- **Celebrate e Joi:** validação dos dados recebidos.
- **CORS:** configuração de acesso entre aplicações.
- **dotenv:** gerenciamento de variáveis de ambiente.
- **Validator:** validação de e-mails e URLs.
- **Nodemon:** reinicialização automática do servidor durante o desenvolvimento.
- **ESLint:** análise estática e padronização do código.

## Estrutura do projeto

```text
project-name-backend/
├── controllers/
│   ├── articles.js
│   └── users.js
├── middlewares/
│   ├── auth.js
│   ├── error.js
│   ├── logger.js
│   └── validation.js
├── models/
│   ├── article.js
│   └── user.js
├── routes/
│   ├── articles.js
│   └── users.js
├── app.js
├── database.js
├── package.json
└── .env
```

## Rotas da API

Todas as rotas utilizam o endereço-base:

```text
https://project-name-backend.vercel.app
```

### Usuários

| Método | Endpoint | Descrição | Autenticação |
|---|---|---|---|
| POST | `/users/signup` | Cadastrar usuário | Não |
| POST | `/users/signin` | Autenticar usuário | Não |
| GET | `/users/me` | Consultar usuário autenticado | Sim |

### Artigos

| Método | Endpoint | Descrição | Autenticação |
|---|---|---|---|
| GET | `/articles` | Listar artigos salvos | Sim |
| POST | `/articles` | Salvar novo artigo | Sim |
| DELETE | `/articles/:articleId` | Excluir artigo salvo | Sim |

As rotas protegidas exigem o envio do token JWT no cabeçalho da requisição:

```http
Authorization: Bearer SEU_TOKEN_JWT
```

## Como executar o projeto localmente

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado.
- Banco de dados MongoDB local ou MongoDB Atlas.

### 1. Clonar o repositório

```bash
git clone https://github.com/ericdoouro/project-name-backend.git
```

### 2. Acessar a pasta do projeto

```bash
cd project-name-backend
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
MONGO_URL=sua_url_de_conexao_mongodb
JWT_SECRET=sua_chave_secreta
```

Substitua os valores de exemplo pelos dados da sua configuração do MongoDB e por uma chave secreta própria para autenticação.

**Importante:** não compartilhe o arquivo `.env` nem envie credenciais ou chaves privadas para o GitHub.

### 5. Iniciar o servidor

Para desenvolvimento:

```bash
npm run dev
```

Para iniciar o servidor normalmente:

```bash
npm start
```

O servidor será iniciado na porta `3000`, após estabelecer conexão com o MongoDB.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor com Nodemon. |
| `npm start` | Inicia o servidor em modo normal. |
| `npm run lint` | Executa a análise estática com ESLint. |

## Tratamento de erros

A API possui validação de dados e tratamento centralizado de erros, incluindo:

- `400` — Dados inválidos.
- `401` — Autenticação necessária ou token inválido.
- `403` — Acesso não autorizado ao artigo.
- `404` — Recurso ou artigo não encontrado.
- `409` — E-mail já cadastrado.
- `500` — Erro interno do servidor.

## Deploy

A API está publicada na Vercel:

https://project-name-backend.vercel.app

A aplicação utiliza variáveis de ambiente configuradas no ambiente de hospedagem para acessar o MongoDB e validar os tokens JWT.

## Front-end relacionado

O back-end trabalha em conjunto com o projeto News Explorer — Front-end, desenvolvido em React:

https://github.com/ericdoouro/project-name-frontend

## Autor

Desenvolvido por **Eric Samuel do Ouro** como Projeto Final da formação Web Development da TripleTen.

[GitHub](https://github.com/ericdoouro) | [LinkedIn](https://www.linkedin.com/in/ericdoouro/)
