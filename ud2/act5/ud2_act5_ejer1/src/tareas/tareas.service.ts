import type { nuevaTarea, cambiosTarea, Tarea } from "./tarea.js";

const tareas: Tarea[] = [
    { id: 1, titulo: "Programacion", completada: true},
    { id: 2, titulo: "Base de Datos", completada: false}
]

let siguienteId = 3;

export function listarTareas() {
    return tareas
}

export function buscarTarea(id: number) {
    return tareas.find(tarea => tarea.id == id)
}

export function crearTarea(datos: nuevaTarea): Tarea {
    const nuevaTarea: Tarea = {
        id: siguienteId++,
        titulo: datos.titulo,
        completada: false
    }
    
    tareas.push(nuevaTarea)
    return nuevaTarea
}

export function completarTarea(id: number) {
    const tarea = buscarTarea(id)

    if (tarea === undefined) {
        return undefined
    }

    tarea.completada = true
    return tarea

}