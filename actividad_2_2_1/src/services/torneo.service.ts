import { Equipo } from "../models/equipo.js";
import { Partido } from "../models/partido.js";
import { equiposTotales, partidosTotales } from "../data/datos.js"

export function obtenerPartido(id:number): Partido | undefined {
    return partidosTotales.find(partido => partido.id == id)
}

export function obtenerEquipo (id:number): Equipo | undefined {
    return equiposTotales.find(equipo => equipo.id == id)
}

export function partidosPendiendte():Partido[] {
    const partidosPendientes = partidosTotales.filter(partido => !partido.jugado)
    return partidosPendientes
}

export function partidosDisputados(): object [] {

    var partDisput = partidosTotales.map(partido => {
        const local = obtenerEquipo(partido.equipoLocal)?.nombre
        const visitante = obtenerEquipo(partido.equipoVisitante)?.nombre
        const golesLocales = partido.golesLocal
        const golesVisitante = partido.equipoVisitante
        let equipoGanador = ""
        if (golesLocales > golesVisitante) {
            equipoGanador = local+""
        } else {
            equipoGanador = visitante+""
        }

        return {
            local: local,
            visitante: visitante,
            golesLocales: golesLocales,
            golesVisitante: golesVisitante,
            equipoGanador: equipoGanador
        }
        
    })

    return partDisput
}

export function resumenEstatico(): object {
    const nombreTorneo = "Torneo Intercentros 2026"
    const totalEquipos = equiposTotales.length
    const totalPartidos = partidosTotales.length
    const partidosJugados = partidosTotales.reduce((total, partido) => partido.jugado ? total + 1: total, 0)
    const partidosPendientes = partidosTotales.reduce((total, partido) => !partido.jugado ? total + 1: total, 0)
    const totalGoles = partidosTotales.reduce((total, partido) => total + partido.golesVisitante && partido.golesLocal, 0)

    return {
        nombreTorneo: nombreTorneo,
        totalEquipos: totalEquipos,
        totalPartidos: totalPartidos,
        partidosJugados: partidosJugados,
        partidosPendientes: partidosPendientes,
        totalGoles: totalGoles
    }
}