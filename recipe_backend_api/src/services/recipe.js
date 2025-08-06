const recipes = require('../data/recipes');

/**
 * RecipeService encapsulates all recipe data access and filtering logic.
 * Designed to be easily swapped for DB implementation later.
 */
class RecipeService {
  // PUBLIC_INTERFACE
  getAllRecipes({category, ingredient, maxCookingTime, search}) {
    /** 
     * Retrieve all recipes, optionally filtered by category, ingredient, cooking time, or search query.
     * 
     * @param {Object} filters - Filters to apply.
     * @param {string} [filters.category] - Recipe category.
     * @param {string} [filters.ingredient] - Ingredient included in recipe.
     * @param {number} [filters.maxCookingTime] - Max cooking time in minutes.
     * @param {string} [filters.search] - String to search for in title or description.
     * @returns {Array} Filtered recipes.
     */
    let result = [...recipes];
    if (category) {
      result = result.filter((r) => r.category.toLowerCase() === category.toLowerCase());
    }
    if (ingredient) {
      result = result.filter((r) => r.ingredients.map(i => i.toLowerCase()).includes(ingredient.toLowerCase()));
    }
    if (maxCookingTime) {
      const t = parseInt(maxCookingTime, 10);
      if (!isNaN(t)) {
        result = result.filter((r) => r.cookingTime <= t);
      }
    }
    if (search) {
      const s = search.toLowerCase();
      result = result.filter((r) =>
        r.title.toLowerCase().includes(s) ||
        (r.description && r.description.toLowerCase().includes(s))
      );
    }
    return result;
  }

  // PUBLIC_INTERFACE
  getRecipeById(id) {
    /**
     * Retrieve a single recipe by its unique ID.
     * 
     * @param {number} id - Recipe ID.
     * @returns {Object|null} - Recipe object or null if not found.
     */
    return recipes.find((r) => r.id === parseInt(id, 10)) || null;
  }

  // PUBLIC_INTERFACE
  getCategories() {
    /**
     * Return a list of all unique recipe categories.
     */
    return Array.from(new Set(recipes.map(r => r.category)));
  }

  // PUBLIC_INTERFACE
  getAllIngredients() {
    /**
     * Return a list of all unique ingredients.
     */
    const ing = new Set();
    recipes.forEach((r) => r.ingredients.forEach(i => ing.add(i)));
    return Array.from(ing);
  }
}

module.exports = new RecipeService();
