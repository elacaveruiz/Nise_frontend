import { usuarioDTO } from "../solicitud-module/usuarioDTO"
import { protectoraDTO } from "../solicitud-module/protectoraDTO"
import { animalDTO } from "../solicitud-module/mascotasDTO";

export class GestionProtectora {

    id:number;
    fecha_adopcion: string;
    identificador: string;
    tipoGestion: string;

    animalDTO: animalDTO;
    usuarioDTO: usuarioDTO;
    protectoraDTO: protectoraDTO;

}
