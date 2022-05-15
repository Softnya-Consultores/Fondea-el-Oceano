const db = require("./../lib/db");
db.connect();

class Projects {
    static getAllProjects() {
        return db.query(`
            SELECT * FROM projects
        `);
    }
}

module.exports = Projects;