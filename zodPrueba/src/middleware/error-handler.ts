import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../shared/app-error.js';

export function errorHandler(err: unknown,_req: Request,res: Response,next: NextFunction): void 
{
    // Si la respuesta ya ha comenzado, delegamos el error
    if (res.headersSent) {
        next(err);
        return;
    }

    if (err instanceof AppError) {
        res.status(err.status).json({
            error: {
                mensaje: err.message,
                detalles: err.details
            }
        });
        return;
    }

    if (err instanceof SyntaxError && 'status' in err && err.status === 400) {
        res.status(400).json({
            error: { mensaje: 'JSON mal formado' }
        });
        return;
    }

    console.error(err);

    res.status(500).json({
        error: { mensaje: 'Error interno del servidor' }
    });
}