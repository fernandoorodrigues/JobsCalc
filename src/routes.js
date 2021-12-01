const express = require('express'); //express é uma biblioteca para criar servidores
const routes = express.Router(); // serve para criar rotas e caminhos
const ProfileController = require('./controllers/ProfileController');
const JobController = require('./controllers/JobController');
const DashboardController = require('./controllers/DashboardController');

// const basePath = __dirname + '/views'; // caminho base, servve para arrumar um caminho especificou

// const views = __dirname + '/views/'; // __dirname serve para achar mais facil o local aonde se encontra a pasta atual

routes.get('/', DashboardController.index);
routes.get('/job', JobController.create);
routes.post('/job', JobController.save);
routes.get('/job/:id', JobController.show);
routes.post('/job/:id', JobController.update);
routes.post('/job/delete/:id', JobController.delete);
routes.get('/profile', ProfileController.index);
routes.post('/profile', ProfileController.update);

module.exports = routes;
