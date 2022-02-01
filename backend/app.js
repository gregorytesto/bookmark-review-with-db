const cors = require('cors');
const express = require('express');

const bookmarkController = require("./controllers/bookmarkController.js");

const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res)=>{
    res.send("Welcome to Bookmarks App 2.0");
})

app.use("/bookmarks", bookmarkController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;