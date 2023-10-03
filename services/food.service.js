const mongoose = require('mongoose');

const Food = require('../models/food.model')

const fs = require('fs');
const jsonData = fs.readFileSync('food.json', 'utf8');
const foodArray = JSON.parse(jsonData);

const seedFood = async () => {
  try {
    for (const foodData of foodArray) {
      await Food.create({
        name: foodData.name,
        calories: foodData.calories,
        protein: foodData.protein,
        carbohydrates: foodData.carbohydrates,
        fat: foodData.fat
      });
      console.log(`Food ${foodData.name} seeded.`);
    }
    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Error while seeding food database.', error);
  } finally {
    mongoose.disconnect();
  }
};

const getAllFood = async () => {
  try {
    const allFoods = await Food.find();
    console.log(allFoods)
    return allFoods
  } catch (error) {
    console.error('Error while fetching all foods.', error)
  }
}

const addFood = async (givenFood) => {
  try {
    const foodTobeAdded = new Food(givenFood)
    const newFood = await foodTobeAdded.save()

    console.log(newFood)
    return newFood

  } catch (error) {
    console.error('Error while adding new food.', error)
  }
}

const deleteFood = async (givenId) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(givenId)
    console.log(deletedFood);
    return deletedFood
  } catch (error) {
    console.error('Error while deleting food.', error)
  }
}

module.exports = {
  seedFood,
  getAllFood,
  addFood,
  deleteFood
}