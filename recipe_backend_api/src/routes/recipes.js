/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: Recipe management and search
 */
const express = require('express');
const recipeController = require('../controllers/recipe');

const router = express.Router();

/**
 * @swagger
 * /recipes:
 *   get:
 *     summary: Get all recipes (optionally filtered)
 *     tags: [Recipes]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by recipe category
 *       - in: query
 *         name: ingredient
 *         schema:
 *           type: string
 *         description: Filter by ingredient name
 *       - in: query
 *         name: maxCookingTime
 *         schema:
 *           type: integer
 *         description: Maximum cooking time in minutes
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search within recipe titles and descriptions
 *     responses:
 *       200:
 *         description: Recipe list retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recipe'
 */
router.get('/', recipeController.getAll.bind(recipeController));

/**
 * @swagger
 * /recipes/{id}:
 *   get:
 *     summary: Get a recipe by ID
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the recipe to retrieve
 *     responses:
 *       200:
 *         description: Recipe details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 *       404:
 *         description: Recipe not found
 */
router.get('/:id', recipeController.getById.bind(recipeController));

/**
 * @swagger
 * /recipes/categories:
 *   get:
 *     summary: Get all unique recipe categories
 *     tags: [Recipes]
 *     responses:
 *       200:
 *         description: List of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/categories/all', recipeController.getCategories.bind(recipeController));

/**
 * @swagger
 * /recipes/ingredients:
 *   get:
 *     summary: Get all unique recipe ingredients
 *     tags: [Recipes]
 *     responses:
 *       200:
 *         description: List of ingredients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/ingredients/all', recipeController.getIngredients.bind(recipeController));

module.exports = router;
