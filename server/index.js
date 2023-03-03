require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { SERVER_PORT } = process.env;
const { createEntry, getCategories } = require("./controller.js");

app.use(express.json());
app.use(cors());

app.post("/entry", createEntry);

app.get("/category", getCategories);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));
