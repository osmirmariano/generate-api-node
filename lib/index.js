var fs = require("fs");
var files = require("./files");
const path = require('path');
const diretorio = path.basename(__dirname);
const { exec } = require("child_process");

module.exports = async function (name) {
    let dir = name;
    var readlineSync = require('readline-sync');
    console.log('Selecione opção para o banco');
    banco = ['MongoDB - Mongoose', 'Mysql - Sequelize'],
    index = readlineSync.keyInSelect(banco, 'Quais das opções?');

    if(banco[index] == 'MongoDB - Mongoose') {
        console.log('Criando sua API com MongoDB...');
        if (!fs.existsSync(diretorio+ '/' +dir)){
            //criar o diretorio raiz
            fs.mkdirSync(dir);
            var createStream = fs.createWriteStream(dir+"/app.js");
            createStream.write(files.app);
            createStream = fs.createWriteStream(dir+"/.env");
            createStream.write(files.mongo);
    
            createStream = fs.createWriteStream(dir+"/README.md");
            createStream = fs.createWriteStream(dir+"/LICENSE");
            createStream = fs.createWriteStream(dir+"/package.json");
            createStream.write(files.package);
            createStream = fs.createWriteStream(dir+"/serverless.yml");
            createStream.write(files.serverless);
            fs.mkdirSync(dir+"/src");
            fs.mkdirSync(dir+"/src/app");
            createStream = fs.createWriteStream(dir+"/src/app/index.js");
            createStream.write(files.index);
            fs.mkdirSync(dir+"/src/config");
    
            createStream = fs.createWriteStream(dir+"/src/config/config.js");
            createStream.write(files.config);
    
            createStream = fs.createWriteStream(dir+"/src/config/database.js");
            createStream.write(files.database);
            
            fs.mkdirSync(dir+"/src/app/models");
            createStream = fs.createWriteStream(dir+"/src/app/models/index.js");
            createStream.write(files.model);
    
            fs.mkdirSync(dir+"/src/app/controllers");
            fs.mkdirSync(dir+"/src/app/constants");
            fs.mkdirSync(dir+"/src/app/helpers");
            fs.mkdirSync(dir+"/src/app/middlewares");
            fs.mkdirSync(dir+"/src/app/routes");
            fs.mkdirSync(dir+"/src/app/tests");
            createStream = fs.createWriteStream(dir+"/src/app/routes/index.js");
            createStream.write(files.routes);
            fs.mkdirSync(dir+"/src/app/utils");
            createStream.end();
            console.log('Iniciando a instalação das dependência no seu projeto...');

            exec('npm install', {cwd: dir}, (err, stdout, stderr) => {
                console.log(stdout)
                console.log(stderr)
                console.log('Projeto criado com sucesso.');
                console.log('Execute os seguintes comandos para rodar sua aplicação.\n');
                console.log('- cd ' + dir);
                console.log('- npm run dev \n');
            });
        } else {
            throw Error("Nome de diretório já existente")
        }
    } else if(banco[index] == 'Mysql - Sequelize'){
        console.log('Criando sua API com Mysql...');
        if (!fs.existsSync(diretorio+ '/' +dir)){

        }
    } else {
        console.log('Criação cancelada com sucesso!');
    }
}