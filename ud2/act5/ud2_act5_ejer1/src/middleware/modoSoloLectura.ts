import type { Request, Response, NextFunction } from 'express';

export function estaBloqueada(req: Request): boolean {
    const soloLectura = process.env.SOLO_LECTURA === 'si'
    const noEsLectura = req.method !== 'GET'

    return soloLectura && noEsLectura
}

export function modoLectura(req: Request,res: Response,next: NextFunction) 
{
    if (estaBloqueada(req)) {
        res.status(400).json({ mensaje: 'La API está en modo lectura' });
        return;
    }
    next();
}