
const Food = require("../models/food.model");


const getAllFood = async () => {
  try {
    const allFoods = await Food.find();
    console.log(allFoods);
    return allFoods;
  } catch (error) {
    console.error("Error while fetching all foods.", error);
  }
};

const addFood = async (givenFood) => {
  try {
    const foodTobeAdded = new Food(givenFood);
    const newFood = await foodTobeAdded.save();

    console.log(newFood);
    return newFood;
  } catch (error) {
    console.error("Error while adding new food.", error);
  }
};

const deleteFood = async (givenId) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(givenId);
    console.log(deletedFood);
    return deletedFood;
  } catch (error) {
    console.error("Error while deleting food.", error);
  }
};

module.exports = {

  getAllFood,
  addFood,
  deleteFood,
};
