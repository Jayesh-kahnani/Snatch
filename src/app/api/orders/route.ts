import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../lib/prisma"
import { getSession } from "next-auth/react";

export async function GET(request: NextRequest) {
  try {
    const session = await getSession({ req: request });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user?.email;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID not found in session" },
        { status: 400 }
      );
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

    return NextResponse.json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
