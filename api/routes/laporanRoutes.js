const express = require("express");
const {
    getLaporan
} = require("../controller/laporanController");
const {authMiddleware} = require("../../middleware")

const router = express.Router();
router.use(authMiddleware)
router.get('/laporan-pasien/:tanggalawal',getLaporan);

module.exports = router;
