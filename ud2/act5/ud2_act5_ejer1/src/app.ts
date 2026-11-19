import express from 'express';
import cors from 'cors';

import { tareasRouter } from "./tareas/tareas.routes.js";

import { errorHandler } from './middleware/error-handler.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/tareas', tareasRouter);
app.get("/", (_req, res) => res.redirect("/index.html"));

// Después de las rutas.
app.use((_req, res) => {
    res.status(404).json({
        error: { mensaje: 'Endpoint no encontrado' }
    });
});
app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});