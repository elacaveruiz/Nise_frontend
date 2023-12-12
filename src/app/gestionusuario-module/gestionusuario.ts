import { mascotasDTO } from "../solicitud-module/mascotasDTO";
import { usuarioDTO } from "../solicitud-module/usuarioDTO";

export class Gestionusuario {
    id: number;
    fecha: Date;
    donanteDTO: usuarioDTO[] = [];
    receptorDTO: usuarioDTO[] = [];
    animalDTO: mascotasDTO[] = [];
}
