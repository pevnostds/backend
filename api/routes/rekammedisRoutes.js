const express = require("express");
const {
  getRekamMedis,
  getRekamMedisById,
  createRekamMedis,
  updateRekamMedis,
  deleteRekamMedis,
} = require("../controller/rekammedisController");
const { authMiddleware } = require("../../middleware");

const router = express.Router();
router.use(authMiddleware);
router.get("/data", getRekamMedis);
router.get("/:id", getRekamMedisById);
router.post("/", createRekamMedis);
router.put("/:id", updateRekamMedis);
router.delete("/:id", deleteRekamMedis);

module.exports = router;
