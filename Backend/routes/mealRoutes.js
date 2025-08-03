const express = require("express");
const router = express.Router();
const {
  getAllMeals,
  createMeal,
  getMealsByDay,
  updateMeal,
  deleteMeal,
} = require("../controllers/mealController");


router
  .route("/")
  .get(getAllMeals) 
  .post(createMeal);


router
  .route("/day/:day")
  .get(getMealsByDay); 


router
  .route("/:id")
  .put(updateMeal) 
  .delete(deleteMeal);

module.exports = router;
