# generate-api-node

**Biblioteca pra gerar projeto para api em nodejs com banco de dados mongodb

## Comandos para criar respectivos componentes para API:
Para usar api-generate-node, você primeiro deve criar uma pasta aonde seu projeto vai ficar, após isso instale o plugin que pode ser encontrado no link https://www.npmjs.com/package/api-tamplete-node. Com a lib instalada ai você no mesmo diretório acione o terminal e execute os comando abaixo para usar todos os recursos necessários da lib.
> * **create** -n "Nome do projeto da api"
> * **controller** -a "Mesmo nome do projeto criado anteriormente" -n "Nome do controller"
> * **model** -a "Mesmo nome do projeto criado anteriormente" -n "Nome do model"
> * **router** -a "Mesmo nome do projeto criado anteriormente" -n "Nome da rota"

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

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
