const express = require("express");
const cors = require("cors");
const app = express();

const dataBase = require("./db");

const exerciseRouter = require("./routes/exercise.router");

const foodRouter = require("./routes/food.router");

const goalRouter = require("./routes/goal.router");

// const { seedExercise } = require('./services/exercise.service')
// const { seedFood } = require('./services/food.service')
// const { seedGoal } = require('./services/goal.servise')
// seedExercise()
// seedFood()
// seedGoal()

app.use(express.json());

app.use(
  cors({
    origin: "https://healthtracking.netlify.app",
    credentials: true,
  }),
);

dataBase();

app.get("/", (req, res) => {
  res.json("Assignment Seventeen");
});

app.use("/exercises", exerciseRouter);

app.use("/foods", foodRouter);

app.use("/goals", goalRouter);

app.listen(3000, () => {
  console.log("server started.");
});
