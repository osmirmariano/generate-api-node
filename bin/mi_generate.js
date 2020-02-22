#!/usr/bin/env node
 
var lib = require('../lib/middlewares.js');
    program = require('commander');
 
program
  .description('Programa para criar middlewares')
  .option('-n, --nome <nome>', 'Nome do middleware')
  .parse(process.argv);
 
  lib(program.nome);