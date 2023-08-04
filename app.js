const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const petController = require("./controllers/petController");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/pets", petController);

app.get("/", (req, res) => {
  res.send("Pet adoption");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
