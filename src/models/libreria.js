"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seccion = void 0;
class Seccion {
    constructor(Nombre, Descripcion) {
        this.Libros = [];
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
    }
    AgregarLibro(libro) {
        this.Libros.push(libro);
    }
    EliminarLibro(isbn) {
        this.Libros = this.Libros.filter(libro => libro.ISBN !== isbn);
    }
    ObtenerLibros() {
        return this.Libros;
    }
}
exports.Seccion = Seccion;
