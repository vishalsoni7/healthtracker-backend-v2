const express = require('express');
const foodRouter = express.Router();

const { getAllFood,
  addFood,
  deleteFood } = require('../services/food.service')

// Get Food API
foodRouter.get('/', async (req, res) => {
  try {
    const allFoods = await getAllFood();
    if (allFoods.length > 0) {
      res.status(200).json({ message: 'All foods',  allFoods });
    } else {
      res.status(404).json({ message: 'No food found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while fetching all foods', error });
  }
});

// Post Food API
foodRouter.post('/', async (req, res) => {
  try {
    const { name, calories, protein, carbohydrates, fat } = req.body;

    if (name && calories && protein && carbohydrates && fat) {
      const newFood = await addFood(req.body);
      res.status(201).json({ message: 'New food added',  newFood });
    } else {
      res.status(400).json({ message: 'Invalid food data or Missing required fields' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while adding new food', error });
  }
});

// Delete Food API
foodRouter.delete('/:foodId', async (req, res) => {
  try {
    const foodId = req.params.foodId

    const deletedFood = await deleteFood(foodId)
    res.status(200).json({ message: 'Food deleted',  deletedFood });
  } catch (error) {
    res.status(500).json({ message: 'Error while deleting food', error });
  }
})

module.exports = foodRouter