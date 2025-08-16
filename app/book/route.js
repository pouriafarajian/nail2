import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();
    const { service, date, time, name, email, phone } = body;

    // ذخیره در دیتابیس
    const { data, error } = await supabase
      .from("bookings")
      .insert([{ service, date, time, name, email, phone }]);

    if (error) throw error;

    // اینجا بعداً ایمیل هم اضافه می‌کنیم
    return NextResponse.json({ success: true, booking: data[0] });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
