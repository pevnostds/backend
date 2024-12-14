const express = require("express");
const {
    getLaporan
} = require("../controller/laporanController");
const {authMiddleware} = require("../../middleware")

const router = express.Router();
router.use(authMiddleware)

/**
 * @swagger
 * tags:
 *   name: Laporan
 *   description: API for managing Laporan Data
 */

/**
 * @swagger
 * /laporan/laporan-pasien/{tanggalawal}:
 *   get:
 *     summary: Get Laporan  by Tanggal
 *     tags: [Laporan]
 *     parameters:
 *       - in: path
 *         name: tanggalawal
 *         required: true
 *         description: The Laporan Tanggal
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
 *                 tanggal:
 *                   type: date
 *                   description: The Tanggal Laporan.
 *                   example: 2024-12-04
 *       404:
 *         description: Rekam Medis not found.
 */

router.get('/laporan-pasien/:tanggalawal',getLaporan);

module.exports = router;
