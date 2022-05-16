const db = require("./../lib/DB");

class Countries {
    static getAllCountries() {
        return db.loadAssocList(`
            SELECT *, IF(country_code="MX", true, false) selected, CONCAT(country_code, ': ', country_name) AS country FROM countries
            WHERE published = 1
            ORDER BY country_name
        `);
    }
}

module.exports = Countries;