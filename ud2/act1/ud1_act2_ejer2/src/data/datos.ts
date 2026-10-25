import { Equipo } from "../models/equipo.js";
import { Partido } from "../models/partido.js";

export const equiposTotales: Equipo [] = 
[
  {
    "id": 1,
    "nombre": "Argentina",
    "grupo": "A"
  },
  {
    "id": 2,
    "nombre": "Arabia Saudita",
    "grupo": "B"
  },
  {
    "id": 3,
    "nombre": "Mexico",
    "grupo": "B"
  },
  {
    "id": 4,
    "nombre": "Polonia",
    "grupo": "A"
  },
  {
    "id": 5,
    "nombre": "Francia",
    "grupo": "B"
  },
  {
    "id": 6,
    "nombre": "Australia",
    "grupo": "A"
  }
]

export const partidosTotales: Partido [] = 
[
  {
    "id": 1,
    "equipoLocal": 1,
    "equipoVisitante": 2,
    "fecha": "2026-09-05",
    "jugado": true,
    "golesLocal": 3,
    "golesVisitante": 3
  },
  {
    "id": 2,
    "equipoLocal": 3,
    "equipoVisitante": 4,
    "fecha": "2026-09-11",
    "jugado": false,
    "golesLocal": 0,
    "golesVisitante": 0
  },
  {
    "id": 3,
    "equipoLocal": 5,
    "equipoVisitante": 1,
    "fecha": "2026-09-15",
    "jugado": false,
    "golesLocal": 0,
    "golesVisitante": 0
  },
  {
    "id": 4,
    "equipoLocal": 2,
    "equipoVisitante": 3,
    "fecha": "2026-09-18",
    "jugado": true,
    "golesLocal": 2,
    "golesVisitante": 1
  },
  {
    "id": 5,
    "equipoLocal": 4,
    "equipoVisitante": 5,
    "fecha": "2026-09-23",
    "jugado": false,
    "golesLocal": 0,
    "golesVisitante": 0
  },
  {
    "id": 6,
    "equipoLocal": 1,
    "equipoVisitante": 5,
    "fecha": "2026-09-25",
    "jugado": true,
    "golesLocal": 2,
    "golesVisitante": 5
  },
  {
    "id": 7,
    "equipoLocal": 2,
    "equipoVisitante": 4,
    "fecha": "2026-09-26",
    "jugado": false,
    "golesLocal": 0,
    "golesVisitante": 0
  },
  {
    "id": 8,
    "equipoLocal": 3,
    "equipoVisitante": 5,
    "fecha": "2026-09-27",
    "jugado": false,
    "golesLocal": 0,
    "golesVisitante": 0
  }
]