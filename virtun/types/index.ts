import { User } from "@prisma/client";

export type SafeUser = Omit<User,
 "createdAt" | "updatedAt" | "emailVerified"> & {
    createdAt: string | null | undefined;
    updatedAt: string | null | undefined;
    emailVerified: string | null| undefined;
 };