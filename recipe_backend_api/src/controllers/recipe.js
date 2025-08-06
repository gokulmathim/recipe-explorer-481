/**
 * RecipeController handles all REST endpoints for recipes.
 * Delegates business logic to RecipeService. Handles errors and formats responses.
 */
const recipeService = require('../services/recipe');

class RecipeController {
  // PUBLIC_INTERFACE
  getAll(req, res) {
    /**
     * Get all recipes, optionally filtered by query parameters.
     * Query Params: category, ingredient, maxCookingTime, search
     */
    try {
      const { category, ingredient, maxCookingTime, search } = req.query;
      const recipes = recipeService.getAllRecipes({ category, ingredient, maxCookingTime, search });
      res.status(200).json(recipes);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get recipes' });
    }
  }

  // PUBLIC_INTERFACE
  getById(req, res) {
    /**
     * Get details of a single recipe by ID (route param).
     */
    try {
      const recipe = recipeService.getRecipeById(req.params.id);
      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.status(200).json(recipe);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get recipe' });
    }
  }

  // PUBLIC_INTERFACE
  getCategories(req, res) {
    /**
     * Get unique list of all recipe categories.
     */
    try {
      const categories = recipeService.getCategories();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get categories' });
    }
  }

  // PUBLIC_INTERFACE
  getIngredients(req, res) {
    /**
     * Get unique list of all ingredients.
     */
    try {
      const ings = recipeService.getAllIngredients();
      res.status(200).json(ings);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get ingredients' });
    }
  }
}

module.exports = new RecipeController();
