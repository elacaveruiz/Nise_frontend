export class mascotasDTO {
    id: number;
    nombre: string;
    descripcion: string;
    raza: string;
    edad: number;
    disponibilidad: boolean;
    chip: boolean;
    tipoAnimal: string; //enum es un string
    tipoSexo: string;
    tipoTamanyo: string;
    fecha_entrada_protectora: string; //date tbm es un string(??)
}
