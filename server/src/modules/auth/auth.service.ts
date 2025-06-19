import { generateToken, hashPassword } from "../../utils/auth";
import { UserService } from "../user/user.service";

export class AuthService {

   
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
