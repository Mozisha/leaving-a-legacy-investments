import { NextRequest, NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_FORM_ID = process.env.KIT_FORM_ID;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    if (!KIT_API_KEY || !KIT_FORM_ID) {
      console.error("Missing KIT_API_KEY or KIT_FORM_ID env vars");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 },
      );
    }

    // Kit v4 API — subscribe to a form
    const kitRes = await fetch(
      `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": KIT_API_KEY,
        },
        body: JSON.stringify({
          email_address: email,
          first_name: firstName ?? "",
          fields: lastName ? { last_name: lastName } : undefined,
        }),
      },
    );

    if (!kitRes.ok) {
      const errorText = await kitRes.text();
      console.error("Kit API error:", kitRes.status, errorText);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: kitRes.status },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again." },
      { status: 500 },
    );
  }
}
