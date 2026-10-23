import { NextRequest, NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_FORM_ID = process.env.KIT_FORM_ID;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 },
      );
    }

    if (!KIT_API_KEY || !KIT_FORM_ID) {
      console.error("[subscribe] Missing KIT_API_KEY or KIT_FORM_ID env vars");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 },
      );
    }

    const payload = {
      email_address: email.trim(),
      ...(firstName?.trim() ? { first_name: firstName.trim() } : {}),
      ...(lastName?.trim() ? { last_name: lastName.trim() } : {}),
      ...(message?.trim() ? { fields: { message: message.trim() } } : {}),
    };

    console.log("[subscribe] Sending to Kit:", {
      formId: KIT_FORM_ID,
      payload,
    });

    const kitRes = await fetch(
      `https://api.kit.com/v4/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": KIT_API_KEY,
        },
        body: JSON.stringify(payload),
      },
    );

    const responseText = await kitRes.text();

    console.log("[subscribe] Kit response:", {
      status: kitRes.status,
      body: responseText,
    });

    if (!kitRes.ok) {
      return NextResponse.json(
        { error: "Kit could not process your subscription. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[subscribe] Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again." },
      { status: 500 },
    );
  }
}
