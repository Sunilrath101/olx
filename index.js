require("dotenv").config({ path: "./.env" });
const express = require("express");
const db = require("./src/config/db");
const cors = require("cors");
const postRouter = require("./src/router/post.router");
const browseRouter = require("./src/router/browse.router");

const PORT = 5000;
const app = express();
app.use(express.json());

app.use(cors());

app.get("/", async (req, res) => {
  res.send("Welcome to olx");
});

app.use("/post", postRouter);
app.use("/browse", browseRouter);

app.listen(PORT, () => {
  db();
  console.log(`Server is runnig at ${PORT}`);
});
