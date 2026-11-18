export interface Tarea {
    id: number,
    titulo: string,
    completada: boolean;
}

export type nuevaTarea = Omit<Tarea, 'id'>
export type cambiosTarea = Partial<nuevaTarea>