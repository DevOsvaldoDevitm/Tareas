import Tarea from '../models/tarea.js';

class Tareas{

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key=>{
            const tarea = this._listado[key];
            listado.push( tarea )
        });
        return listado;
    };

    constructor(){
        this._listado = {};
    }

    borrarTarea (id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray ( tareas = []){

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    listadoCompleto(){

        this.listadoArr.forEach( (tarea, i) =>{
            const idx = `${i + 1}`.green;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                ? 'Completado'.green
                : 'Pendiente'.red;

                console.log(`${idx} ${desc} :: ${estado}`);
        })

    };
    tareasStatus (completadas = false){
        let contador = 0;
        this.listadoArr.forEach( (tarea) =>{
            const idx = `${ + 1}`.green;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                ? 'Completado'.green
                : 'Pendiente'.red;
                if ((completadas && completadoEn) || (!completadas && !completadoEn)) {
                    contador +=1;
                    if (completadoEn === null) {
                        console.log(`${contador.toString().green}. ${desc} :: ${estado}`);
                        
                    } else {
                        console.log(`${contador.toString().green}. ${desc} :: ${estado} el dia :${completadoEn.green}`);
                        
                    }
                }
        })
    }
    toggleCompletadas (ids = []){
        ids.forEach(id =>{
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        });
        this.listadoArr.forEach(tarea =>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

export default Tareas;