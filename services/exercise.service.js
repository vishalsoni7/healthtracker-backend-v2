const mongoose = require('mongoose');

const Exercise = require('../models/exercise.model')

const fs = require('fs');
const jsonData = fs.readFileSync('exercise.json', 'utf8');
const exerciseArray = JSON.parse(jsonData);

const seedExercise = async () => {
  try {
    for (const exerciseData of exerciseArray) {
      const newExercise = new Exercise({
        name: exerciseData.name,
        duration: exerciseData.duration,
        caloriesBurned: exerciseData.caloriesBurned
      })
      await newExercise.save();
      console.log(`Exercise ${newExercise.name} seeded.`)
    }
    console.log('Database seeding completed.')
  } catch (error) {
    console.error('Error while seeding exercise database.', error)
  } finally {
    mongoose.disconnect()
  }
}

const getAllExercise = async () => {
  try {
    const allExercises = await Exercise.find();

    console.log(allExercises)
    return allExercises

  } catch (error) {
    console.error('Error while fetching all exercises.', error)
  }
}

const addExercise = async (exercise) => {
  try {
    const exerciseToBeAdded = new Exercise(exercise);
    const newExercise = await exerciseToBeAdded.save()

    console.log(newExercise)
    return newExercise

  } catch (error) {
    console.error('Error while adding new exercise.', error)
  }
}

const deleteExercise = async (id) => {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(id)

    console.log(deletedExercise)
    return deletedExercise

  } catch (error) {
    console.error('Error while deleting exercise.', error)
  }
}

module.exports = {
  seedExercise,
  getAllExercise,
  addExercise,
  deleteExercise
}