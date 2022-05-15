const express = require("express");
const app = express();
app.use(express.json());
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

//app.set('views', './app/views');
//app.set('view engine', 'pug');

const projects = require("./app/model/Projects");

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});

app.get("/", (req, res) => {
    //res.render('index.pug', { title: 'Hey', message: 'Hello there!'});
    res.json({ message: "Server is running" });
});

//CRUD proyectos
app.get("/v1/projects", async (req, res) => {
    const allProjects = await projects.getAllProjects();
    res.json(allProjects);
});
app.get("/v1/projects/:id", async (req, res) => {
    const project = await projects.getProjectById(req.params.id);
    res.json(project);
});
app.post("/v1/projects", async (req, res) => {
    const project = await projects.createProject(req.body);
    res.json({"inserted": project.insertId > 0 ? true : false});
});
app.put("/v1/projects/:id", async (req, res) => {
    const project = await projects.updateProject(req.params.id, req.body);
    res.json({"updated": project.affectedRows > 0 ? true : false});
});
app.delete("/v1/projects/:id", async (req, res) => {
    const project = await projects.deleteProject(req.params.id);
    res.json({"deleted": project.affectedRows > 0 ? true : false});
});

// probando.