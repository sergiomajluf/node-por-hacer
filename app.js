//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            if (!tarea.borrado) {
                console.log('========== Por Hacer =========='.gray);
                console.log('Tarea \t »', tarea.descripcion.bold);
                console.log('Estado \t »', tarea.completado ? colors.green(tarea.completado) : colors.red(tarea.completado));
                console.log('Borrado\t »', tarea.completado ? colors.green(tarea.borrado) : colors.red(tarea.borrado));
                //console.log('==============================='.gray);
            }
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion, argv.borrado);
        console.log('result', borrado);
        break;

    default:

        console.log('Comando no es reconocido');
}