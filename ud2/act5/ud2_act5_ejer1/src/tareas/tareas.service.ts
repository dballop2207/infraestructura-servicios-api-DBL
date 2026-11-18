import type { nuevaTarea, Tarea } from "./tarea.js";   // quitado cambiosTarea (no se usa)
import { AppError } from "../shared/app-error.js";

const tareas: Tarea[] = [
    { id: 1, titulo: "Programacion", completada: true },
    { id: 2, titulo: "Base de Datos", completada: false }
];

let siguienteId = 3;

export function listarTareas(ultimas?: number) {
    if (ultimas === undefined) {
        return tareas;
    }

    const copiaArray = [...tareas];

    copiaArray.sort((a, b) => b.id - a.id);
    
    return copiaArray.slice(0, ultimas);
}

export function buscarTarea(id: number) {
    const tarea = tareas.find(tarea => tarea.id === id);   // == → ===

    if (tarea === undefined) {
        throw new AppError(404, 'Tarea no encontrada');   // corregida la falta
    }

    return tarea;
}

export function crearTarea(datos: nuevaTarea): Tarea {
    const duplicado = tareas.some(
        tarea => tarea.titulo.toLowerCase() === datos.titulo.toLowerCase()
    );

    if (duplicado) {
        throw new AppError(409, 'Ya existe una tarea con ese título');   // corregida la falta
    }

    const nuevaTarea: Tarea = {
        id: siguienteId++,
        titulo: datos.titulo,
        completada: false
    };

    tareas.push(nuevaTarea);
    return nuevaTarea;
}

export function completarTarea(id: number) {
    const tarea = buscarTarea(id);

    tarea.completada = true;
    return tarea;
}