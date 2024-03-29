import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
