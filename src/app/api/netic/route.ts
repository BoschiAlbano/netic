import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Not Authorized" }, { status: 400 });
    }

    return NextResponse.json({ error: session }, { status: 200 });
}
