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
		"devxplore, best development agency, devxplore.tech, devxplore reviews, technology solutions, website development, mobile app development, custom software development, tech startup, enterprise software solutions, web design, mobile UX design, local tech company, software development, devxplore portfolio, IT consultancy, digital transformation, cloud services, AI solutions, blockchain development, SaaS development, e-commerce solutions, agile development, tech innovation, digital agency, tech consultancy, MVP development, full-stack development",
	author: "DevXplore Team",
	robots: "index, follow",
	viewport: "width=device-width, initial-scale=1.0",
	og: {
		title: "DevXplore | Your Ultimate Tech Solutions Partner",
		description:
			"DevXplore offers top-notch web and mobile app development and design services. Transform your ideas into innovative digital solutions with our expert team.",
		type: "website",
		url: "https://www.devxplore.tech",
		image: "https://www.devxplore.tech/favicon.ico",
		site_name: "DevXplore.tech",
	},
	twitter: {
		card: "summary_large_image",
		site: "@DevXploreTech",
		title: "DevXplore.tech | Your Ultimate Tech Solutions Partner",
		description:
			"DevXplore offers top-notch web and mobile app development and design services. Transform your ideas into innovative digital solutions with our expert team.",
		image: "https://www.devxplore.tech/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-16659229777"
				></script>
				<script>
					window.dataLayer = window.dataLayer || []; function gtag()
					{dataLayer.push(arguments)}
					gtag('js', new Date()); gtag('config', 'AW-16659229777');
				</script>
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
					href="https://www.devxplore.tech/favicon.ico"
					type="https://www.devxplore.tech/favicon.ico"
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
