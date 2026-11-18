import express from 'express';
import cors from 'cors';

import { existsSync } from "fs";
import { tareasRouter } from "./tareas/tareas.routes.js";

import { logger } from './middleware/registrarPeticiones.js';
import { modoLectura } from './middleware/modoSoloLectura.js';

if (existsSync('.env')) {
    process.loadEnvFile('.env')
}

const app = express();
const PORT = 3000;

// Middleware
app.use('/api', logger);
app.use('/api', modoLectura);
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/tareas', tareasRouter);
app.get("/", (_req, res) => res.redirect("/index.html"));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});