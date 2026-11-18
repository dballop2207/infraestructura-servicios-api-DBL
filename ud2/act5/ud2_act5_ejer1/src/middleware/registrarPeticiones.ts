import express, {type Request,type Response,type NextFunction} from 'express';
import { estaBloqueada } from './modoSoloLectura.js';

export function logger(req: Request, _res: Response, next: NextFunction) 
{
    const ahora = new Date().toLocaleString('es-ES');
    
    const marca = estaBloqueada(req) ? ' [Bloqueada]' : '';
    console.log(`[${ahora}] ${req.method} ${req.originalUrl}${marca}`);
    next();
}