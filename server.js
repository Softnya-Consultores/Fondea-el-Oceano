const express = require("express");
const app = express();
app.use(express.json());
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});

//CRUD proyectos
app.get("/api/v1/projects", async (req, res) => {
    const allProjects =  await prisma.Project.findMany({});
    res.json(allProjects);
});