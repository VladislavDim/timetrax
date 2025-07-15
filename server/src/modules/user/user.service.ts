import { Role } from "../../generated/prisma";
import prisma from "../../lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

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
        try {
            return await prisma.user.create({
                data: {
                    email: data.email,
                    password: data.password,
                    role: data.role,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    acceptedTerms: data.acceptedTerms,
                    acceptedMarketing: data.acceptedMarketing,
                    acceptedTermsAt: new Date(),
                    acceptedMarketingAt: data.acceptedMarketing ? new Date() : null,
                },
            });
        } catch (error: any) {
            if (
                error instanceof PrismaClientKnownRequestError &&
                error.code === "P2002"
            ) {
                const target = error.meta?.target;

                if (Array.isArray(target) && target.includes("email")) {
                    throw new Error("A user with this email already exists.");
                }

                if (Array.isArray(target) && target.includes("phone")) {
                    throw new Error("A user with this phone number already exists.");
                }

                if (typeof target === "string" && target.includes("email")) {
                    throw new Error("A user with this email already exists.");
                }

                if (typeof target === "string" && target.includes("phone")) {
                    throw new Error("A user with this phone number already exists.");
                }
            }

            throw new Error("Something went wrong while creating the user.");
        }
    }

    static async delete(id: string) {
        return prisma.user.delete({ where: { id } });
    }
}
