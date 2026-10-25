import { Equipo } from "../models/equipo.js";
import { Partido } from "../models/partido.js";
import { equiposTotales, partidosTotales } from "../data/datos.js"

//Esto devuelve el array con todos los equipos
export function obtenerEquipos(): Equipo[] {
    return equiposTotales
}

//Esto devuelve el array con todos los partidos
export function obtenerPartidos(): Partido[] {
    return partidosTotales
}

//Esto devuelve un partido específico a partir de una id
export function obtenerPartido(id:number): Partido | undefined {
    return partidosTotales.find(partido => partido.id == id)
}

//Esto devuelve un equipo específico a partir de una id
export function obtenerEquipo (id:number): Equipo | undefined {
    return equiposTotales.find(equipo => equipo.id == id)
}

//Esto devuelve un partido específico a partir de una id
export function partidosPendientes():Partido[] {
    const partidosPendientes = partidosTotales.filter(partido => !partido.jugado)
    return partidosPendientes
}

//Esto devuelve los partidos disputados con su nombre
export function partidosDisputados(): object [] {
    // Se crea una array específica con los datos
    var partDisput = partidosTotales.map(partido => {

        //Se crea constante para los equipos llamando la id del partido para acceder a los equipos a partir
        //de su id para que luego acaben devolviendo el nombre
        const local = obtenerEquipo(partido.equipoLocal)?.nombre
        const visitante = obtenerEquipo(partido.equipoVisitante)?.nombre

        //Devuelve los goles de los equipos locales y visitantes
        const golesLocales = partido.golesLocal
        const golesVisitante = partido.golesVisitante

        //Dependiendo de los goles que haya marcado cada uno, será el ganador uno u otro
        let equipoGanador = ""
        if (golesLocales > golesVisitante) {
            equipoGanador = local+""
        } else {
            equipoGanador = visitante+""
        }

        //Se usa el return para añadirlo al array
        return {
            local: local,
            visitante: visitante,
            golesLocales: golesLocales,
            golesVisitante: golesVisitante,
            equipoGanador: equipoGanador
        }
        
    })

    //Devuelve los datos del array para luego convertirlos en un json para la API
    return partDisput
}

export function resumenEstatico(): object {
    //Nombre del torneo que le ponemos
    const nombreTorneo = "Torneo Intercentros 2026"

    //Usamos el lenght para decir el numero de equipos y partidos que hay
    const totalEquipos = equiposTotales.length
    const totalPartidos = partidosTotales.length

    //Cuenta los partidos que se han jugado y los pendientes
    const partidosJugados = partidosTotales.reduce((total, partido) => partido.jugado ? total + 1: total, 0)
    const partidosPendientes = partidosTotales.reduce((total, partido) => !partido.jugado ? total + 1: total, 0)

    //Suma el total de goles que han habido en total entre los equipos locales y visitantes
    const totalGoles = partidosTotales.reduce((total, partido) => total + partido.golesLocal + partido.golesVisitante, 0)

    //Devuelve el dato en un array para luego mostrarlo
    return {
        nombreTorneo: nombreTorneo,
        totalEquipos: totalEquipos,
        totalPartidos: totalPartidos,
        partidosJugados: partidosJugados,
        partidosPendientes: partidosPendientes,
        totalGoles: totalGoles
    }
}

export function obtenerInfo(): object {
    return {
        aplicacion: "API PARTIDOS",
        version: "1.0.0",
        tecnologia: "Express",
        node: process.version
    }
}