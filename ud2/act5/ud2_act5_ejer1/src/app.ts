import express, {type Request,type Response,type NextFunction} from 'express';

import cors from 'cors';
import { tareasRouter } from "./tareas/tareas.routes.js";

const app = express();
const PORT = 3000;

function logger(req: Request, _res: Response, next: NextFunction) 
{
    const ahora = new Date().toISOString();
    console.log(`[${ahora}] ${req.method} ${req.originalUrl}`);
    next();
}

// Middleware
app.use('/api', logger);
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use('/api/productos', tareasRouter);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});