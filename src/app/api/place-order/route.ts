// src/app/api/place-order/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
  const res = await request.json();
  const { title, content } = res;

  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        create: {
          name: "name will be here",
          email: "email will be here",
        },
      },
    },
  });

  return NextResponse.json({ data: result });
}
