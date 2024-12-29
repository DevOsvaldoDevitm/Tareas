# Gestor de Tareas

Un sencillo gestor de tareas basado en Node.js para crear, listar, completar y gestionar tareas de manera interactiva desde la consola.

## Características

- Crear nuevas tareas.
- Listar todas las tareas.
- Filtrar tareas completadas o pendientes.
- Marcar tareas como completadas.
- Eliminar tareas.

## Requisitos

- Node.js v14 o superior.

## Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd Tareas
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. Ejecuta la aplicación:
   ```bash
   node app.js
   ```

2. Usa el menú interactivo para gestionar tus tareas:
   - `1` Crear una nueva tarea.
   - `2` Listar todas las tareas.
   - `3` Mostrar tareas completadas.
   - `4` Mostrar tareas pendientes.
   - `5` Completar tareas.
   - `6` Eliminar tareas.
   - `0` Salir de la aplicación.

## Estructura del Proyecto

```
Tareas/
├── models/
│   └── tareas.js    # Módulo para gestionar la lógica de las tareas.
├── helpers/
│   └── inquirer.js  # Configuración de los menús interactivos.
├── app.js           # Punto de entrada principal del programa.
└── package.json     # Configuración del proyecto y dependencias.
```

## Dependencias

El proyecto utiliza las siguientes dependencias:

- [colors](https://www.npmjs.com/package/colors): Para dar estilo al texto en la consola.
- [inquirer](https://www.npmjs.com/package/inquirer): Para crear menús interactivos en la terminal.

Para instalar todas las dependencias necesarias, ejecuta:
```bash
npm install
```

## Funciones Principales

### Crear una nueva tarea
Crea una nueva tarea con una descripción proporcionada por el usuario.

### Listar todas las tareas
Muestra todas las tareas, indicando si están completadas o pendientes.

### Filtrar tareas
Muestra solo las tareas completadas o pendientes según la elección del usuario.

### Marcar tareas como completadas
Permite seleccionar tareas y marcarlas como completadas.

### Eliminar tareas
Elimina tareas seleccionadas por el usuario.

## Contribución

Si deseas contribuir:
1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b mi-nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Añadir nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin mi-nueva-funcionalidad
   ```
5. Crea un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
