/**
 * @swagger
 * tags:
 *   name: Students
 *   description: API for managing students
 */


const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
/**
 * @swagger
 * /generate-document:
 *   post:
 *     summary: Generate a Word document
 *     tags: [Documents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               college:
 *                 type: string
 *               course:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/vnd.openxmlformats-officedocument.wordprocessingml.document:
 *             schema:
 *               type: string
 *               format: binary
 */

//  route handlers here
router.post('/', documentController.generateDocument);

module.exports = router;