import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 🌟 Resend API Call (Pehle 'npm i resend' terminal mein run kar lena)
    // Agar Resend use nahi karna toh aap apna koi bhi SMTP provider use kar sakte hain
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "LMS Onboarding <onboarding@resend.dev>", // Domain verify hone k baad apna email laga lena
        to: "info@highrisedigital.io",
        subject: `🚨 New Student Enrollment: ${body.fullName}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #00a2ff;">New Admission Form Submitted</h2>
            <hr />
            <p><b>Full Name:</b> ${body.fullName}</p>
            <p><b>Father Name:</b> ${body.fatherName}</p>
            <p><b>Email Address:</b> ${body.email}</p>
            <p><b>Phone Number:</b> ${body.phoneNumber}</p>
            <p><b>Education Level:</b> ${body.education}</p>
            <p><b>City:</b> ${body.city}</p>
            <p><b>Age:</b> ${body.age}</p>
            <p><b>Course Path Selected:</b> ${body.course.toUpperCase()}</p>
            <p><b>Address:</b> ${body.address}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) throw new Error("Email sending failed");

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}