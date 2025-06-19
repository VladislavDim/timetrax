import { Role } from "../../generated/prisma";
import prisma from "../../lib/prisma";

export class UserService {

    static async getAll() {
        return prisma.user.findMany();
    }

    static async getById(id: string) {
        return prisma.user.findUnique({ where: { id } });
    }

    static async create(data: {
        email: string;
        password: string;
        role?: Role;
        firstName: string;
        lastName: string;
        phone: string;
        acceptedTerms: boolean;
        acceptedMarketing: boolean;
    }) {
        return prisma.user.create({
            data: {
                email: data.email,
                password: data.password,
                role: data.role,
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                acceptedTerms: data.acceptedTerms,
                acceptedMarketing: data.acceptedMarketing,
                acceptedTermsAt: new Date() ,
                acceptedMarketingAt: data.acceptedMarketing ? new Date() : null,
            },
        });
    }

    static async delete(id: string) {
        return prisma.user.delete({ where: { id } });
    }
}
