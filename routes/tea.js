const express = require('express')
const router = express.Router()
const teaController = require('../controllers/tea')

/**
 * @swagger
 * /api/tea:
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
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
router.get('/tea', teaController.getAllTea)
router.post('/tea', teaController.newTea)
router.delete('/tea', teaController.deleteAllTea)

router.get('/tea/:name', teaController.getOneTea)
router.post('/tea/:name', teaController.newComment)
router.delete('/tea/:name', teaController.deleteOneTea)

module.exports = router
