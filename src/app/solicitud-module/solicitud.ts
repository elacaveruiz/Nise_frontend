import { mascotasDTO } from "./mascotasDTO";
import { usuarioDTO } from "./usuarioDTO"
import { protectoraDTO } from "./protectoraDTO"


export class Solicitud {

    id: number;
    estadoSolicitud: string;
    motivo: string;

    animalDTO: mascotasDTO[] = [];
    usuarioDTO: usuarioDTO[] = [];
    protectoraDTO: protectoraDTO;
}
