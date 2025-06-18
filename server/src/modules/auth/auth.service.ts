import { generateToken, hashPassword } from "../../utils/auth";
import { UserService } from "../user/user.service";

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
        acceptedMarketing: boolean;
    }) {
        const hashedPassword = await hashPassword(data.password);

        const user = await UserService.create({
            email: data.email,
            password: hashedPassword,
            role: "CLIENT",
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            acceptedTerms: data.acceptedTerms,
            acceptedMarketing: data.acceptedMarketing,
        });

        const token = generateToken({ userId: user.id });

        return { token, user };
    }

}
