export interface ICitaMedica{
    IdCitaMedica: number;
    Estado: string;
    Fecha: Date;
    Hora: string;
    Minutos: string;
    Periodo: string;
    DoctorId: number;
    PacienteId: number;

}

export class CitaMedica{
    IdCitaMedica: number;
    Estado: string;
    Fecha: Date;
    Hora: string;
    Minutos: string;
    Periodo: string;
    DoctorId: number;
    PacienteId: number;

    constructor(){}

}