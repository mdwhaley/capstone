require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { SERVER_PORT } = process.env;
const {
  createEntry,
  getCategories,
  deletePost,
  getTotalHours,
  getHoursByCategory,
} = require("./controller.js");

app.use(express.json());
app.use(cors());

app.post("/entry", createEntry);
app.delete("/entry/:id", deletePost);
app.get("/category", getCategories);
app.get("/totalHours", getTotalHours);
app.get("/categoryHours", getHoursByCategory);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));
