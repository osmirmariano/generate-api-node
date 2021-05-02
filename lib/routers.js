var fs = require("fs");
const path = require('path');
const diretorio = path.basename(__dirname);

module.exports = function (name) {
    let dir = "src/app/routes/"+name;

    if (!fs.existsSync(diretorio+ '/' +dir)){
        fs.mkdirSync(dir);
        var createStream = fs.createWriteStream(dir+"/"+name+".js");
        createStream.write(
`
"use strict";
const router = require("express").Router();

router.post("", );
router.put("/:id", );
router.get("/:id", );
router.delete("/:id", );


module.exports = router;
`
        )
        createStream.end();
    } else {
        console.log("Rota já existente" );
    }
}