const express = require("express");
const ejs = require("ejs");
const PORT = process.env.PORT || 5000;

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/pages/index");
});

app.get("/covid", (req, res) => {
  res.render(__dirname + "/views/pages/covid");
});

app.get("/monkeypox", (req, res) => {
  res.render(__dirname + "/views/pages/monkeypox");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
