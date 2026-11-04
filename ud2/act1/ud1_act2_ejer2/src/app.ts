import express from "express";
import  * as torneoServicios from "./services/torneo.service.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.get("/api/equipos", (_req, res) => {
    res.json(torneoServicios.obtenerEquipos());
});

app.get("/api/partidos", (_req, res) => {
    res.json(torneoServicios.obtenerPartidos());
});

app.get("/api/partidos/pendientes", (_req, res) => {
    res.json(torneoServicios.partidosPendientes());
});

app.get("/api/partidos/disputados", (_req, res) => {
    res.json(torneoServicios.partidosDisputados());
});

app.get("/api/partidos/resumenEstatico", (_req, res) => {
    res.json(torneoServicios.resumenEstatico());
});

app.get("/api/info", (_req, res) => {
    res.json(torneoServicios.obtenerInfo());
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
