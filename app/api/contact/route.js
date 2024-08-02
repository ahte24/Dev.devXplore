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
			html: `<div style="font-family: 'Sora', Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #f5f7fa; color: #333; padding: 30px; border-radius: 12px; box-shadow: 0 6px 12px rgba(0,0,0,0.15); max-width: 700px; margin: auto; border: 1px solid #ddd; background-image: linear-gradient(to bottom right, #ffffff, #e9f3f5);">
    <h2 style="color: #007ACC; font-size: 28px; text-align: center; margin-bottom: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">🌟 New Contact Inquiry 🌟</h2>
    <p style="color: #666; text-align: center; font-size: 16px; line-height: 1.5;">A potential client has just filled out the contact form. Here are their details:</p>
    <div style="margin-top: 30px;">
        <table style="width: 100%; border-collapse: collapse; color: #333; border-radius: 8px; overflow: hidden;">
            <thead>
                <tr style="background-color: #007ACC; color: #fff;">
                    <th style="padding: 15px; text-align: left; font-size: 18px; border-right: 2px solid #005A8D;">Field</th>
                    <th style="padding: 15px; text-align: left; font-size: 18px;">Information</th>
                </tr>
            </thead>
            <tbody>
                <tr style="background-color: #f5f7fa;">
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">Name:</td>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">${name}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">Email:</td>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}" style="color: #007ACC; text-decoration: none; transition: color 0.3s ease;">${email}</a></td>
                </tr>
                <tr style="background-color: #f5f7fa;">
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">Phone:</td>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">${phone}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">Services:</td>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">${services}</td>
                </tr>
                <tr style="background-color: #f5f7fa;">
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;">Message:</td>
                    <td style="padding: 12px; border-bottom: 1px solid #ddd;"><p style="white-space: pre-wrap; margin: 0;">${message}</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p style="text-align: center; color: #666; margin-top: 30px; font-size: 16px; line-height: 1.5;">Please consider this inquiry for prompt response.</p>
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
