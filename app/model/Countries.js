const db = require("./../lib/DB");
db.connect();

class Countries {
    static getAllCountries() {
        return db.loadAssocList(`
            SELECT *, IF(country_code="MX", true, false) selected FROM countries
            WHERE published = 1
            ORDER BY country_name
        `);
    }
}

module.exports = Countries;