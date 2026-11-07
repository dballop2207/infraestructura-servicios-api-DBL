import express from 'express';
import { existsSync } from 'node:fs';

import cors from 'cors';
import { tareasRouter } from './tareas/tareas.routes.js';
import { registrarPeticiones } from './middleware/registrarPeticiones.js';
import { modoSoloLectura } from './middleware/modoSoloLectura.js';   // ← NUEVO

const app = express();
const port = 3000;

if (existsSync('.env')) {
    process.loadEnvFile();
}

// Middleware
app.use('/api', registrarPeticiones);
app.use('/api', modoSoloLectura);
app.use(cors({ origin: 'http://localhost:5600' }));
app.use(express.json());
app.use('/api/tareas', tareasRouter);
app.use(express.static("public"));

// Servidor a la escucha.
app.listen(port, () => {
    console.log(`API disponible en http://localhost:${port}`);
});

app.get("/", (_req, res) => {
  res.redirect("/index.html");
});