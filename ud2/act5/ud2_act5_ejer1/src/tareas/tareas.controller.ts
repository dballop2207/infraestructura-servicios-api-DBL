import type { Request, Response } from "express";

import { 
    crearTarea, 
    completarTarea, 
    listarTareas, 
    buscarTarea 
} from "./tareas.service.js";

export function crear(req: Request, res: Response): void {
    const tarea = crearTarea(req.body);
    res.status(201).json(tarea)
}

export function completar(req: Request, res: Response): void {
    const id = Number(req.params.id) 
    const tarea = completarTarea(id)

    if (tarea === undefined) {
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
        return;
    }

    res.json(tarea);
}

export function listar(_req: Request, res: Response): void {
    const tareas = listarTareas();
    res.json(tareas)
}

export function obtenerUno(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const tarea = buscarTarea(id)

    if (tarea === undefined) {
        res.status(404).json({mensaje: 'Tarea no encontrada'})
        return;
    }

    res.json(tarea)
}