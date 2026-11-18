import express from "express";
import { crear, listar, obtenerUno } from "./productos/productos.controller.js";
import { errorHandler } from "./middleware/error-handler.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((_req, res) => {
    res.status(404).json({
        error: { mensaje: 'Endpoint no encontrado' }
    });
});
app.use(errorHandler);

app.post("/api/productos", (req, res) => {
    crear(req, res);
});

app.get("/api/productos/:id", (req, res) => {
    obtenerUno(req, res);
});

app.get("/api/productos", (req, res) => {
    listar(req, res);
});

// Middleware
// Importante: Hay que colocarlo después de las rutas.
app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});