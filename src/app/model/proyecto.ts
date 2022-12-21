export class proyecto{
    id?: number;
    nombre: string;
    descripcion: string;
    imag: string;

    constructor(nombre:string, descripcion:string, imag:string ){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imag = imag;
    }
}