import { Router } from "express";
import { createProduct, getProducts } from "../controller/product.controller.js";

const router = Router();

router.post("/products", createProduct);

router.get("/products", getProducts);

export default router;
