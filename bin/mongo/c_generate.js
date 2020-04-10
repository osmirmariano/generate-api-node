#!/usr/bin/env node
 
var lib = require('../../lib/controllers.js');
    program = require('commander');
 
program
  .description('Programa para criar controllers')
  .option('-n, --nome <nome>', 'Nome do controller')
  .parse(process.argv);
 
  if(program.rawArgs.length <= 3)
    throw Error("Comando inválido, está faltando uma tag")
  else
    lib(program.nome);