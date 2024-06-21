import { libro } from "./libro";

class metodo{
    private añadir: libro[]

    constructor(){
        this.añadir = []
    }
    //añadir libro
    añadirLibro(libro: libro): void{
        this.añadir.push(libro);
        console.log(`libro '${libro.title}' agregada a la biblioteca`);
    }

    //eliminar libro
    removelibro(title:string):void{
        const index = this.añadir.findIndex(añadir=> añadir.title === title);
        if (index !== -1) {
            this.añadir.splice(index,1);
            console.log(`libro '${title}' eliminado de la biblioteca`)
        }else{
            console.log(`libro '${title}'no encontrado en la biblioteca`)
        }
    }

}
