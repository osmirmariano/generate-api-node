var fs = require("fs");
const path = require('path');
const diretorio = path.basename(__dirname);

module.exports = function (name) {
    let dir = "src/app/models/"+name;

    if (!fs.existsSync(diretorio+ '/' +dir)){
        fs.mkdirSync(dir);
        var createStream = fs.createWriteStream(dir+"/"+name+".js");
        createStream.end();
    } else {
        console.log("Model já existente" );
    }
}