let express = require('express');

let api = express.Router();

let controller = require('../controller/country.controller');

api.post('/savedCountries', controller.savedCountries)
api.get('/hello', controller.hello)



module.exports = api;