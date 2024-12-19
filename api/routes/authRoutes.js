const express = require("express");
const router = express.Router();
const { reqisterUser,loginUser } = require("../controller/authContoller");
const {authMiddleware } = require("../../middleware");


/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API for managing Auth
 */

/**
 * @swagger
 * /auth/register/:
 *   post:
 *     summary: Create a new pasien
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The name of the username.
 *                 example: Jono
 *               email:
 *                 type: string
 *                 description: The name of the email.
 *                 example: user@gmail.com
 *               password:
 *                 type: password
 *                 description: The name of the password.
 *                 example: users123
 *               passwordConfirm:
 *                 type: password
 *                 description: The name of the password.
 *                 example: users123
 *               role:
 *                 type: string
 *                 description: The name of the role.
 *                 example: user
 *     responses:
 *       201:
 *         description: Akun created successfully.
 */

/**
 * @swagger
 * /auth/login/:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The name of the email.
 *                 example: user@gmail.com
 *               password:
 *                 type: password
 *                 description: The name of the password.
 *                 example: users123
 *     responses:
 *       201:
 *         description: User Login successfully.
 */


router.post("/register", reqisterUser);
router.post("/login", loginUser);
router.get("/verify-token", authMiddleware, (req, res) => {
    res.status(200).json({
      status: 200,
      message: "Token valid, akses diterima.",
      user:req.user
    });
  });
module.exports = router;
