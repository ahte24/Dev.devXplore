import { Sora } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Spinner from "@/components/RotatingBox";
import favicon from "@/public/favicon.ico"; // Import the favicon directly if it's in the same directory
import { Analytics } from "@vercel/analytics/react"; //Imp
import { SpeedInsights } from "@vercel/speed-insights/next"; //Imp
import Script from "next/script";

const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			{/* Google tag (gtag.js) */}
			<Script
				id="gtag"
				async
				src="https://www.googletagmanager.com/gtag/js?id=AW-16659229777"
			></Script>
			<Script
				id="gtag"
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
			<Script
				id="gtag"
				async
				custom-element="amp-analytics"
				src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
			></Script>
			<Head>
				{/* Link to favicon */}
				<link rel="icon" href={favicon} type="image/x-icon" />
				<link rel="shortcut icon" href={favicon} type="image/x-icon" />
			</Head>
			<body className={`${sora.className} bg-[#000e0f]`}>
				<div className="text-white relative bg-[#000e0f]">
					<Navbar />
					{children}
					<Analytics />
					<SpeedInsights />
					<div className="w-fit h-fit md:bottom-8 md:right-8 bottom-5 right-5 rounded-full fixed z-50 flex justify-center items-center">
						<Spinner />
					</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}

export const metadata = {
	title:
		"DevXplore.tech | Leading Tech Solutions for Web and Mobile Development",
	description:
		"Harness cutting-edge web and mobile app development services with DevXplore.tech. Tailored, innovative solutions for global businesses in the US, UK, and India.",
	keywords: [
		"website development agency",
		"web development agency",
		"mobile app development development agency",
		"mobile app design development agency",
		"web design development agency",
		"website design development agency",
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
