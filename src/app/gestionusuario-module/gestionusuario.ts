
import { animalDTO } from "../solicitud-module/mascotasDTO";
import { usuarioDTO } from "../solicitud-module/usuarioDTO";

export class Gestionusuario {
    id: number;
    fecha_entrega: string;
    donanteDTO: usuarioDTO;
    receptorDTO: usuarioDTO;
    animalDTO: animalDTO;
}
