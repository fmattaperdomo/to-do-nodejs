const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");
const colors = require("colors/safe");

//console.log(argv);

/**
 * node app crear -d "xxxxxx"
 * node app listar
 * node app actualizar -d "Pasear al perro" - C true
 */

let comando = argv._[0];
switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log(colors.green("============= POR HACER ========="));
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log(colors.green("================================="));
        }
        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    case "borrar":
        let borrado = porHacer.borrar_opcion(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no permitido");
}