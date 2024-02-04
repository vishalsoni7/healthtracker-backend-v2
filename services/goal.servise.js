const Goal = require("../models/goal.model");

const getAllGoal = async () => {
  try {
    const allGoals = await Goal.find();
    console.log(allGoals);
    return allGoals;
  } catch (error) {
    console.error("Error while fetching all goals.", error);
  }
};

const addGoal = async (givenGoal) => {
  try {
    const goalToBeAdded = new Goal(givenGoal);
    const newGoal = await goalToBeAdded.save();

    console.log(newGoal);
    return newGoal;
  } catch (error) {
    console.error("Error while adding new goal.", error);
  }
};

const deleteGoal = async (givenId) => {
  try {
    const deletedGoal = await Goal.findByIdAndDelete(givenId);

    console.log(deletedGoal);
    return deletedGoal;
  } catch (error) {
    console.error("Error while deleting goal.", error);
  }
};

module.exports = {
  getAllGoal,
  addGoal,
  deleteGoal,
};
