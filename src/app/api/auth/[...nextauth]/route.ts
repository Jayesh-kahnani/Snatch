// src/app/api/auth/[...nextauth]/route.ts

import { PrismaClient } from "@prisma/client";
import NextAuth, { User as NextAuthUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

interface MyUser extends NextAuthUser {
  email: string;
  name?: string;
  // Add other user-related fields as needed
}

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  
  callbacks: {
    async signIn(params) {
      const { user } = params as { user: MyUser };

      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          // If the user is not in the database, create a new user entry
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name || "", // Ensure 'name' is a string, even if it's undefined
              // Add other user-related fields as needed
            },
          });
        }

        return true; // Continue the sign-in process
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false; // Stop the sign-in process if an error occurs
      }
    },
  },
});

export { handler as GET, handler as POST };
