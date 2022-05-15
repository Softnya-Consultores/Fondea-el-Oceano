const proyectModel = require('./../model/Projects');

class ProjectsController {
    static getAllProjects() {
        return proyectModel.getAllProjects();
    }
    static getProjectById(id) {
        return proyectModel.getProjectById(id);
    }
    static createProject(project) {
        return proyectModel.createProject(project);
    }
    static updateProject(id, project) {
        return proyectModel.updateProject(id, project);
    }
    static deleteProject(id) {
        return proyectModel.deleteProject(id);
    }
}

module.exports = ProjectsController;