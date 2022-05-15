/* eslint-disable no-undef */
const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// enable files upload
app.use(fileUpload({
    createParentPath: true,
    limits: { 
        fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
    },
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

const projects = require("./app/controller/ProjectsController");
const countries = require("./app/model/Countries");
const categories = require("./app/model/Categories");

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});

app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

//paises
app.get("/v1/countries", async (req, res) => {
    const allCountries = await countries.getAllCountries();
    res.json(allCountries);
});

//categorias
app.get("/v1/categories", async (req, res) => {
    const allCategories = await categories.getAllCategories();
    res.json(allCategories);
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
    const project = await projects.createProject(req.body, req);
    res.json({"inserted": project.insertId > 0 ? true : false});
});
app.put("/v1/projects/:id", async (req, res) => {
    const project = await projects.updateProject(req.params.id, req.body, req);
    res.json({"updated": project.affectedRows > 0 ? true : false});
});
app.delete("/v1/projects/:id", async (req, res) => {
    const project = await projects.deleteProject(req.params.id);
    res.json({"deleted": project.affectedRows > 0 ? true : false});
});
