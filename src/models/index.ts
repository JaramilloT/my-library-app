// main.ts
import { book } from './books';
import { Seccion } from './libreria';
import { libros } from './agregar_libro';


import promptSync from 'prompt-sync';

const prompt = promptSync();

const seccionRealismoMagico = new Seccion('Realismo Mágico', 'Sección dedicada a libros del género Realismo Mágico');

function agregarLibro(): void {
    const Titulo = prompt('Ingrese el título del libro: ');
    const Autor = prompt("Ingrese el autor del libro")
    const Genero = prompt("Ingrese el Genero del libro")
    const Idioma = prompt("Ingrese el Idioma del libro")
    const Precio = prompt("Ingrese el precio del libro")
    const Formato = prompt("Ingrese el formato")
    const ISBN = prompt('Ingrese el ISBN del libro: ');
    const Descripcion = prompt("Ingrese la descripcion")
    const Estado = prompt("Ingrese el estado del libro")
    const Ubicacion = prompt("Ingrese en donde esta Ubicado")
    const Fecha_publicacion = prompt("Ingrese la fecha en la q se publico")
    const Editorial = prompt("Ingrese el editorial")
    const Paginas = prompt("Ingrese las paginas del libro")
    const Dimensiones = prompt("Ingrese sus dimensiones")
    const Peso = prompt("Ingrese el peso")
    const Disponibles = prompt("esta disponible")

    const libro = new book(Titulo,  Autor, Genero, Idioma, Precio, Formato, ISBN, Descripcion, Estado, Ubicacion, Fecha_publicacion, Editorial, Paginas, Dimensiones, Peso, Disponibles);
    seccionRealismoMagico.AgregarLibro(libro);
    console.log('Libro agregado correctamente.');
}

function eliminarLibro(): void {
    const ISBN = prompt('Ingrese el ISBN del libro a eliminar: ');
    seccionRealismoMagico.EliminarLibro(ISBN);
    console.log('Libro eliminado correctamente.');
}

function verLibros():void {
    const libros = seccionRealismoMagico.ObtenerLibros();
    if (libros.length === 0) {
        console.log('No hay libros en la sección.');
    } else {
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

function menu(): void {
    let opcion: string;
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
