import express from "express";
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductsByCategory,
  toggleFeatureProduct,
  getRecommendedProducts,
  getAllProducts,
} from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);
router.post("/", protectRoute, adminRoute, createProduct);
router.patch("/:id", protectRoute, adminRoute, toggleFeatureProduct);
router.post("/:id", protectRoute, adminRoute, deleteProduct);

export default router;
