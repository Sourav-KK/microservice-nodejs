import { Router } from "express";
import userControllers from "../userController";

const { findAllUsers, findOneUser } = userControllers;
const router = Router();

router.get("/", findAllUsers);
router.get("/:id", findOneUser);

export default router;
