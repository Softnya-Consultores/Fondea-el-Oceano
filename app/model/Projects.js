const db = require("./../lib/DB");

class Projects {
    static getAllProjects() {
        return db.loadAssocList(`
            SELECT p.*,
                CONCAT(c.country_code, ': ', c.country_name) AS country,
                CONCAT(ca.name) AS category
            FROM projects p
                LEFT JOIN countries c ON (p.country = c.id AND c.published = 1)
                LEFT JOIN categories ca ON (p.association_type = ca.id AND ca.published = 1)
            WHERE p.published = 1
            ORDER BY p.id DESC
        `);
    }
    static getProjectById(id) {
        return db.loadAssoc(`
            SELECT *,
                CONCAT(c.country_code, ': ', c.country_name) AS country,
                CONCAT(ca.name) AS category
            FROM projects p
                LEFT JOIN countries c ON (p.country = c.id AND c.published = 1)
                LEFT JOIN categories ca ON (p.association_type = ca.id AND ca.published = 1)
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