"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const books_1 = require("./books");
const libreria_1 = require("./libreria");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const seccionRealismoMagico = new libreria_1.Seccion('Realismo Mágico', 'Sección dedicada a libros del género Realismo Mágico');
function agregarLibro() {
    const Titulo = prompt('Ingrese el título del libro: ');
    const Autor = prompt("Ingrese el autor del libro");
    const Genero = prompt("Ingrese el Genero del libro");
    const Idioma = prompt("Ingrese el Idioma del libro");
    const Precio = prompt("Ingrese el precio del libro");
    const Formato = prompt("Ingrese el formato");
    const ISBN = prompt('Ingrese el ISBN del libro: ');
    const Descripcion = prompt("Ingrese la descripcion");
    const Estado = prompt("Ingrese el estado del libro");
    const Ubicacion = prompt("Ingrese en donde esta Ubicado");
    const Fecha_publicacion = prompt("Ingrese la fecha en la q se publico");
    const Editorial = prompt("Ingrese el editorial");
    const Paginas = prompt("Ingrese las paginas del libro");
    const Dimensiones = prompt("Ingrese sus dimensiones");
    const Peso = prompt("Ingrese el peso");
    const Disponibles = prompt("esta disponible");
    const libro = new books_1.book(Titulo, Autor, Genero, Idioma, Precio, Formato, ISBN, Descripcion, Estado, Ubicacion, Fecha_publicacion, Editorial, Paginas, Dimensiones, Peso, Disponibles);
    seccionRealismoMagico.AgregarLibro(libro);
    console.log('Libro agregado correctamente.');
}
function eliminarLibro() {
    const ISBN = prompt('Ingrese el ISBN del libro a eliminar: ');
    seccionRealismoMagico.EliminarLibro(ISBN);
    console.log('Libro eliminado correctamente.');
}
function verLibros() {
    const libros = seccionRealismoMagico.ObtenerLibros();
    if (libros.length === 0) {
        console.log('No hay libros en la sección.');
    }
    else {
        libros.forEach(libro => {
            console.log(`Título: ${libro.Titulo} Autor: ${libro.Autor} Genero: ${libro.Genero}
                Idioma: ${libro.Idioma} Precio: ${libro.Precio} Formato: ${libro.Formato}
                ISBN: ${libro.ISBN} Descripcion: ${libro.Descripcion} Estado: ${libro.Estado}
                Ubicacion: ${libro.Ubicacion} Fecha: ${libro.Fecha_publicacion}
                Editorial ${libro.Editorial} Paginas: ${libro.Paginas} Dimensiones: ${libro.Dimensiones}
                Peso: ${libro.Peso} Disponibles: ${libro.Disponible}`);
        });
    }
}
function menu() {
    let opcion;
    do {
        console.log('\n--- Menú ---');
        console.log('1. Agregar libro');
        console.log('2. Eliminar libro');
        console.log('3. Ver libros');
        console.log('4. Salir');
        opcion = prompt('Seleccione una opción: ');
        switch (opcion) {
            case '1':
                agregarLibro();
                break;
            case '2':
                eliminarLibro();
                break;
            case '3':
                verLibros();
                break;
            case '4':
                console.log('Saliendo...');
                break;
            default:
                console.log('Opción no válida. Intente de nuevo.');
        }
    } while (opcion !== '4');
}
menu();
