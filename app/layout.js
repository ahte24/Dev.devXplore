import { Sora } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
	title: "DevXplore.tech | Your Ultimate Tech Solutions Partner",
	description:
		"Unlock the full potential of your business with DevXplore.tech's bespoke web and mobile app solutions. We create custom software that drives success worldwide.",
	keywords:
		"DevXplore, best development agency, DevXplore.tech, DevXplore reviews, technology solutions, website development, mobile app development, custom software development, tech startup, enterprise software solutions, web design, mobile UX design, local tech company, software development, DevXplore portfolio",
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
		site: "@DevXploreTech",
		title: "DevXplore.tech | Custom Web & Mobile Apps",
		description:
			"DevXplore offers top-notch web and mobile app development and design services. Transform your ideas into innovative digital solutions with our expert team.",
		image:
			"https://github.com/ahte24/Dev.devXplore/blob/master/WhatsApp%20Image%202024-07-06%20at%2012.30.01%20(1).jpeg?raw=true",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keywords} />
				<meta name="author" content={metadata.author} />
				<meta name="robots" content={metadata.robots} />
				<meta name="viewport" content={metadata.viewport} />
				<meta property="og:title" content={metadata.og.title} />
				<meta property="og:description" content={metadata.og.description} />
				<meta property="og:type" content={metadata.og.type} />
				<meta property="og:url" content={metadata.og.url} />
				<meta property="og:image" content={metadata.og.image} />
				<meta name="twitter:card" content={metadata.twitter.card} />
				<meta name="twitter:site" content={metadata.twitter.site} />
				<meta name="twitter:title" content={metadata.twitter.title} />
				<meta
					name="twitter:description"
					content={metadata.twitter.description}
				/>
				<meta name="twitter:image" content={metadata.twitter.image} />
				<link
					rel="icon"
					href="../public/favicon.ico"
					type="../public/favicon.ico"
				/>
				<link
					rel="shortcut icon"
					href="../public/favicon.ico"
					type="../public/favicon.ico"
				/>
			</Head>
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
