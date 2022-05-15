const proyectModel = require('./../model/Projects');

class ProjectsController {
    static getAllProjects() {
        return proyectModel.getAllProjects();
    }
    static getProjectById(id) {
        return proyectModel.getProjectById(id);
    }
    static createProject(project, req) {
        project.image = this.uploadImage(req);
        return proyectModel.createProject(project);
    }
    static updateProject(id, project, req) {
        if(req.files) project.image = this.uploadImage(req);
        return proyectModel.updateProject(id, project);
    }
    static deleteProject(id) {
        return proyectModel.deleteProject(id);
    }
    async uploadImage(req) {
        let image = "";
        try {
            if(req.files) {
                //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
                let avatar = req.files.avatar;
                
                //Use the mv() method to place the file in upload directory (i.e. "uploads")
                await avatar.mv("./uploads/" + avatar.name);
    
                image = `https://${req.headers.host}/uploads/${avatar.name}`;
            }
        // eslint-disable-next-line no-empty
        } catch (err) {}
        return image;
    }
}

module.exports = ProjectsController;