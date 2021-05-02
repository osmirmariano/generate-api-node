#!/usr/bin/env node
var lib = require('../../lib/index.js');
    program = require('commander');
 
program
  .description('Programa para criar estrutura de api')
  .option('-n, --nome <nome>', 'Nome da aplicação')
  .parse(process.argv);
  
  if(program.rawArgs.length <= 3)
    throw Error("Comando inválido, está faltando uma tag")
  else
    lib(program.nome);
  