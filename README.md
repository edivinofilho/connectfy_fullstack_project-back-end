# connectfy-backend

Esta API é parte do projeto FullStack Connectfy, onde o usuário pode criar e gerenciar sua lista de contatos, armazenando seus contatos de forma segura e eficiente.

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
Node.js: Certifique-se de tê-lo instalado. Você pode baixá-lo em nodejs.org.

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
npm start
</pre>

ou

<pre>
yarn start
</pre>

Isso iniciará o servidor e sua API estará acessível.

Lembre-se de configurar seu banco de dados PostgreSQL e ajustar as variáveis de ambiente, se necessário, usando um arquivo .env na raiz do seu projeto. Para referência, utilize o arquivo .env.example.

## Rotas/Endpoints:

_Sem a necessidade de autorização:_

|**Método**|**Endpoint**| **Responsabilidade** |
|POST | /login | Logar Usuário |
|POST | /register | Registrar Novo usuário |
|GET | /users | Listar todos os usuários | - Não utilizada no Front

_Precisa autorização:_

|**Método**|**Endpoint**| **Responsabilidade** |
|PATCH | /users/:id | Atualizar dados do usuário |
|DELETE | /users/:id | Remover conta do usuário |
|GET | /users/:id | Autologin | 
|POST | /contacts | Criar Contato |
|GET | /contacts | Listar todos os contatos |
|PATCH | /contacts/:id | Atualizar dados do contato |
|DELETE | /contacts/:id | Remover contato |


### POST /register (Criar usuário)
| **Dados de entrada** |
| Body: Formato Json |


Success:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 201 Created |

Missing Key:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 400 Bad Request |


### POST /login (Logar usuário)
| **Dados de entrada** |
| Body: Formato Json |

Success:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 200 OK |

Missing Key:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 400 Bad Request |


### GET /users (Listar todos os usuários - Não utilizada no Front)
| **Sem dados de entrada** |
| No body |


| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 200 OK |


### PATCH /users/:id (Atualizar dados do usuário - Apenas com autorização)
| **Dados de entrada** |
| Body: Formato Json |

Success:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 200 OK |

Wrong Id:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 404 Not Found |

Not own Account:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 403 Forbidden |

### GET /users/:id (Autologin de usuário - Apenas com autorização)
| **Sem dados de entrada** |
| No body |

Success:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 200 OK |

Not own Account:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 403 Forbidden |

### DELETE /users/:id (Remover usuário - Apenas com autorização)
| **Sem dados de entrada** |
| No body |
 
Success:
| **Resposta do Servidor** |
| No body response |
| Status Code: 204 No Content |

 Not own Account:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 403 Forbidden |


### GET /contacts (Listar todos os contatos - Apenas com autorização)
| **Sem dados de entrada** |
| No body |

Success:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 200 OK |

 Missing Token - Authorization:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 401 Unauthorized |

### POST /contacts (Criar novo contato - Apenas com autorização)
| **Dados de entrada** |
| Body: Formato Json |

Success:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 201 Created |

 Missing key:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 400 Bad Request |

### PATCH /contacts/:id (Atualizar dados do contato - Apenas com autorização)
| **Dados de entrada** |
| Body: Formato Json |

Success:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 200 OK |

Wrong Id:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 404 Not Found |


### DELETE /contacts/:id (Remover contato - Apenas com autorização)
| **Sem dados de entrada** |
| No body |
 
Success:
| **Resposta do Servidor** |
| No Body |
| Status Code: 204 No Content |

Wrong Id:
| **Resposta do Servidor** |
| Body: Formato Json |
| Status Code: 404 Not Found |
