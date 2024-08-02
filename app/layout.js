import { Sora } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Spinner from "@/components/RotatingBox";
import favicon from "./favicon.ico"; // Import the favicon directly if it's in the same directory
import { Analytics } from "@vercel/analytics/react"; //Imp
import { SpeedInsights } from "@vercel/speed-insights/next"; //Imp

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
	title:
		"DevXplore.tech | Leading Tech Solutions for Web and Mobile Development",
	description:
		"Harness cutting-edge web and mobile app development services with DevXplore.tech. Tailored, innovative solutions for global businesses in the US, UK, and India.",
	keywords: [
		"devxplore",
		"best development agency",
		"devxplore.tech",
		"devxplore reviews",
		"technology solutions",
		"website development",
		"mobile app development",
		"custom software development",
		"tech startup",
		"enterprise software solutions",
		"web design",
		"mobile UX design",
		"local tech company",
		"software development",
		"devxplore portfolio",
		"IT consultancy",
		"digital transformation",
		"cloud services",
		"AI solutions",
		"blockchain development",
		"SaaS development",
		"e-commerce solutions",
		"agile development",
		"tech innovation",
		"digital agency",
		"tech consultancy",
		"MVP development",
		"full-stack development",
		// Additional expanded keywords
		"web application development",
		"cross-platform app development",
		"responsive web design",
		"user interface design",
		"user experience optimization",
		"backend development services",
		"frontend development services",
		"tech stack modernization",
		"API development services",
		"system integration services",
		"React development services",
		"AngularJS development company",
		"Node.js backend development",
		"mobile development with Flutter",
		"iOS and Android app development",
		"progressive web app solutions",
		"custom CRM solutions",
		"ERP software development",
		"cloud infrastructure services",
		"DevOps consulting services",
		"fintech software development",
		"edtech web solutions",
		"healthcare app development",
		"real estate website development",
		"e-commerce web developers",
		"travel app development",
		"retail mobile app solutions",
		"sports app developers",
		"entertainment software solutions",
		"automotive app development",
		"software development services NYC",
		"London tech consultancies",
		"Silicon Valley app developers",
		"UK-based UX designers",
		"US tech solution experts",
		"mobile development firms in USA",
		"web vikas company India",
		"mobile app banane wali company",
		"Bharat mein software solutions",
		"startup tech support India",
		"online business solutions provider India",
		"how to build an ecommerce website",
		"best mobile app developers for startups",
		"affordable UX design services in USA",
		"enterprise software development in London",
		"custom web development for small businesses",
		"full-stack developers for hire in India",
		"outsourcing web projects to India",
		"outsourcing web development projects to India",
		"best website developemnt agency in india",
	].join(", "),
	author: "DevXplore Team",
	robots: "index, follow",
	og: {
		title: "DevXplore | Leading Tech Solutions for Web and Mobile Development",
		description:
			"DevXplore offers premier web and mobile app development and design services. Transform your business with innovative digital solutions, catering to US, UK, and Indian markets.",
		type: "website",
		url: "https://www.devxplore.tech",
		image: favicon.src, // Use imported favicon
		site_name: "DevXplore.tech",
	},
	twitter: {
		card: "summary_large_image",
		site: "@DevXploreTech",
		title:
			"DevXplore.tech | Leading Tech Solutions for Web and Mobile Development",
		description:
			"DevXplore offers premier web and mobile app development and design services. Transform your business with innovative digital solutions, catering to US, UK, and Indian markets.",
		image: favicon.src, // Use imported favicon
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* Google tag (gtag.js) */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-16659229777"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16659229777');
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-16659229777/HB4gCN6HlccZENHY3oc-',
                  'event_callback': callback
                });
                return false;
              }
            `,
					}}
				/>
				<script
					async
					custom-element="amp-analytics"
					src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
				></script>

				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keywords} />
				<meta name="author" content={metadata.author} />
				<meta name="robots" content={metadata.robots} />
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

				{/* Link to favicon */}
				<link rel="icon" href={favicon.src} type="image/x-icon" />
				<link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
			</head>
			<body className={sora.className}>
				<div className="bg-[#000E0F] text-white relative">
					<Navbar />
					{children}
					<Analytics />
					<SpeedInsights />
					<div className="md:w-32 md:h-32 w-24 h-24 md:bottom-8 md:right-8 bottom-5 right-5 rounded-full fixed z-50 flex justify-center items-center">
						<Spinner />
					</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
