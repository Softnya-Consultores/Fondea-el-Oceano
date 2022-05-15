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
    static createProject(project) {
        return db.query(`
            INSERT INTO projects SET ?
        `, project);
    }
    static updateProject(id, project) {
        return db.query(`
            UPDATE projects SET ?
            WHERE id = ?
        `, [project, id]);
    }
    static deleteProject(id) {
        return db.query(`
            DELETE FROM projects
            WHERE id = ?
        `, [id]);
    }
    
}

module.exports = Projects;