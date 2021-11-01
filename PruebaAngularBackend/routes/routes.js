let express = require('express');
let api = express.Router();
let controller = require('../controller/country.controller');

api.post('/savedCountries', controller.savedCountries)

module.exports = api;