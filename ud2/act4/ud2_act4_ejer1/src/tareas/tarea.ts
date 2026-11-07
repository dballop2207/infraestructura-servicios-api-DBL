export interface Tarea {
    id: number,
    titulo: string,
    completada: boolean
}

export type NuevaTarea = Omit<Tarea, 'id'>;
export type CambiosTarea = Partial<NuevaTarea>;