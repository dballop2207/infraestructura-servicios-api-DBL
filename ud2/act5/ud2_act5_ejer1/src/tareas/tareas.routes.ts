import express from 'express';

import { crear, completar, listar, obtenerUno } from './tareas.controller.js';

export const tareasRouter = express.Router();

tareasRouter.get('/', listar);
tareasRouter.get('/:id', obtenerUno);
tareasRouter.post('/', crear);
tareasRouter.patch('/:id', completar);