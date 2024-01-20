const express = require("express");
const cors = require("cors");
const app = express();

const dataBase = require("./db");

const exerciseRouter = require("./routes/exercise.router");
const foodRouter = require("./routes/food.router");
const goalRouter = require("./routes/goal.router");

app.use(express.json());
app.use(cors("*"));

dataBase();

app.get("/", (req, res) => {
  res.send("Assignment Seventeen");
});

app.use("/exercises", exerciseRouter);

app.use("/foods", foodRouter);

app.use("/goals", goalRouter);

app.listen(3000, () => {
  console.log("server started.");
});
