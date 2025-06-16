import { Role } from "../../generated/prisma";
import prisma from "../../lib/prisma";

export class UserService {

    /**
     * Retrieves all users from the database.
     * @returns A promise that resolves to an array of user objects.
     */
    static async getAll() {
        return prisma.user.findMany();
    }

    /**
     * Retrieves a user by their unique ID.
     * @param id - The unique identifier of the user.
     * @returns A promise that resolves to the user object or null if not found.
     */
    static async getById(id: string) {
        return prisma.user.findUnique({ where: { id } });
    }

    /**
     * Creates a new user with the provided data.
     * @param data - An object containing user details such as email, password, name, and optional role.
     * @returns A promise that resolves to the created user object.
     */
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
            },
        });
    }

    /**
     * Deletes a user by their unique ID.
     * @param id - The unique identifier of the user to be deleted.
     * @returns A promise that resolves to the deleted user object.
     */
    static async delete(id: string) {
        return prisma.user.delete({ where: { id } });
    }
}
