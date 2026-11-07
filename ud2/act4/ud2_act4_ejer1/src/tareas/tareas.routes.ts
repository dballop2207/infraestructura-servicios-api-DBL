import express from 'express';

import {listar, obtenerTarea, crear, completar} from './tarea.controller.js'

export const tareasRouter = express.Router();

tareasRouter.get('/', listar)
tareasRouter.get('/:id', obtenerTarea)
tareasRouter.post('/', crear)
tareasRouter.patch('/:id/completar', completar);