
class DB {
    static connect() {
        const mysql      = require('mysql');
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'sql_fondeaeloceano_xyz',
            password : 'EFbpEBccTCPJtAWi',
            database : 'sql_fondeaeloceano_xyz'
        });

        this.connection.connect();
    }

    static close() {
        this.connection.end();
    }

    static query(sql, args) {
        this.connect();
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, result) => {
                this.close();
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }

    static loadAssocList(sql, args) {
        this.connect();
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                this.close();
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }
    static loadAssoc(sql, args) {
        this.connect();
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, row) => {
                this.close();
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
