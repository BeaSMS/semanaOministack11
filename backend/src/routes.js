const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');
const routes  = express.Router();


routes.get('/ongs',OngController.listar);
routes.post('/ongs',OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.listar);
routes.delete('/incidents/:id', IncidentController.deletar);

routes.get('/profile', ProfileController.listar);

routes.post('/sessions', SessionController.create);



module.exports = routes;