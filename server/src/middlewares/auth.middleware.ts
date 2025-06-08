import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../generated/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

/**
 * Middleware to authenticate JWT tokens from the Authorization header.
 * Attaches the decoded user to `req.user` if valid.
 * 
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET) as User;
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid token" });
  }
}
