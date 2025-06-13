import prisma from "../../lib/prisma";
import { Role } from "../../generated/prisma";
import { generateToken, hashPassword } from "../../utils/auth";

export class AuthService {

    /**
      * Registers a new user and returns a token.
      * @param data - Object containing user details like email, password, name, and optional role.
      * @returns A promise that resolves to an object with token and user.
      * @throws Error if email is already in use.
      */
    static async register(data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        acceptedTerms: boolean;
        acceptedTermsAt: Date;
        acceptedMarketing: boolean;
        acceptedMarketingAt?: Date;
        role?: Role;
    }) {
        const hashedPassword = await hashPassword(data.password);

        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                acceptedTerms: data.acceptedTerms,
                acceptedTermsAt: data.acceptedTermsAt,
                acceptedMarketing: data.acceptedMarketing,
                acceptedMarketingAt: data.acceptedMarketingAt || null,
                role: data.role || "CLIENT",
            },
        });

        const token = generateToken({ userId: user.id });

        return { token, user };
    }

}
