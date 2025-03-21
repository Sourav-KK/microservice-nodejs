import controller from "../controller/index";
import { Router } from "express";

const { fetchAllPdts, fetchOnePdt } = controller;
const router = Router();

router.get("/", fetchAllPdts);
router.get("/:vehicle", fetchOnePdt);

export default router;
