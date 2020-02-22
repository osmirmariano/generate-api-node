#!/usr/bin/env node
 
var lib = require('../lib/models.js');
    program = require('commander');
 
program
  .description('Programa para criar models')
  .option('-n, --nome <nome>', 'Nome do model')
  .parse(process.argv);
 
  lib(program.nome);