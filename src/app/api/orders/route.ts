// pages/api/orders.ts

import prisma from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    // Assuming you have a user ID associated with the orders
    const userId = "user_id"; // Replace "user_id" with the actual user ID
    const orders = await prisma.post.findMany({
      where: {
        authorId: userId,
        published: true, // Filter based on your criteria
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
}
