import express from "express";
import { Alumno } from "./alumnos.js";
const app = express();

const PORT = 3000;

const alumnos: Alumno[] = [
    {
        id: 1,
        nombre: "Ana",
        curso: "2º DAM"
    },
    {
        id: 2,
        nombre: "Luis",
        curso: "2º DAM"
    }
];

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.get("/api/saludo", (_req, res) => {
    res.json({
        mensaje: "Hola DAM"
    });
});

app.get("/api/info", (_req, res) => {
    res.json({
        aplicacion: "API 2º DAM",
        tecnologia: "Express",
        node: process.version
    });
});

app.get("/api/alumnos", (_req, res) => {
    res.json(alumnos);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});