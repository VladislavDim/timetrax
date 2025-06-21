import { Request, Response } from "express";
import { AuthService } from "./auth.service";


export async function registerUser(req: Request, res: Response) {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      acceptedTerms,
      acceptedMarketing,
    } = req.body;

    const result = await AuthService.register({
      email,
      password,
      firstName,
      lastName,
      phone,
      acceptedTerms,
      acceptedMarketing
    });

    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
