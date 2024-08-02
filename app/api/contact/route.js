import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { name, email, phone, services, message } = await req.json();

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_ENQUIRY,
				pass: process.env.EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL_ENQUIRY,
			to: process.env.EMAIL_FIRM,
			subject: "New Enquiry from Contact Form",
			html: `
        <div style="font-family: 'Sora', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #000e0f; color: #f0f0f0; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); max-width: 600px; margin: auto;">
    <h2 style="color: #4A90E2; font-size: 28px; text-align: center; margin-bottom: 10px;">New Contact Inquiry</h2>
    <p style="color: #ccc; text-align: center; font-size: 16px;">A potential client has just filled out the contact form. Here are their details:</p>
    <table style="width: 100%; margin-top: 20px; border-collapse: collapse; color: #f0f0f0;">
        <thead>
            <tr style="background-color: #1a1a1a;">
                <th style="padding: 15px; border-bottom: 2px solid #444; text-align: left; font-size: 18px;">Field</th>
                <th style="padding: 15px; border-bottom: 2px solid #444; text-align: left; font-size: 18px;">Information</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #333;">Name:</td>
                <td style="padding: 12px; border-bottom: 1px solid #333;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #333;">Email:</td>
                <td style="padding: 12px; border-bottom: 1px solid #333;"><a href="mailto:${email}" style="color: #4A90E2; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #333;">Phone:</td>
                <td style="padding: 12px; border-bottom: 1px solid #333;">${phone}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #333;">Services:</td>
                <td style="padding: 12px; border-bottom: 1px solid #333;">${services}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #333;">Message:</td>
                <td style="padding: 12px; border-bottom: 1px solid #333;"><p style="white-space: pre-wrap; margin: 0;">${message}</p></td>
            </tr>
        </tbody>
    </table>
    <p style="text-align: center; color: #ccc; margin-top: 20px; font-size: 16px;">Please consider this inquiry for prompt response.</p>
</div>

    `,
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json({ message: "Email sent successfully" });
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ message: "Error sending email", error: error.message },
			{ status: 500 }
		);
	}
}
