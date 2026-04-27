# Projeto API REST

Essa é a primeira API REST que desenvolvi do zero. Quis entender de verdade como funciona autenticação com JWT, proteção de rotas e CRUD antes de avançar para coisas mais complexas. Então construí essa API do início ao fim sem pular etapas.

A API está em produção no Google Cloud: `http://34.95.208.101/api`

## O que a API faz

Usuários podem se cadastrar e fazer login. Após autenticados, recebem um token JWT que libera acesso às rotas protegidas. Com esse token é possível gerenciar alunos no banco de dados: cadastrar, listar, atualizar e deletar. Também dá pra fazer upload de fotos vinculadas a cada aluno.

## Tecnologias utilizadas

### Backend
- Node.js com Express
- MySQL como banco de dados relacional
- Sequelize como ORM para modelagem e queries
- JSON Web Token (JWT) para autenticação stateless
- bcryptjs para criptografia de senhas
- Multer para upload de arquivos
- dotenv para variáveis de ambiente

### Infraestrutura
- Google Cloud Compute Engine com VM Ubuntu 22.04 na região de São Paulo
- PM2 para gerenciar o processo e reiniciar automaticamente no boot
- Nginx como reverse proxy redirecionando `/api/` para a porta 3001

## Estrutura do projeto

```
Projeto_APIrest/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middlewares/
├── uploads/
│   └── images/
├── app.js
├── server.js
└── .sequelizerc
```

## Como rodar localmente

Você vai precisar de Node.js v18 ou superior e um banco MySQL rodando localmente.

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Kevin-Loran/Projeto_APIrest.git
cd Projeto_APIrest
npm install
```

Crie um arquivo `.env` na raiz com as suas configurações:

```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
JWT_SECRET=sua_chave_secreta
```

Rode as migrations para criar as tabelas:

```bash
npx sequelize db:migrate
```

Suba o servidor:

```bash
npm start
```

A API vai estar disponível em `http://localhost:3001`

## Rotas

### Usuários (públicas)

| Método | Rota | Descrição |
|---|---|---|
| POST | /users/store | Cadastra novo usuário |
| POST | /users/login | Autentica e retorna o token JWT |
| GET | /users/show | Lista usuários |

### Alunos (protegidas, exigem token JWT no header)

| Método | Rota | Descrição |
|---|---|---|
| GET | /alunos | Lista todos os alunos |
| POST | /alunos | Cadastra novo aluno |
| PUT | /alunos/:id | Atualiza dados de um aluno |
| DELETE | /alunos/:id | Remove um aluno |

### Fotos (protegidas)

| Método | Rota | Descrição |
|---|---|---|
| POST | /fotos | Faz upload de foto vinculada a um aluno |
| GET | /fotos/:id | Retorna a foto de um aluno |

Para acessar as rotas protegidas, inclua o header:

```
Authorization: Bearer seu_token_jwt
```

## Autor

Kevin Loran  
Estudante de Engenharia de Software, São Paulo.  
[linkedin.com/in/kevinloran](https://linkedin.com/in/kevinloran)
