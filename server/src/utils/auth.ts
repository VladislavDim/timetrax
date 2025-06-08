import bcrypt from "bcrypt";
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { config } from "../config";

/**
 * Hashes a plain password using bcrypt.
 * @param password - The plain password to hash
 * @returns A promise that resolves to the hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

/**
 * Compares a plain password with a hashed one.
 * @param password - The plain password to compare
 * @param hashedPassword - The hashed password to compare against
 * @returns A promise that resolves to true if passwords match, false otherwise
 */
export async function comparePasswords(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

/**
 * Generates a JWT token for a given payload.
 * @param payload - The payload to include in the token
 * @returns A signed JWT token as a string
 */
export function generateToken(payload: object): string {
  const options: SignOptions = {
    expiresIn: config.jwt.expiresIn,
  };

  return jwt.sign(payload, config.jwt.secret, options);
}

/**
 * Verifies a JWT token and returns the decoded payload.
 * @param token - The JWT token to verify
 * @returns The decoded payload if valid, otherwise null
 */
export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, config.jwt.secret) as JwtPayload;
  } catch (err) {
    return null;
  }
}
