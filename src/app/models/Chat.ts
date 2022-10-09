export class Chat {
  id?: string;
  mensaje: string;
  fechaCreacion: Date;

  constructor(mensaje: string) {
    this.mensaje = mensaje;
    this.fechaCreacion = new Date();
  }
}
