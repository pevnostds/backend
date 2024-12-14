const express = require("express");
const {
  getRekamMedis,
  getRekamMedisById,
  createRekamMedis,
  updateRekamMedis,
  deleteRekamMedis,
  getRekamMedisByUser
} = require("../controller/rekammedisController");
const { authMiddleware } = require("../../middleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Rekam Medis
 *   description: API for managing Rekam Medis Data
 */

/**
 * @swagger
 * /rekam-medis/data:
 *   get:
 *     summary: Get all Rekam Medis data
 *     tags: [Rekam Medis]
 *     description: Retrieve a list of all Rekam Medis
 *     responses:
 *       200:
 *         description: A list of Rekam Medis.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The Rekam Medis ID.
 *                     example: 1.
 *                   pasien_id:
 *                     type: integer
 *                     description: The PasienId of the Rekam Medis.
 *                     example: 1.
 *                   tanggal:
 *                     type: date
 *                     description: The Tanggal of the Rekam Medis.
 *                     example: 2024-12-13.
 *                   keluhan:
 *                     type: string
 *                     description: The Keluhan of the Rekam Medis.
 *                     example: sakit perut.
 *                   diagnosis:
 *                     type: string
 *                     description: The Diagnosis of the Rekam Medis.
 *                     example: diare.
 *       404:
 *         description: Rekam Medis not found.
 */

/**
 * @swagger
 * /rekam-medis/{id}:
 *   get:
 *     summary: Get Rekam Medis by Pasien ID
 *     tags: [Rekam Medis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The Rekam Medis ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Details of a Rekam Medis.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The Rekam Medis ID.
 *                   example: 1.
 *                 pasien_id:
 *                   type: integr
 *                   description: The PasienId of the Rekam Medis.
 *                   example: 1.
 *                 tanggal:
 *                   type: date
 *                   description: The Tanggal of the Rekam Medis.
 *                   example: 2024-12-13.
 *                 keluhan:
 *                   type: string
 *                   description: The Keluhan of the Rekam Medis.
 *                   example: sakit perut.
 *                 diagnosis:
 *                   type: string
 *                   description: The Diagnosis of the Rekam Medis.
 *                   example: 2024-12-13.
 *       404:
 *         description: Rekam Medis not found.
 */

/**
 * @swagger
 * /rekam-medis/:
 *   post:
 *     summary: Create a new Rekam Medis
 *     tags: [Rekam Medis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pasien_id:
 *                 type: integer
 *                 description: The PasienId of the Rekam Medis.
 *                 example: 1.
 *               tanggal:
 *                 type: date
 *                 description: The Tanggal of the Rekam Medis
 *                 example: 2024-12-02
 *               keluhan:
 *                 type: string
 *                 description: The Keluhan of the Rekam Medis.
 *                 example: kepala pusing.
 *               diagnosis:
 *                 type: string
 *                 description: The Diagnosis of the Rekam Medis.
 *                 example: tensi tinggi.
 *     responses:
 *       201:
 *         description: Rekam Medis created successfully.
 */

/**
 * @swagger
 * /rekam-medis/{id}:
 *   put:
 *     summary: Update a Rekam Medis
 *     tags: [Rekam Medis]
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
 *               pasien_id:
 *                 type: integer
 *                 description: The PasienId of the pasien.
 *                 example: 13
 *               tanggal:
 *                 type: date
 *                 description: The Tanggal of the pasien.
 *                 example: 2024-12-04.
 *               keluhan:
 *                 type: string
 *                 description: The Keluhan of the pasien
 *                 example: Sakit Tenggorokan
 *               diagnosis:
 *                 type: integer
 *                 description: The Diagnosis of the pasien.
 *                 example: Panas Dalam
 *     responses:
 *       200:
 *         description: Rekam Medis updated successfully.
 */

/**
 * @swagger
 * /rekam-medis/{id}:
 *   delete:
 *     summary: Delete a Rekam Medis
 *     tags: [Rekam Medis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The Rekam Medis ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rekam Medis deleted successfully.
 */


router.use(authMiddleware);
router.get("/data", getRekamMedis);
router.get("/:id", getRekamMedisById);
router.get("/data/:id", getRekamMedisByUser);
router.post("/", createRekamMedis);
router.put("/:id", updateRekamMedis);
router.delete("/:id", deleteRekamMedis);

module.exports = router;
