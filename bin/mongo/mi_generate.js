#!/usr/bin/env node
 
var lib = require('../../lib/middlewares.js');
    program = require('commander');
 
program
  .description('Programa para criar middlewares')
  .option('-n, --nome <nome>', 'Nome do middleware')
  .parse(process.argv);
 
  if(program.rawArgs.length <= 3)
    throw Error("Comando inválido, está faltando uma tag")
  else
    lib(program.nome);