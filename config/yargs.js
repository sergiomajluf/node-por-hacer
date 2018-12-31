// const opts = {
//     descripcion: {
//         demand: true,
//         alias: 'd'
//     },
//     completado: {
//         demand: true,
//         alias: 'c',
//         type: 'boolean'
//     },
//     borrado: {
//         demand: true,
//         default: false,
//         alias: 'b',
//         type: 'boolean'
//     },
// }

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca la tarea como completado o pendiente'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea y la marca como completada', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion,
        completado,
        borrado: {
            demand: true,
            default: false,
            alias: 'b',
            desc: 'Marca la tarea como Borrada'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}