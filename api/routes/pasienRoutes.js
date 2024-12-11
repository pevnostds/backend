const express = require("express");
const {
  getPasiens,
  getPasienById,
  createPasien,
  updatePasien,
  deletePasien,
} = require("../controller/pasiensController");
const {authMiddleware} = require("../../middleware")

const router = express.Router();
router.use(authMiddleware)
router.get("/data", getPasiens);
router.get("/:id",getPasienById);
router.post("/", createPasien);
router.put("/:id", updatePasien);
router.delete("/:id", deletePasien);

module.exports = router;
