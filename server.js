const express = require("express");
const app = express();
app.use(express.json());
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

const projects = require("./app/model/projects");

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});

app.get("/", (req, res) => {
    res.json({
        message: "Active server"
    });
});

//CRUD proyectos
app.get("/api/v1/projects", async (req, res) => {
    const allProjects = await projects.getAllProjects();
    res.json(allProjects);
});

// probando.