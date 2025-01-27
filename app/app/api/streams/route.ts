import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createStreamSchema = z.object({
  creatorId: z.string(),
  url: z.string()
})

export async function POST(req: NextRequest) {
  try {
    const data = createStreamSchema.parse(await req.json());

  } catch (e) {
    return NextResponse.json({
      message: "Error while adding a stream!"
    }, { status: 411 })
  }

}