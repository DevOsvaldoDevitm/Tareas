const { resolve } = require('path');

require('colors');

const mostraMenu = ()=> {
    return new Promise (resolve =>{
        console.clear();
        console.log('==========================='.green);
        console.log('   Selecciona una opcion'.green);
        console.log('===========================\n'.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tareas`);
        console.log(`${'0.'.green} Salir`);
    
        const readline = require ('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Selecciona una opcion: ', (opt) =>{
            readline.close();
            resolve (opt);
        });
    });
}

const pausa = ()=>{
    return new Promise (resolve =>{
        const readline = require ('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) =>{
            readline.close();
            resolve ();
        });
    })
}

module.exports = {
    mostraMenu,
    pausa
}