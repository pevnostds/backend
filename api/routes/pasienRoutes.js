const express = require("express");
const {
  getPasiens,
  getPasienById,
  createPasien,
  updatePasien,
  deletePasien,
} = require("../controller/pasiensController");
const { authMiddleware } = require("../../middleware");

const router = express.Router();

router.use(authMiddleware);
/**
 * @swagger
 * tags:
 *   name: Pasien
 *   description: API for managing pasien data
 */

/**
 * @swagger
 * /pasiens/data:
 *   get:
 *     summary: Get all pasien data
 *     tags: [Pasien]
 *     description: Retrieve a list of all pasien
 *     responses:
 *       200:
 *         description: A list of pasien.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The pasien ID.
 *                   name:
 *                     type: string
 *                     description: The name of the pasien.
 */

/**
 * @swagger
 * /pasiens/{id}:
 *   get:
 *     summary: Get pasien by ID
 *     tags: [Pasien]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The pasien ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Details of a pasien.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The pasien ID.
 *                 name:
 *                   type: string
 *                   description: The name of the pasien.
 *       404:
 *         description: Pasien not found.
 */

/**
 * @swagger
 * /pasiens/:
 *   post:
 *     summary: Create a new pasien
 *     tags: [Pasien]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *                 description: The name of the pasien.
 *                 example: Jono
 *               alamat:
 *                 type: string
 *                 description: The name of the pasien.
 *                 example: Jambi.
 *               jenis_kelamin:
 *                 type: string
 *                 description: The gender of the pasien
 *                 enum: 
 *                      - L
 *                      - P
 *                 example: L
 *               umur:
 *                 type: integer
 *                 description: The name of the pasien.
 *                 example: 1.
 *               user_id:
 *                 type: integer
 *                 description: The name of the pasien.
 *                 example: 1.
 *     responses:
 *       201:
 *         description: Pasien created successfully.
 */

/**
 * @swagger
 * /pasiens/{id}:
 *   put:
 *     summary: Update a pasien
 *     tags: [Pasien]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The pasien ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *                 description: The name of the pasien.
 *                 example: Jono
 *               alamat:
 *                 type: string
 *                 description: The name of the pasien.
 *                 example: Jambi.
 *               jenis_kelamin:
 *                 type: string
 *                 description: The gender of the pasien
 *                 enum: 
 *                      - L
 *                      - P
 *                 example: L
 *               umur:
 *                 type: integer
 *                 description: The name of the pasien.
 *                 example: 1.
 *               user_id:
 *                 type: integer
 *                 description: The name of the pasien.
 *                 example: 1.
 *     responses:
 *       200:
 *         description: Pasien updated successfully.
 */

/**
 * @swagger
 * /pasiens/{id}:
 *   delete:
 *     summary: Delete a Pasien
 *     tags: [Pasien]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The Pasien ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pasien deleted successfully.
 */

router.get("/data", getPasiens);
router.get("/:id", getPasienById);
router.post("/", createPasien);
router.put("/:id", updatePasien);
router.delete("/:id", deletePasien);

module.exports = router;
