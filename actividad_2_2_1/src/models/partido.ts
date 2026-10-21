export interface Partido {
    readonly id: number,
    equipoLocal: number,
    equipoVisitante: number,
    fecha: string,
    jugado: boolean,
    golesLocal: number,
    golesVisitante: number
}