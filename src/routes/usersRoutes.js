const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController.js')

/**
 * @swagger
 * /api/user/getAllUsers:
 *   get:
 *     summary: Get All Users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/getAllUsers', usersController.getAllUsers)

/**
 * @swagger
 * /api/user/getUser:
 *   get:
 *     summary: Get User
 *     tags: [User]
 *     parameters:
 *       - in: query
 *         name: UserId
 *         schema:
 *           type: number
 *         required: true
 *         description: UserId
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/getUser', usersController.getUser)

module.exports = router
