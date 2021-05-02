var fs = require("fs");
const path = require('path');
const diretorio = path.basename(__dirname);

module.exports = function (name) {
    let dir = "src/app/controllers/"+name;
    
    if (!fs.existsSync(diretorio+ '/' +dir)){
        fs.mkdirSync(dir);
        var createStream = fs.createWriteStream(dir+"/"+name+".js");
        createStream.write(
`class ${name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()} { 
    constructor() {}
} 

module.exports = new ${name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()}();
`
        );
        createStream.end();
    } else {
        console.log("Controller já existente" );
    }
}