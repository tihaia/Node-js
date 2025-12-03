import express from "express";
import { register } from "../webhooks/webhookController.js";

const router = express.Router();

// POST /webhooks/register
// router.post("/register", authMiddleware, register); // с авторизацией
router.post("/register", register);

export default router;
