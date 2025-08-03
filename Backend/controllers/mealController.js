const mongoose = require("mongoose");
const Meal = require("../models/meal");

const MealController = {
 
  createMeal: async (req, res) => {
    try {
      const { name, ingredients, day, instructions } = req.body;

      if (!name || !ingredients || !day) {
        return res
          .status(400)
          .json({ error: "Missing required fields: name, ingredients, day" });
      }

      const newMeal = new Meal({ name, ingredients, day, instructions });
      await newMeal.save();
      res.status(201).json(newMeal);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },


  getAllMeals: async (req, res) => {
    try {
      const meals = await Meal.find();
      res.status(200).json(meals);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Get meals by day
  getMealsByDay: async (req, res) => {
    try {
      const { day } = req.params;
      const meals = await Meal.find({ day });
      res.status(200).json(meals);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },


  updateMeal: async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid meal ID format" });
      }

      const updatedMeal = await Meal.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
      });

      if (!updatedMeal) {
        return res.status(404).json({ error: "Meal not found" });
      }

      res.status(200).json(updatedMeal);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },


  deleteMeal: async (req, res) => {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid meal ID format" });
      }

      const deletedMeal = await Meal.findByIdAndDelete(id);

      if (!deletedMeal) {
        return res.status(404).json({ error: "Meal not found" });
      }

      res.status(200).json({
        message: "Meal deleted successfully",
        deletedMeal,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = MealController;
