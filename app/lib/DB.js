
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

    static query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }
}

module.exports = DB;