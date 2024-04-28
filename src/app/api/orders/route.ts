import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { getSession } from "next-auth/react";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const userId = session.user?.email;

    if (!userId) {
      return res.status(400).json({ error: "User ID not found in session" });
    }

    const orders = await prisma.post.findMany({
      where: {
        author: { email: userId },
        published: true,
      },
      include: {
        author: { select: { name: true } },
      },
    });

    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
