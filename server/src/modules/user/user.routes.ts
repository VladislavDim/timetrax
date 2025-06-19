import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers } from "./user.controller";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);

export default router;
