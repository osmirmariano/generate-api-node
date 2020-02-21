#!/usr/bin/env node
 
var lib = require('../lib/routes.js');
    program = require('commander');
 
program
  .description('Programa para criar rotas')
  .option('-n, --nome <nome>', 'Nome da rota')
  .parse(process.argv);
 
  lib(program.nome, program.api);