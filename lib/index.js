var fs = require("fs");
var files = require("./files");
const path = require('path');
const diretorio = path.basename(__dirname);

module.exports = function (name) {
    let dir = diretorio+ '/' + name;

    if (!fs.existsSync(dir)){
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
        fs.mkdirSync(dir+"/src/app/test");
        createStream = fs.createWriteStream(dir+"/src/app/routes/index.js");
        createStream.write(files.routes);
        fs.mkdirSync(dir+"/src/app/utils");
        createStream.end();
        
    } else {
        console.log("Nome de diretório já existente" );
    }
}