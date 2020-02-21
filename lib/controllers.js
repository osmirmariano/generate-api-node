var fs = require("fs");
const path = require('path');
const diretorio = path.basename(__dirname);

module.exports = function (name) {
    let dir = "src/app/controllers/"+name;
    
    if (!fs.existsSync(diretorio+ '/' +dir)){
        console.log('antes')
        fs.mkdirSync(dir);
        console.log('antes')
        var createStream = fs.createWriteStream(dir+"/"+name+".js");
        createStream.end();
    } else {
        console.log("Controller já existente" );
    }
}