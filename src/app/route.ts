import { NextRequest, NextResponse } from "next/server";

export async function GET (request : NextRequest) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/menu`);
}