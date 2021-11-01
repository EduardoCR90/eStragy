//const db = require("../model");
///const Country = db.country;
//const Op = db.Sequelize.Op;
const query = require('../queries/query');

function savedCountries(req, res) {
    let countries = JSON.parse(req.body.countries);

    countries.map((country) => {
        query.setData(country)
    })
    res.send('Los registros se encuentran en la base de datos.')

}

function hello(req, res) {
    let data = query.getData();
    res.send(data);
}

module.exports = {
    savedCountries,
    hello
}