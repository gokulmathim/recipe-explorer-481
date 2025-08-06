const express = require('express');
const healthController = require('../controllers/health');
const recipesRouter = require('./recipes');

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health endpoint
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Service health check passed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Service is healthy
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 environment:
 *                   type: string
 *                   example: development
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Recipe:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         title:
 *           type: string
 *           example: Spaghetti Carbonara
 *         category:
 *           type: string
 *           example: Pasta
 *         ingredients:
 *           type: array
 *           items:
 *             type: string
 *           example: ["spaghetti", "eggs", "bacon"]
 *         cookingTime:
 *           type: integer
 *           example: 20
 *         description:
 *           type: string
 *           example: Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.
 *         instructions:
 *           type: array
 *           items:
 *             type: string
 *           example: [ "Boil spaghetti", "Cook bacon", "Mix eggs and cheese" ]
 */

// Health
router.get('/', healthController.check.bind(healthController));

// Mount sub-routers
router.use('/recipes', recipesRouter);

module.exports = router;
