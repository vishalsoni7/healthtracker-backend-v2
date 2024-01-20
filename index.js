const express = require("express");
const cors = require("cors");
const app = express();

const dataBase = require("./db");

const exerciseRouter = require("./routes/exercise.router");
const foodRouter = require("./routes/food.router");
const goalRouter = require("./routes/goal.router");

dataBase();

app.use(express.json());
app.use(cors("*"));

app.get("/", (req, res) => {
  res.send("Assignment Seventeen");
});

app.use("/exercises", exerciseRouter);

app.use("/foods", foodRouter);

app.use("/goals", goalRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
