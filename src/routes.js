const router = require("express").Router();
const express = require("express");
const {
  userRoutes,
  pasienRoutes,
  authUser,
  rekamMedis,
  laporanRoutes,
} = require("../api/routes");

router.use("/api/pasiens", pasienRoutes);
router.use("/api/users", userRoutes);
router.use("/api/auth", authUser);
router.use("/api/rekam-medis", rekamMedis);
router.use("/api/laporan", laporanRoutes);

module.exports = router;
