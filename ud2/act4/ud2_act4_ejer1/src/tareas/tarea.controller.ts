import type { Request, Response } from 'express';

import { buscarTarea, listarTareas, crearTarea, completarTarea } from './tarea.service.js';

export function listar(_req: Request, res: Response): void {
    const productos = listarTareas();
    res.json(productos);
}

export function obtenerTarea(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const producto = buscarTarea(id);

    if (producto === undefined) {
        res.status(404).json({ mensaje: 'Tarea no encontrado' });
        return;
    }

    res.json(producto);
}

export function crear(req: Request, res: Response): void {
    const producto = crearTarea(req.body);
    res.status(201).json(producto);
}

export function completar(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const producto = completarTarea(id);

    if (producto === undefined) {
        res.status(404).json({ mensaje: 'Tarea no encontrado' });
        return;
    }

    res.json(producto);
}
