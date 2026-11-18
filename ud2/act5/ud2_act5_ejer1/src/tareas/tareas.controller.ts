import type { Request, Response } from "express";
import { crearTareaSchema, idTarea, filtroUltimasTareasCreadas } from "./tareas.schemas.js";
import { AppError } from "../shared/app-error.js";

import { 
    crearTarea, 
    completarTarea, 
    listarTareas, 
    buscarTarea 
} from "./tareas.service.js";

export function crear(req: Request, res: Response): void {
    
    const resultado = crearTareaSchema.safeParse(req.body)
    
    if (!resultado.success) {
        throw new AppError(
                400,
                'Datos incorrectos a la hora de crear',
                resultado.error.issues
           );
        }
        
    const tarea = crearTarea(resultado.data);
    res.status(201).json(tarea)

}

export function completar(req: Request, res: Response): void {
    const resultadoId = idTarea.safeParse(req.params.id);

    if (!resultadoId.success) {
        throw new AppError(
                400,
                'Datos incorrectos a la hora de completar',
                resultadoId.error.issues
        );
    }

    const tarea = completarTarea(resultadoId.data)
    res.json(tarea)
}

export function listar(req: Request, res: Response): void {
    const resultado = filtroUltimasTareasCreadas.safeParse(req.query);
    
    if (!resultado.success) {
        throw new AppError(
                400,
                'Datos incorrectos a la hora de listar',
                resultado.error.issues
        );
    }

    const tareas = listarTareas(resultado.data.ultimas);
    res.json(tareas)
}

export function obtenerUno(req: Request, res: Response): void {
    const resultadoId = idTarea.safeParse(req.params.id);

    if (!resultadoId.success) {
        throw new AppError(
                400,
                'Datos incorrectos a la hora de obtener uno',
                resultadoId.error.issues
        );
    }

    const tarea = buscarTarea(resultadoId.data)
    res.json(tarea)
}