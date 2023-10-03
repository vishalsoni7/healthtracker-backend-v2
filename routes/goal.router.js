const express = require('express');
const goalRouter = express.Router();

const { getAllGoal,
  addGoal,
  deleteGoal } = require('../services/goal.servise')

// Get Goal API
goalRouter.get('/', async (req, res) => {
  try {
    const allGoals = await getAllGoal()
    res.status(200).json({ message: 'All goals.',  allGoals })
  } catch (error) {
    res.status(500).json({ message: 'Error while fetching all goals.', error })
  }
})

// Post Goal API
goalRouter.post('/', async (req, res) => {
  try {

    const { name, description, calories, status } = req.body

    if (name && description && calories && status) {
      const newGoal = await addGoal(req.body);
      res.status(201).json({ message: 'New goal added.', newGoal })
    } else {
      res.status(400).json({ message: 'Invalid goal data or Missing required fields' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error while adding new goal.', error })
  }
})

// Delete Goal API
goalRouter.delete('/:goalId', async (req, res) => {
  try {
    const goalId = req.params.goalId

    const deletedGoal = await deleteGoal(goalId)
    res.status(200).json({ message: 'Goal deleted.', deletedGoal })

  } catch (error) {
    req.status(500).json({ message: 'Error while deleting goal.', error })
  }
})

module.exports = goalRouter