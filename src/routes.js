const express = require('express');
const routes = express.Router();

const SettingsController = require('./controllers/SettingsController');

routes.get('/busca', SettingsController.list);

routes.post("/busca", SettingsController.store);

module.exports = routes;
