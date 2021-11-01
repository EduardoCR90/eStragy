
const query = require('../queries/query');

function savedCountries(req, res) {
    let countries = JSON.parse(req.body.countries);

    countries.map((country) => {
        query.setData(country)
    })
    res.send('Los registros ahora se encuentran en la base de datos.')

}

module.exports = {
    savedCountries,
}