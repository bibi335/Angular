const { json } = require("express");
const express = require("express");
const dataservice = require("./service/data.service");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.status(444).send("GET METHOD UPDATED");
});
app.post("/", (req, res) => {
    res.send("POST METHOD");
});
app.post("/register", (req, res) => {
    console.log(req.body);
    dataservice
        .register(req.body.acno, req.body.name, req.body.password)
        .then((result) => {
            res.status(result.statusCode).json(result);
        });
});