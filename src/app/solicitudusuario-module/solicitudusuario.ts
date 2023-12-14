import { usuarioDTO } from "../quienes-somos/usuarioDTO";
import { animalDTO } from "../solicitud-module/mascotasDTO";

export class Solicitudusuario {
    id: number;
    estadoSolicitud: string;
    tituloMotivo: string;
    motivo: string;
    animalDTO: animalDTO;
    adoptanteDTO: usuarioDTO;
    ofertanteDTO: usuarioDTO;
}
