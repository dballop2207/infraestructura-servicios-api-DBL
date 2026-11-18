import { z } from 'zod';

export const nuevoProductoSchema = z.strictObject({
    nombre: z.string().trim().min(2).max(100),
    precio: z.number().nonnegative(),
    stock: z.number().int().nonnegative()
});

export const filtrosProductosSchema = z.strictObject({
    conStock: z.enum(['si', 'no']).optional(),
    precioMax: z.coerce.number().nonnegative().optional()
});

export type NuevoProducto= z.infer<typeof nuevoProductoSchema>
export const cambiosProductoSchema = nuevoProductoSchema.partial();
export const idSchema = z.coerce.number().int().positive();