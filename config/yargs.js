const argv = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Muestra la tabla de multiplicar en consola'
})
.option('h', {
    alias:'hasta',
    type:'number',
    default:10,
    describe:'Valor para iterar hasta'
})
.check((argv, option) => {
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero';
    }
    if(isNaN(argv.h)){
        throw 'Hasta tiene que ser un numero';
    }
    return true;
})
.argv;

module.exports = argv;