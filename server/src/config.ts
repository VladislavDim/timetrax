// config.ts
import dotenv from "dotenv";
import { SignOptions } from "jsonwebtoken";
dotenv.config();

export const config = {
    port: process.env.PORT || 5000,

    env: process.env.NODE_ENV || "development",

    db: {
        url: process.env.DATABASE_URL || (() => { throw new Error("Missing DATABASE_URL") })(),
    },

    jwt: {
        secret: process.env.JWT_SECRET || (() => { throw new Error("Missing JWT_SECRET") })(),
        expiresIn: (process.env.JWT_EXPIRES_IN || "1d") as SignOptions["expiresIn"],
    },
};
