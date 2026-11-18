export interface Tarea {
    id: number,
    titulo: string,
    completada: boolean;
}

export type nuevaTarea = Pick<Tarea, 'titulo'>
export type cambiosTarea = Partial<nuevaTarea>