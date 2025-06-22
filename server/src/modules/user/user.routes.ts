import { Router } from "express";
import { deleteUser, getUserById, getUsers } from "./user.controller";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);

export default router;
