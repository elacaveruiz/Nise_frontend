import { loginDTO } from "./loginDTO";

export class protectoraDTO {

    id: number;
    nombre: string;
    localidad: string;
    telefono: number;
    email: string;
    loginDTO: loginDTO[] = [];
}