var fs = require("fs");
const path = require('path');
const diretorio = path.basename(__dirname);

module.exports = function (name) {
    let dir = "src/app/models/"+name;

    if (!fs.existsSync(diretorio+ '/' +dir)){
        fs.mkdirSync(dir);
        var createStream = fs.createWriteStream(dir+"/"+name+".js");
        createStream.write(
`//database configuration module ${name}
const mongoose = require('../../../config/database');
//define the schema of ${name}
const ${name}Schema = mongoose.Schema({

});
//define the database ${name} model with all fields
const ${name} = mongoose.model('${name}', ${name}Schema);
//exports the module, in which case it must be required if you want to manipulate this collection
module.exports = ${name};
        `);
        createStream.end();
    } else {
        console.log("Model já existente" );
    }
}