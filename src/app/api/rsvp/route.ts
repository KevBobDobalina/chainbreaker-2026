import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Supabase environment variables not configured");
  }
  return createClient(url, key);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, route, donation_amount, message } = body;

    if (!name || !email || !route) {
      return Response.json(
        { error: "Name, email, and route are required" },
        { status: 400 }
      );
    }

    if (!["30", "60", "100"].includes(route)) {
      return Response.json(
        { error: "Invalid route selection" },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    const { data, error } = await supabase.from("rsvps").insert([
      {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        route,
        donation_amount: Math.max(0, donation_amount || 0),
        message: message?.trim() || null,
      },
    ]).select();

    if (error) {
      console.error("Supabase error:", error);
      return Response.json(
        { error: "Failed to save RSVP" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data: data[0] }, { status: 201 });
  } catch {
    return Response.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

export async function GET() {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("rsvps")
    .select("id, name, route, donation_amount, message, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return Response.json({ error: "Failed to fetch RSVPs" }, { status: 500 });
  }

  const stats = {
    total_riders: data.length,
    total_donations: data.reduce((sum, r) => sum + (r.donation_amount || 0), 0),
    by_route: {
      "30": data.filter((r) => r.route === "30").length,
      "60": data.filter((r) => r.route === "60").length,
      "100": data.filter((r) => r.route === "100").length,
    },
  };

  return Response.json({ rsvps: data, stats });
}
