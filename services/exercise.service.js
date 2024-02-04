const Exercise = require("../models/exercise.model");

const getAllExercise = async () => {
  try {
    const allExercises = await Exercise.find();

    console.log(allExercises);
    return allExercises;
  } catch (error) {
    console.error("Error while fetching all exercises.", error);
  }
};

const addExercise = async (exercise) => {
  try {
    const exerciseToBeAdded = new Exercise(exercise);
    const newExercise = await exerciseToBeAdded.save();

    console.log(newExercise);
    return newExercise;
  } catch (error) {
    console.error("Error while adding new exercise.", error);
  }
};

const deleteExercise = async (id) => {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(id);

    console.log(deletedExercise);
    return deletedExercise;
  } catch (error) {
    console.error("Error while deleting exercise.", error);
  }
};

module.exports = {
  getAllExercise,
  addExercise,
  deleteExercise,
};
