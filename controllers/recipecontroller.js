const recipe = require("../models/recipemodel");
const recipeController = {
  // createRecipe
  createRecipe: async (request, response) => {
    try {
      const { title, chefName, createdAt, instructions, ingredients } =
        request.body;
      const newRecipe = new recipe({
        title,
        chefName,
        createdAt,
        instructions,
        ingredients,
      });
      await newRecipe.save();
      response.json({ message: "recipe created sucessfully" });
    } catch {
      response.status(500).json({ message: error.message });
    }
  },
  // getAllRecipes GET
  getAllRecipes: (request, response) => {
    response.json({ message: " recipe get sucessful" });
  },
  // getRecipeById get by id
  getRecipeById: (request, response) => {
    response.json({ message: " recipe get by id " });
  },
  // updateRecipe PUT
  updateRecipe: (request, response) => {
    response.json({ message: "recipe updated sucessfully" });
  },
  // deleteRecipe DELETE
  deleteRecipe: (request, response) => {
    response.json({ message: "recipe deleted sucessfully" });
  },
};

module.exports = recipeController;
