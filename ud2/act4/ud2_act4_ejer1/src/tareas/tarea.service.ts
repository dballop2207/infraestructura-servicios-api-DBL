import type { Tarea, NuevaTarea, CambiosTarea } from "./tarea.js";

const tareasPendientes: Tarea [] = []

let siguienteId = 1;

// Lista todas las tareas que hay disponibles
export function listarTareas(): Tarea [] {
    return tareasPendientes
}

// Busca una tarea por su id
export function buscarTarea(id: number): Tarea | undefined {
    return tareasPendientes.find(tarea => tarea.id === id)
}

// Crea una nueva tarea y la mete en el array.
export function crearTarea(datos: NuevaTarea): Tarea {
    const tarea: Tarea = {
        id: siguienteId++,
        titulo: datos.titulo,
        completada: false
    }

    tareasPendientes.push(tarea)
    return tarea
}

export function completarTarea(id: number): Tarea | undefined {
    const tarea = tareasPendientes.find(tarea => tarea.id === id)

    if (tarea === undefined) {
        return undefined
    } else {
        tarea.completada = true
        return tarea
    }
}