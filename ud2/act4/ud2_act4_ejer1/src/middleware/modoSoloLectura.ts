import type { Request, Response, NextFunction } from 'express';

export function estaBloqueada(req: Request): boolean {
    const soloLectura = process.env.SOLO_LECTURA === 'si';
    const esEscritura = req.method === 'POST' || req.method === 'PATCH';
    return soloLectura && esEscritura;
}

export function modoSoloLectura(req: Request, res: Response, next: NextFunction) {
    if (estaBloqueada(req)) {
        res.status(403).json({ mensaje: 'API en modo solo lectura' });
        return;
    }
    next();
}