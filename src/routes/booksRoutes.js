const express = require('express')
const router = express.Router()
const booksController = require('../controllers/booksController.js')

/**
 * @swagger
 * /api/book/getAllBooks:
 *   get:
 *     summary: Get All Books
 *     tags: [Book]
 *     responses:
 *       200:
 *         description: Get All Books
 *       500:
 *         description: Server error occured
 */
router.get('/getAllBooks', booksController.getAllBooks)

/**
 * @swagger
 * /api/book/addBook:
 *   post:
 *     summary: Add Book.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               BookName:
 *                 type: string
 *               EditionYear:
 *                 type: string
 *               Genre:
 *                 type: string
 *       required: true
 *     tags: [Book]
 *     responses:
 *       200:
 *         description: Added Book Successfully
 *       500:
 *         description: Server error occured
 */
router.get('/addBook', booksController.addBook)

module.exports = router
