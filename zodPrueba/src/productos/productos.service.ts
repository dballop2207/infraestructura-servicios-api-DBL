import { AppError } from '../shared/app-error.js';

interface Producto 
{
    id:number,
    nombre:string,
    precio:number
}

const productos = 
[
    { id: 1, nombre: "Producto de ejemplo", precio: 9.99 },
    { id: 2, nombre: "Segundo producto", precio: 14.99 },
];

export function buscarProducto(id: number): Producto 
{
    const producto = productos.find(p => p.id === id);

    if (producto === undefined) {
        throw new AppError(404, 'Producto no encontrado');
    }

    return producto;
}