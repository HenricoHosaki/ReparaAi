# ReparaAí

ReparaAí é um sistema de gestão de serviços para municípios, desenvolvido em Node.js com Express, MySQL, Sequelize, JWT e bcrypt. O projeto permite gerenciar serviços, garantindo autenticação segura e armazenamento protegido de senhas.

## 🛠 Tecnologias utilizadas

Node.js

Express.js

MySQL

Sequelize

JWT (JSON Web Token)

bcrypt

## ⚙ Funcionalidades

Cadastro, edição e exclusão de serviços.

Login seguro com autenticação via JWT.

Criptografia de senhas usando bcrypt.

Estruturação de rotas RESTful para comunicação eficiente.

## 🔐 Segurança implementada

Autenticação JWT: Geração de tokens para rotas protegidas.

Criptografia de senhas: Armazenamento seguro no banco de dados.

## 💡 Aprendizados

Implementação de autenticação segura e manipulação confiável de senhas.

Estruturação de backend com boas práticas e organização de rotas.

Trabalho com banco de dados relacional e integração com Sequelize.

## 🚀 Futuras melhorias

Implementar middleware de autenticação JWT para verificar tokens automaticamente nas rotas protegidas.

Middleware de logging para monitorar atividades do sistema.

Adicionar rotas para cadastro de Cidade/Estado.

Validação de dados mais completa para usuários e serviços.

## 🚀 Como rodar o projeto
Pré-requisitos

Node.js instalado

MySQL instalado e em execução (pode usar XAMPP)

Postman (para testar as rotas)

Passos

### Instalar dependências
```
npm install express
npm install jsonwebtoken
npm install mysql2
npm install sequelize
```
Iniciar o servidor na pasta raíz
```
node src/app.js
```

Testar a aplicação

Abra o Postman e use as rotas do projeto.

Para rotas protegidas, adicione no header:

Authorization: Bearer <seu_token>


Banco de dados

Abra o XAMPP para verificar o MySQL e testar as tabelas.

### 💡 Dica:

Sempre crie o banco de dados antes de rodar as rotas de cadastro/login.

O token JWT só é gerado após o login com sucesso.
