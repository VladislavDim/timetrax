import { Request, Response } from "express";
import { AuthService } from "./auth.service";

/**
 * Registers a new user and returns a token.
 * @param req - The request object containing user details.
 * @param res - The response object to send the result.
 * @returns A JSON response with the token and user details on success, or an error message on failure.
 */
export async function registerUser(req: Request, res: Response) {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      acceptedTerms,
      acceptedTermsAt,
      acceptedMarketing,
      acceptedMarketingAt,
      role,
    } = req.body;

    const result = await AuthService.register({
      email,
      password,
      firstName,
      lastName,
      phone,
      acceptedTerms,
      acceptedTermsAt,
      acceptedMarketing,
      acceptedMarketingAt,
      role,
    });

    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
