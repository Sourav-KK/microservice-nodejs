import productContoller from "../controllers/productContoller";
import { Router } from "express";

const productRoutes = Router();

const { fetchAllPrduct, fetchOneProduct } = productContoller;

productRoutes.get("/", fetchAllPrduct);
productRoutes.get("/:vehicle", fetchOneProduct);
// productRoutes.get("/:category", fetchByCategory);

export default productRoutes;
