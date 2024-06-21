export class libro{
    title: string;
    Autor: string;
    Genero: string;
    Idioma: string;
    Precio: number;
    Formato: string;
    ISBN: string;
    Descripcion: string;
    Estado: string;
    Ubicacion: string;
    Fecha_publicacion: string;
    Editorial: string;
    Paginas: number;
    Dimensiones: string;
    Peso: string ;
    Disponible: string;

    constructor(
        title: string,
        Autor: string,
        Genero: string,
        Idioma: string,
        Precio: number,
        Formato: string,
        ISBN: string,
        Descripcion: string,
        Estado: string ,
        Ubicacion: string,
        Fecha_publicacion: string,
        Editorial: string,
        Paginas: number,
        Dimensiones: string,
        Peso: string ,
        Disponible: string,
    ){
        this.title= title;
        this.Autor= Autor;
        this.Genero=Genero;
        this.Idioma=Idioma
        this.Precio=Precio;
        this.Formato=Formato;
        this.ISBN=ISBN;
        this.Descripcion=Descripcion;
        this.Estado=Estado;
        this.Ubicacion=Ubicacion;
        this.Fecha_publicacion=Fecha_publicacion;
        this.Editorial=Editorial;
        this.Paginas=Paginas;
        this.Dimensiones=Dimensiones;
        this.Peso=Peso;
        this.Disponible=Disponible  ;
    }
}


