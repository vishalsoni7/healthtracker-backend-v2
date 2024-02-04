const mongoose = require("mongoose");
const Goal = require("../models/goal.model");

// const fs = require('fs');
// const jsonData = fs.readFileSync('goal.json', 'utf8');
// const goalArray = JSON.parse(jsonData);

// const seedGoal = async () => {
//   try {
//     for (const goalData of goalArray) {
//       await Goal.create({
//         name: goalData.name,
//         description: goalData.description,
//         calories: goalData.calories,
//         status: goalData.status
//       });
//       console.log(`Food ${goalData.name} seeded.`);
//     }
//     console.log('Database seeding completed.');
//   } catch (error) {
//     console.error('Error while seeding goal database.', error);
//   } finally {
//     mongoose.disconnect();
//   }
// };

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
  seedGoal,
  getAllGoal,
  addGoal,
  deleteGoal,
};
