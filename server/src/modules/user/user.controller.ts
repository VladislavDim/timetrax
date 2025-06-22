import { Request, Response } from "express";
import { UserService } from "./user.service";

export async function getUsers(req: Request, res: Response) {
  const users = await UserService.getAll();
  res.json(users);
}

export async function getUserById(req: Request, res: Response) {
  const user = await UserService.getById(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
}

export async function deleteUser(req: Request, res: Response) {
  await UserService.delete(req.params.id);
  res.status(204).send();
}
