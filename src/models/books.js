"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.book = void 0;
// libro.ts
class book {
    constructor(Titulo, Autor, Genero, Idioma, Precio, Formato, ISBN, Descripcion, Estado, Ubicacion, Fecha_publicacion, Editorial, Paginas, Dimensiones, Peso, Disponible) {
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.Genero = Genero;
        this.Idioma = Idioma;
        this.Precio = Precio;
        this.Formato = Formato;
        this.ISBN = ISBN;
        this.Descripcion = Descripcion;
        this.Estado = Estado;
        this.Ubicacion = Ubicacion;
        this.Fecha_publicacion = Fecha_publicacion;
        this.Editorial = Editorial;
        this.Paginas = Paginas;
        this.Dimensiones = Dimensiones;
        this.Peso = Peso;
        this.Disponible = Disponible;
    }
}
exports.book = book;
