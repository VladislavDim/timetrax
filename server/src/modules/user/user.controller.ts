import { Request, Response } from "express";
import { UserService } from "./user.service";

/**
 * Retrieves all users from the database.
 * @param req - Express request object
 * @param res - Express response object
 * @returns JSON array of users
 */
export async function getUsers(req: Request, res: Response) {
  const users = await UserService.getAll();
  res.json(users);
}

/**
 * Retrieves a single user by ID.
 * @param req - Express request object containing `id` in params
 * @param res - Express response object
 * @returns JSON user object or 404 if not found
 */
export async function getUserById(req: Request, res: Response) {
  const user = await UserService.getById(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
}

/**
 * Creates a new user with the provided data.
 * @param req - Express request object containing user data in body
 * @param res - Express response object
 * @returns JSON of the created user
 */
export async function createUser(req: Request, res: Response) {
  const { email, password, name, role } = req.body;
  const user = await UserService.create({ email, password, name, role });
  res.status(201).json(user);
}

/**
 * Deletes a user by ID.
 * @param req - Express request object containing `id` in params
 * @param res - Express response object
 * @returns 204 status on success
 */
export async function deleteUser(req: Request, res: Response) {
  await UserService.delete(req.params.id);
  res.status(204).send();
}
