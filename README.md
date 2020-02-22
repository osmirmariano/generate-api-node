# generate-api-node

** Biblioteca pra gerar projeto para api em nodejs com banco de dados mongodb

## Comandos para criar respectivos componentes para API:
Inicialmente você deve installar em seu computador com o seguinte comando:
```javascript
    npm i -g api-tamplete-node
```
que vai ser instalado de forma globalmente.

Para usar api-generate-node, você primeiro deve navegar até o diretório que vai querer gerar o projeto, dentro do diretório, por exemplo, Documents. Dentro do diretório basta rodar o comando **create**, como descrito abaixo que irá criar uma pasta com o nome que você forneceu e dentro dela vai ter toda a estrutura da API.

> * **create** -n "Nome do projeto da api"
> * **controller** -n "Nome do controller"
> * **model** -n "Nome do model"
> * **router** -n "Nome da rota"
> * **middleware** -n "Nome do middleware"

### Informações
O projeto já vem com alguns componentes instalados, sendo eles JWT para sistema de login com autentição via token e com serverless, sendo que esse é utilizado para fazer deploy no servidor, por padrão é utilizado a AWS com lambdas para fazer deploy.

## License

Este projeto é licensiado sobre MIT License - [LICENSE.md](LICENSE.md) para mais detalhes vide arquivo

## Estrtura do diretório
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

## Observação
* Criador: **Osmir Custódio Mariano** - osmirmarianocc@gmail.com
* Link do npm https://www.npmjs.com/package/api-tamplete-node
* Obs: Aplicação ainda em beta
