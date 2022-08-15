import express from "express";
import path from "path";

const app = express();
const axios = require("axios").default;
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

axios.post("/", (req, res) => {
    res.send(console.log(req.body));
});

app.listen(8080);
