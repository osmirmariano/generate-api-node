# generate-api-node

** Biblioteca pra gerar projeto para api em nodejs

## Comandos para criar respectivos componentes para API:
Inicialmente você deve installar em seu computador com o seguinte comando:
```javascript
    npm i -g api-tamplete-node
```
que vai ser instalado de forma globalmente.

Para usar api-generate-node, você primeiro deve navegar até o diretório que vai querer gerar o projeto, dentro do diretório, por exemplo, Documents. Dentro do diretório basta rodar o comando **create**, como descrito abaixo que irá criar uma pasta com o nome que você forneceu e dentro dela vai ter toda a estrutura da API, quando rodar o comando create vai ser solicitado qual estrutura de banco vai querer utilizar se é com mongoose (MongoDB) ou sequelize (Mysql).

> * **create** -n "Nome do projeto da api"
> * **controller** -n "Nome do controller"
> * **model** -n "Nome do model"
> * **router** -n "Nome da rota"
> * **middleware** -n "Nome do middleware"

Por enquanto os comando de criar controllers, models, router e middleware só funciona para projeto mongo, mas estamos trabalhando em novos comandos para estutura com sequelize.

### Informações
O projeto já vem com alguns componentes instalados, sendo eles JWT para sistema de login com autentição via token e com serverless, sendo que esse é utilizado para fazer deploy no servidor, por padrão é utilizado a AWS com lambdas para fazer deploy.

## License

Este projeto é licensiado sobre MIT License - [LICENSE.md](LICENSE.md) para mais detalhes vide arquivo

## Estrutura do diretório de um projeto com mongo
A estrutura do diretório criado é a descrita abaixo
- src
    - app
        - constants
        - controllers
        - helpers
        - middlewares
        - models
            - index.js
        - routes
            - index.js
        - utils
        - tests
        - index.js
    - config
        - config.js
        - database.js
- app.js
- LICENSE.md
- package.json
- README.md
- serverless.yml
- .env

## Estrutura do diretório de um projeto com mysql
A estrutura do diretório criado é a descrita abaixo
- src
    - app
        - constants
        - controllers
        - helpers
        - middlewares
        - models
            - index.js
        - routes
            - index.js
        - utils
        - tests
        - index.js
    - config
        - database.js
    - database
        - migrations
        - seeders
- app.js
- .sequelizerc
- .env
- LICENSE.md
- package.json
- README.md
- serverless.yml

## Observação
* Criador: **Osmir Custódio Mariano** - osmirmarianocc@gmail.com
* Link do npm https://www.npmjs.com/package/api-tamplete-node
* Módulo com sequelize ainda está na fase beta, mas módulo do Mongo está na fase oficial
