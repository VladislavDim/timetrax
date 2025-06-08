import { Router } from "express";
import { registerUser } from "./auth.controller";

const router = Router();

/**
 * Authentication routes for user registration.
 * @module auth.routes
 * @requires express
 * @requires auth.controller
 */
router.post("/register", registerUser);

export default router;
