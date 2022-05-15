const db = require("./../lib/DB");
db.connect();

class Projects {
    static getAllProjects() {
        return db.loadAssocList(`
            SELECT * FROM projects
        `);
    }
    static getProjectById(id) {
        return db.loadAssoc(`
            SELECT * FROM projects
            WHERE id = ?
            LIMIT 1
        `, [id]);
    }
}

module.exports = Projects;