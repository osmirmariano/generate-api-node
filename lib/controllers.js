var fs = require("fs");

module.exports = function (name, api) {
    let dir = api+"/src/app/controllers/"+name;
    console.log(dir)
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        var createStream = fs.createWriteStream(dir+"/"+name+".js");
        createStream.end();
    } else {
        console.log("Controller já existente" );
    }
}