import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers } from "./user.controler";

const router = Router();

/**
 * User routes for managing user data.
 * @module user.routes
 * @requires express
 * @requires user.controller
 */
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);

export default router;
