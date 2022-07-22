const express = require('express')
const router = express.Router()
const testController = require('../testController')

/**
 * @swagger
 * /api/persons:
 *   get:
 *     summary: Returns all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/persons', testController.getAllPersons)

module.exports = router
