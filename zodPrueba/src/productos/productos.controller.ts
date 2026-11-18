import type { Request, Response } from 'express';
import { idSchema, nuevoProductoSchema, filtrosProductosSchema } from './productos.schemas.js';
import { buscarProducto } from './productos.service.js';
import { AppError } from '../shared/app-error.js';

export function obtenerUno(req: Request, res: Response): void {
    const id = obtenerId(req);
    const producto = buscarProducto(id);

    res.json(producto);
}

export function crear(req: Request, res: Response): void 
{
    const resultado = nuevoProductoSchema.safeParse(req.body);
    if (!resultado.success) {
        res.status(400).json({
            error: {
                mensaje: 'Datos incorrectos',
                detalles: resultado.error.issues
            }
        });
        return;
    }
    
    // Aqui estamos devolviendo el producto validado, para ver el resultado,
    // pero lo que se haría sería llamar al método adecuado del service.
    res.status(201).json({
        mensaje: 'Producto creado correctamente',
        producto: resultado.data
    });
}

export function listar(req: Request, res: Response): void {
    const resultado = filtrosProductosSchema.safeParse(req.query);

    if (!resultado.success) {
        res.status(400).json({
            error: { mensaje: 'Parámetros incorrectos' },
            detalles: resultado.error.issues
        });
        return;
    }

    // Aqui estamos indicando que los parámteros son correctos, pero
    // lo que se haría sería llamar al método adecuado del service.
    res.status(200).json({
        mensaje: 'Parámetros correctos',
    });
}


function obtenerId(req: Request): number {
    const resultado = idSchema.safeParse(req.params.id);

    if (!resultado.success) {
        throw new AppError(400, 'Identificador incorrecto');
    }

    return resultado.data;
}