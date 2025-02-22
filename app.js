import colors from 'colors';

import { 
    inquirerMenu, 
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoTareasCompletar
} from './helpers/inquirer.js';

import Tareas from './models/tareas.js';
import { guardarDB,
        leerDB,
        
 } from './helpers/guardararchivo.js';
import { Console } from 'console';

const main = async() =>{
    let opcion = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        opcion = await inquirerMenu();
        
        switch (opcion){
            case '1':

            const desc = await leerInput('Descripcion: ');
            tareas.crearTarea( desc );

                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.tareasStatus(true);
                break;
            case '4':
                tareas.tareasStatus(false);
                break;
            case '5':
                const ids = await listadoTareasCompletar (tareas.listadoArr); 
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id !== '0'){
                    const ok = await confirmar('Estas seguro?');
                    if(ok){
                        tareas.borrarTarea( id );
                        console.log(`Tarea borrada correctamente`.red)
                    }
                }
                break;
            case '7':
                break;
            
            }

            guardarDB(tareas.listadoArr);

        await pausa();
    } while (opcion !== '0');
    // pausa();
    
}

main();