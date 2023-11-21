import { loginDTO } from "./loginDTO";

export class Usuario {

    id: number;
    nombre: string;
    telefono: number;
    direccion: string;
    email: string;
    dni: string;
    activo: boolean;
    preferenciaTipoAnimal: string;
    preferenciaTipoTamanyo: string;
    preferenciaSexo: string;
    loginDTO: loginDTO[] = [];
}
