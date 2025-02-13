import exp from "constants";
import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { createCheckoutSession } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/create-checkout-session", protectRoute, createCheckoutSession);
router.post("/create-success", protectRoute, createCheckoutSession);

export default router;
