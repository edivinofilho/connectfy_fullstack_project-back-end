# Connectfy (back-end)

Esta API é parte do projeto FullStack Connectfy, onde o usuário pode se registrar, criar e gerenciar sua lista de contatos, armazenando seus contatos de forma segura e eficiente.

Link para o repositório onde está o Front deste projeto: https://github.com/Kenzie-Academy-Brasil-Developers/connectfy

## Tecnologias utilizadas nesta API:
- Tecnologias Utilizadas:
- Node.js: Ambiente de execução JavaScript.
- Express: Framework web para Node.js.
- TypeScript: Superset tipado para JavaScript.
- TypeORM: ORM (Object-Relational Mapping) para TypeScript e JavaScript.
- PostgreSQL (pg): Banco de dados relacional.
- bcryptjs: Biblioteca para hash de senhas.
- jsonwebtoken: Implementação de JSON Web Tokens (JWT).
- cors: Middleware para permitir requisições entre diferentes origens.
- dotenv: Carrega variáveis de ambiente a partir de um arquivo.
- zod: Biblioteca para validação de esquema.

## Passo a Passo para Instalação:
**Pré-requisitos:**
- Node.js: Certifique-se de tê-lo instalado. Você pode baixá-lo em nodejs.org.

**Instalação no Windows:**
Abra o terminal (PowerShell ou Prompt de Comando).

Navegue até o diretório do projeto usando o comando cd caminho/do/seu/projeto.

Instale as dependências do projeto usando o comando:

<pre>
npm install
</pre>

ou

<pre>
yarn install
</pre>

Isso instalará todas as dependências listadas no arquivo package.json.

**Instalação no Linux ou macOS:**
Abra o terminal.

Navegue até o diretório do projeto usando o comando cd caminho/do/seu/projeto.

Instale as dependências do projeto usando o comando:

<pre>
npm install
</pre>

ou

<pre>
yarn install
</pre>

Isso instalará todas as dependências listadas no arquivo package.json.

Executando a Aplicação:
Depois de instalar as dependências, você pode executar a aplicação usando o seguinte comando:

<pre>
npm run dev
</pre>

ou

<pre>
yarn run
</pre>

Isso iniciará o servidor e sua API estará acessível.

Lembre-se de configurar seu banco de dados PostgreSQL e ajustar as variáveis de ambiente, se necessário, usando um arquivo .env na raiz do seu projeto. Para referência, utilize o arquivo .env.example.

## Testes Unitários:
Foram construídos testes unitários que verificam elementos como:
- CRUD - user
- CRUD - contacts
- Login e criação de token - session

  Para utilizar estes testes:
  Na raíz do projeto, no terminal, use o seguinte comando:
  <pre>
   npm run test
  </pre>
  ou
  <pre>
   yarn test
  </pre>

## Rotas/Endpoints:

_Sem a necessidade de autorização:_

| Método | Endpoint         | Responsabilidade         |
|--------|------------------|--------------------------|
| POST   | /login           | Logar usuário            |
| POST   | /register        | Registrar novo usuário   |
| GET    | /users           | Listar todos os usuários |

_Precisa autorização:_

| Método | Endpoint          | Responsabilidade             |
|--------|-------------------|-----------------------------|
| PATCH  | /users/:id        | Atualizar dados do usuário |
| DELETE | /users/:id        | Remover conta do usuário    |
| GET    | /users/:id        | Autologin                   |
| POST   | /contacts         | Criar Contato               |
| GET    | /contacts         | Listar todos os contatos    |
| PATCH  | /contacts/:id     | Atualizar dados do contato  |
| DELETE | /contacts/:id     | Remover contato             |


### POST /users (Criar usuário)
| **Dados de entrada**   |
|------------------------|
| Body: Formato Json     |
![create-user](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/bd2738af-dcc1-4cdf-92c6-bce1db36f45a)

Success:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 201 Created         |
![create-user-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/0b3c7469-b352-4670-8d0a-064128c7815d)

Wrong Email Format:
| **Dados de entrada**   |
|------------------------|
| Body: Formato Json     |
![create-user-wrong-email-format](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/c976cb01-4849-449e-a9f3-711cebf66aa2)

| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 400 Bad Request     |
![create-user-wrong-email-format-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/2f6b73df-5962-4687-bc97-c44f82ce2eac)

User Already Exists:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 409 Conflict        |
![create-user-already-exists-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/be60b2e6-4400-44f2-ac8b-edab8385e866)

Missing Key:
| **Dados de entrada**   |
|------------------------|
| Body: Formato Json     |
![create-user-missing-key](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/48d1e0ce-05ad-48fc-9c90-665d7b47f91d)


| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 400 Bad Request     |
![create-user-missing-key-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/9df40799-5426-45f5-8e68-0861ba5ba117)

### POST /login (Logar usuário)
| **Dados de entrada**   |
|------------------------|
| Body: Formato Json     |
![login-user](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/fa53a4bf-fe50-4d2e-a14c-2644c325fedf)

Success:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 200 OK              |
![login-user-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/7ed07392-9e62-46d2-ac01-9d06b7c04450)

Invalid Password:
| **Dados de entrada**   |
|------------------------|
| Body: Formato Json     |
![login-user-invalid](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/f951c18c-770a-4842-ae4c-8242c5e882e1)

| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 401 Unauthorized    |
![login-user-response-invalid](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/73264804-ffde-45a2-8740-d90577655d87)


Missing Key:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 400 Bad Request     |
![login-user-missing-key](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/b309749c-e05c-4b14-a33b-e9b76ed6f01c)

### GET /users (Listar todos os usuários - Não utilizada no Front)
| **Sem dados de entrada**   |
|------------------------|
| No body                |


### PATCH /users/:id (Atualizar dados do usuário - Apenas com autorização)
| **Dados de entrada**   |
|------------------------|
| Body: Formato Json     |
![update-user](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/2f98d26d-df4e-4595-accb-01c1ff6d59da)

Success:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 200 OK              |
![update-user-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/74a7b845-046d-4ee5-940b-1b3683bfc8b4)

Not own Account:
| **Dados de entrada**             |
|----------------------------------|
| Body: Formato Json               |
![update-user-not-own-account](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/01fd41a4-cfe4-453d-b36e-674c117fc7c6)

| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 403 Forbidden       |
![update-user-not-own-account-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/1503d743-12ec-41e4-bfbc-29c4674d9916)

Invalid Token:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 401 Unauthorized    |
![update-user-invalid-token-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/af267211-b529-4913-8e81-aa87e3756b97)

### GET /users/:id (Autologin de usuário - Apenas com autorização)
| **Sem dados de entrada**   |
|------------------------|
| No body                |

Success:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 200 OK              |
![autologin-user-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/ae3573ec-bfaa-4f3d-bc31-268227f6ab18)

### DELETE /users/:id (Remover usuário - Apenas com autorização)
| **Sem dados de entrada**   |
|------------------------|
| No body                |
 
Success:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 204 No Content      |
![delete-user-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/01b58c4b-4699-4e74-a13c-a1930e016ee8)


### GET /contacts (Listar todos os contatos - Apenas com autorização)
| **Sem dados de entrada**   |
|------------------------|
| No body                |

Success:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 200 OK              |
![list-contacts-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/5bf07a02-3ba3-4f75-adbf-956df83f77a0)

 Missing Token - Authorization:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 401 Unauthorized    |
![update-user-invalid-token-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/0573e9bb-756a-4310-a84c-a39c39860da4)


### POST /contacts (Criar novo contato - Apenas com autorização)
| **Dados de entrada**   |
|------------------------|
| Body: Formato Json     |
![create-contact](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/4a7eb500-11db-414b-bae2-bc1ba3c191e7)

Success:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 201 Created         |
![create-contact-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/e8334f26-fa96-44ab-9e11-85cd860f9688)

 Missing key:
| **Dados de entrada**   |
|------------------------|
| Body: Formato Json     |
![create-contact-missing-key](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/ea05bc92-f8e5-4457-b96c-a7110c585ce8)


| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 400 Bad Request     |
![create-contact-missing-key-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/b3bb48c3-6208-4659-8a51-0b48ead8da28)

### PATCH /contacts/:id (Atualizar dados do contato - Apenas com autorização)
| **Dados de entrada**   |
|------------------------|
| Body: Formato Json     |
![update-contact](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/b8360f41-b925-4d55-a82a-d09199c73dc4)

Success:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 200 OK              |
![update-contact-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/e8677a72-8dc4-4252-81da-13842c8bda84)

Wrong Id:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 404 Not Found       |
![update-contact-wrong-id-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/8d24cd20-a517-4c95-815c-c947ba9e4f49)


### DELETE /contacts/:id (Remover contato - Apenas com autorização)
| **Sem dados de entrada**   |
|------------------------|
| No body                |
 
Success:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 204 No Content      |
![delete-contact-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/c87ff0e0-2287-4a97-9b55-2afeab21cd68)

Wrong Id:
| **Resposta do Servidor**         |
|----------------------------------|
| Body: Formato Json               |
| Status Code: 404 Not Found       |
![update-contact-wrong-id-response](https://github.com/Kenzie-Academy-Brasil-Developers/connectfy-backend/assets/103902774/8d24cd20-a517-4c95-815c-c947ba9e4f49)

## Licença:
Este projeto faz parte do curso Full Stack Developer da Kenzie Academy Brasil (www.kenzie.com.br). Todos os direitos e propriedade intelectual deste projeto pertencem à Kenzie Academy Brasil.
