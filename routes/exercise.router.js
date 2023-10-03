const express = require('express');
const exerciseRouter = express.Router();

const { getAllExercise,
  addExercise,
  deleteExercise } = require('../services/exercise.service')

// Get Exercise API
exerciseRouter.get('/', async (req, res) => {
  try {
    const allExercises = await getAllExercise()
    res.status(200).json({ message: 'All exercises.',  allExercises })
  } catch (error) {
    res.status(500).json({ message: 'Error while fetching all exercises.', error })
  }
})

// Post Exercise API
exerciseRouter.post('/', async (req, res) => {
  try {

    const { name, duration } = req.body

    if (name && duration) {
      const exerciseToBeAdded = await addExercise(req.body)
      res.status(201).json({ message: 'New exercise added.', exerciseToBeAdded })
    } else {
      res.status(400).json({ message: 'Invalid exercise data or Missing required fields' });
    }

  } catch (error) {
    res.status(500).json({ 'Error while adding new exercise.': error })
  }
})

// Delete Exercise API
exerciseRouter.delete('/:exerciseId', async (req, res) => {
  try {
    const id = req.params.exerciseId

    const deletedExercise = await deleteExercise(id)
    res.status(200).json({ message: 'Exercise deleted.', deletedExercise })
  } catch (error) {
    res.status(500).json({ message: 'Error while deleting exercise.', error })
  }
})

module.exports = exerciseRouter