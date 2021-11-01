const connection = require('../database/connection');
const query = {};

query.getData = () => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM `countriesdb`;'
        connection.connect((err) => {
            connection.query(sql, (error, results) => {
                if (error) throw error;
                resolve(results);
            });
        })
    })
}

query.setData = (country) => {
    return new Promise((resolve, reject) => {

        const sql = 'INSERT INTO `countries` (id, name, capital) VALUES (?, ?, ?)'
        let data = [country.id, country.name, country.capital]
        connection.connect((err) => {

            try {
                connection.query(sql, data, (error, results) => {
                    resolve(country.name)
                });
            } catch (error) {
                reject(country.name)
            }

        })
    })

}

module.exports = query;