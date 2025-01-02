const recipe = require("../models/recipemodel");
const recipeController = {
  // createRecipe
  createRecipe: (request, response) => {
    response.json({ message: "recipe created sucessfully" });
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
