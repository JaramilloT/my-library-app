// libro.ts
export class book {
    Titulo: string;
    Autor: string;
    Genero: string;
    Idioma: string;
    Precio: string;
    Formato: string;
    ISBN: string;
    Descripcion: string;
    Estado: string;
    Ubicacion: string;
    Fecha_publicacion: string;
    Editorial: string;
    Paginas: string;
    Dimensiones: string;
    Peso: string ;
    Disponible: string;

    constructor(Titulo:string, Autor:string, Genero:string,  Idioma: string, Precio: string,  Formato: string,  ISBN: string, Descripcion:string, Estado: string, Ubicacion: string, Fecha_publicacion: string,  Editorial: string, Paginas: string, Dimensiones: string, Peso: string, Disponible: string) {
        this.Titulo = Titulo;
        this.Autor= Autor;
        this.Genero= Genero;
        this.Idioma= Idioma;
        this.Precio= Precio;
        this.Formato= Formato;
        this.ISBN = ISBN;
        this.Descripcion= Descripcion;
        this.Estado= Estado;
        this.Ubicacion= Ubicacion;
        this.Fecha_publicacion= Fecha_publicacion;
        this.Editorial= Editorial;
        this.Paginas=Paginas;
        this.Dimensiones= Dimensiones;
        this.Peso= Peso ;
        this.Disponible= Disponible;
    }
}


