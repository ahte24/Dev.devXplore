import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
	title: "DevXplore | Your Ultimate Tech Solutions Partner",
	description:
		"DevXplore offers top-notch web and mobile app development and design services. Transform your ideas into innovative digital solutions with our expert team.",
	keywords:
		"web development, mobile app development, app design, tech solutions, software development, DevXplore",
	author: "DevXplore Team",
	robots: "index, follow",
	viewport: "width=device-width, initial-scale=1.0",
	og: {
		title: "DevXplore | Your Ultimate Tech Solutions Partner",
		description:
			"DevXplore offers top-notch web and mobile app development and design services. Transform your ideas into innovative digital solutions with our expert team.",
		type: "website",
		url: "https://www.devxplore.tech",
		image:
			"https://github.com/ahte24/Dev.devXplore/blob/master/WhatsApp%20Image%202024-07-06%20at%2012.30.01%20(1).jpeg?raw=true",
	},
	twitter: {
		card: "summary_large_image",
		site: "@DevXplore",
		title: "DevXplore | Your Ultimate Tech Solutions Partner",
		description:
			"DevXplore offers top-notch web and mobile app development and design services. Transform your ideas into innovative digital solutions with our expert team.",
		image:
			"https://github.com/ahte24/Dev.devXplore/blob/master/WhatsApp%20Image%202024-07-06%20at%2012.30.01%20(1).jpeg?raw=true",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={sora.className}>
				<div className="bg-[#000E0F] text-white">
					<Navbar />
					<div className="">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
