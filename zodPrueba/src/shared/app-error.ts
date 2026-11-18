export class AppError extends Error 
{
    constructor(
        public readonly status: number,
        message: string,
        public readonly details?: unknown
    ) {
        super(message);       
        // Personalizamos el nombre del error
        // para facilitar su identificación y depuración.
        this.name = 'AppError';
    }
}