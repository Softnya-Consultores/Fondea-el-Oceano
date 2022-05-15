
class DB {
    static connect() {
        const mysql      = require('mysql');
        this.connection = mysql.createConnection({
            host     : 'fondeaeloceano.xyz',
            user     : 'launchx',
            password : '&Op15b5c7',
            database : 'fondeaeloceano'
        });

        this.connection.connect();
    }

    static loadAssocList(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }
    static loadAssoc(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, row) => {
                if (err)
                    return reject(err);
                if(row.length === 0) row = [];
                else row = row[0];
                resolve(row);
            });
        });
    }
}

module.exports = DB;