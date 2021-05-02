const app = `
const serverless = require("serverless-http");
const app = require('./src/app/')

//o arquivo yml chama o serverless(app)
module.exports.handler = serverless(app);
`

const env = `
NODE_ENV=development
PORT_HTTP=3000
PORT_HTTPS=3001
PORT=3000
HOST=localhost
API_URL_BASE=http://localhost:3000
`

const sequelize = `
const path = require('path');

module.exports = {
  'config': path.resolve('src/config', 'database.js'),
  'models-path': path.resolve('src/app', 'models'),
  'seeders-path': path.resolve('src/database', 'seeders'),
  'migrations-path': path.resolve('src/database', 'migrations'),
};
`

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
      "lodash": "^4.17.15",
      "moment": "^2.24.0",
      "nodemon": "^2.0.2",
      "helmet": "^3.22.0",
      "serverless-http": "^2.3.1",
      "sequelize": "^5.21.5"
    },
    "devDependencies": {
        "sequelize-cli": "^5.5.1"
    }
  }
`;

const index =  `
require("dotenv").config();

const portHttp = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const express = require('express');
const packageJson = require('../../package.json');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet());

app.use("/api/v1", require("./routes/index"));

app.listen(portHttp, () =>  console.log('running on port 3000 - http://localhost:3000/api/v1'));

module.exports = app;
`

const database = `
module.exports = {
    username: '',
    password: '',
    database: '',
    host: 'localhost',
    dialect: 'mysql'
}
`;

const models = `
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const UserModel = require('../models/user/user');//Exemplo de importação quando um model for criado
const config = require('../../config/database');
const db = {};
const sequelize = new Sequelize(config);

const User = UserModel(sequelize, Sequelize);//Exemplo de importação quando um model for criado

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, User };
`;

module.exports = {
    app, database, sequelize, package, index, database, models, env
}