import { NextResponse } from "next/server";
import currentProfile from "@/lib/current-profile";
import { Message } from "@prisma/client";
import { db } from "@/lib/db";

const MESSAGE_BATCH_SIZE = 10;

export async function GET(req: Request) {
  try {
    const profile = await currentProfile();
    const { searchParams } = new URL(req.url);

    const cursor = searchParams.get("cursor");
    const channelId = searchParams.get("channelId");

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!channelId) {
      return new NextResponse("Channel ID is required", { status: 400 });
    }

    let messages: Message[] = [];

    if (cursor) {
      messages = await db.message.findMany({
        take: MESSAGE_BATCH_SIZE,
        skip: 1,
        cursor: {
          id: cursor,
        },
        where: {
          channelId,
        },
        include: {
          member: {
            include: {
              profile: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      messages = await db.message.findMany({
        take: MESSAGE_BATCH_SIZE,
        orderBy: { createdAt: "desc" },
        where: {
          channelId,
        },
        include: {
          member: {
            include: {
              profile: true,
            },
          },
        },
      });
    }

    let nextCursor = null;

    if (messages.length === MESSAGE_BATCH_SIZE) {
      nextCursor = messages[MESSAGE_BATCH_SIZE - 1].id;
    }

    return NextResponse.json({ items: messages, nextCursor });
  } catch (error) {
    console.log("[MESSAGES_GET]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
