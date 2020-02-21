var fs = require("fs");
const path = require('path');
const diretorio = path.basename(__dirname);

module.exports = function (name) {
    let dir = diretorio + "/src/app/controllers/"+name;
    console.log(dir)
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        var createStream = fs.createWriteStream(dir+"/"+name+".js");
        createStream.end();
    } else {
        console.log("Controller já existente" );
    }
}