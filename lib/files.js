const config = `module.exports = {
    'secret': 'supersecret'
};`;

const package = `{
    "name": "nome",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start": "node app",
      "dev": "nodemon app.js",
      "test": "echo \\"Error: no test specified\\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "bcrypt": "^3.0.7",
      "bcryptjs": "^2.4.3",
      "body-parser": "^1.19.0",
      "cors": "^2.8.5",
      "dotenv": "^8.2.0",
      "express": "^4.17.1",
      "js-base64": "^2.5.2",
      "jsonwebtoken": "^8.5.1",
      "lodash": "^4.17.15",
      "moment": "^2.24.0",
      "mongoose": "^5.8.11",
      "nodemon": "^2.0.2",
      "serverless-http": "^2.3.1",
      "helmet": "^3.22.0",
    }
  }
`;

const database = `
//pacotes npm
const mongoose = require('mongoose')

// let ssl = false
// let sslValidate = false
// let sslCA = undefined
// if (process.env.MONGODB_CERTIFICATE_BASE64) {
//     ssl = true
//     sslValidate = true
//     sslCA = Buffer.from(process.env.MONGODB_CERTIFICATE_BASE64, 'base64')
// }

// var connectConfig = {
//     ssl,
//     sslValidate,
//     sslCA,
//     poolSize: 10,
//     keepAlive: true,
//     socketTimeoutMS: 0,
//     reconnectTries: 30,
//     useNewUrlParser: true
// }

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//mensagens de erro genericas
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
mongoose.Error.messages.String.maxlength = "O '{PATH}' tem mais de '{MAXLENGTH}' caracteres."
mongoose.Error.messages.String.minlength = "O '{PATH}' tem menos de '{MINLENGTH}' caracteres."

//exporta a conexão para ser usado em outros modulos
module.exports = mongoose
`

const app = `
const serverless = require("serverless-http");
const app = require('./src/app/')

//o arquivo yml chama o serverless(app)
module.exports.handler = serverless(app);
`

const routes =  `
const router = require('express').Router();
const packageJson = require('../../../package.json');

router.get('/', (req, res) => {
    res.type('text/plain')
    res.send("node-api")
})

// router.use("", require("./"));

module.exports = router;
`

const index =  `
require("dotenv").config();

const portHttp = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const express = require('express');
const packageJson = require('../../package.json');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet());

app.use("/api/v1", require("./routes/index"));

app.listen(portHttp, () =>  console.log('running on port 3000 - http://localhost:3000/api/v1'));

module.exports = app;
`

const model = `
module.exports = {
    users: require('')
}
`

const mongo = `
NODE_ENV=production
PORT_HTTP=3000
PORT_HTTPS=3001
PORT=3000
HOST=localhost
API_URL_BASE=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/seu_banco?readPreference=primary
`
const serverless = `
service: <Nome>

custom:
  bucket: ""
  defaultStage: prod
  profiles:
    prod: <Alterar par a nome de produção>
    dev: <Alterar par a nome de dev>

provider:
  name: aws
  runtime: nodejs10.x
  environment:
    STAGE: '$'{opt:stage, self:custom.defaultStage}
  stage: '$'{opt:stage, self:custom.defaultStage}
  profile: {self:custom.profiles.{self:provider.stage}}
  region: <Sua região da AWS>
  iamRoleStatements:
    - Effect: Allow
      Action:
        - s3:PutObject
      Resource: "arn:aws:s3:::'$'{self:custom.bucket}/*"

functions:
  app:
    handler: app.handler
    events:
      - http: ANY /
      - http: "ANY {proxy+}"
    environment:
      BUCKET: '$'{self:custom.bucket}

`

module.exports = {
    config, package, database, app, routes, index, model, mongo, serverless
}