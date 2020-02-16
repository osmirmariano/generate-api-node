var fs = require("fs");
var files = require("./files");

module.exports = function (name) {
    let dir = "../../"+name;

    if (!fs.existsSync(dir)){
        console.log("Criando o projeto " + name);
        //criar o diretorio raiz
        fs.mkdirSync(dir);
        var createStream = fs.createWriteStream(dir+"/app.js");
        createStream.write(files.app);
        var createStream = fs.createWriteStream(dir+"/.env");
        createStream.write(files.mongo);

        var createStream = fs.createWriteStream(dir+"/README.md");
        var createStream = fs.createWriteStream(dir+"/LICENSE");
        var createStream = fs.createWriteStream(dir+"/package.json");
        createStream.write(files.package);
        fs.mkdirSync(dir+"/src");
        fs.mkdirSync(dir+"/src/app");
        var createStream = fs.createWriteStream(dir+"/src/app/index.js");
        createStream.write(files.index);
        fs.mkdirSync(dir+"/src/config");

        var createStream = fs.createWriteStream(dir+"/src/config/config.js");
        createStream.write(files.config);

        var createStream = fs.createWriteStream(dir+"/src/config/database.js");
        createStream.write(files.database);
        
        fs.mkdirSync(dir+"/src/app/models");
        var createStream = fs.createWriteStream(dir+"/src/app/models/index.js");
        createStream.write(files.model);

        fs.mkdirSync(dir+"/src/app/controllers");
        fs.mkdirSync(dir+"/src/app/constants");
        fs.mkdirSync(dir+"/src/app/helpers");
        fs.mkdirSync(dir+"/src/app/middlewares");
        fs.mkdirSync(dir+"/src/app/routes");
        var createStream = fs.createWriteStream(dir+"/src/app/routes/index.js");
        createStream.write(files.routes);
        fs.mkdirSync(dir+"/src/app/utils");
        createStream.end();
        
    } else {
        console.log("Nome de diretório já existente" );
    }
}