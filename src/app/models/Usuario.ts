export interface IUsuario{
    IdUsuario: number;
    Nombre: string;
    NombreUsuario: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    correo: string;
    genero: string;
    password: string;
    EsDoctor: boolean;
    
}

export class Usuario{
    IdUsuario: number;
    Nombre: string;
    NombreUsuario: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    correo: string;
    genero: string;
    password: string;
    EsDoctor: boolean;

    constructor(){}
    
}