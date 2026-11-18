import { z } from "zod";

export const crearTareaSchema = z.strictObject({
    titulo: z.string().trim().min(4).max(80)
}) 

export const idTarea = z.coerce.number().int().positive()

export const filtroUltimasTareasCreadas = z.strictObject({
    ultimas: z.coerce.number().int().positive().max(20).optional()
})