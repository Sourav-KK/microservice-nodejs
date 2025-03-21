import userControllers from "../controllers/userController";
import { Router } from "express";

const userRoutes = Router();
const { findAllUsers, findOneUser } = userControllers;

userRoutes.get("/", findAllUsers);
userRoutes.get("/:id", findOneUser);

export default userRoutes;
