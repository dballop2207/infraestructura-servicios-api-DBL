import type { Request, Response, NextFunction } from 'express';
import { estaBloqueada } from './modoSoloLectura.js';

export function registrarPeticiones(req: Request, _res: Response, next: NextFunction) {
    const ahora = new Date().toLocaleString('es-ES');
    const bloqueada = estaBloqueada(req) ? ' [Bloqueada]' : '';
    console.log(`[${ahora}] ${req.method} ${req.originalUrl}${bloqueada}`);
    next();
}