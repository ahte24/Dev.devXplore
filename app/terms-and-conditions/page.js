// pages/terms-and-conditions.js
import Link from "next/link";
import React from "react";
import favicon from "@/public/favicon.ico"; // Import the favicon directly if it's in the same directory

const TermsAndConditions = () => {
	const today = new Date().toLocaleDateString();

	return (
		<>
			<div className="min-h-screen bg-[#000e0f] p-2 ">
				<header className="text-[#e5fffd] py-6">
					<div className="container mx-auto mt-20 flex md:flex-row flex-col  md:justify-between   md:items-center gap-3">
						<h1 className="text-3xl font-bold">Terms & Conditions</h1>
						<p className="text-[#5e9393]">Last updated: {today}</p>
					</div>
				</header>

				<main className="container mx-auto space-y-14 p-4 mt-6 bg-[#000e0f] border-2 rounded-xl border-[#00484e] shadow-lg">
					<section id="acceptance">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							1. Acceptance of Terms
						</h2>
						<p className="text-[#5f9494]">
							By using the website, you agree to abide by these Terms and
							Conditions and our Privacy Policy. If you do not agree with any
							part of these terms, you must not use our website.
						</p>
					</section>

					<section id="changes">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							2. Changes to Terms
						</h2>
						<p className="text-[#5f9494]">
							We reserve the right to modify these Terms and Conditions at any
							time. Any changes will be posted on this page, and it is your
							responsibility to review these terms periodically. Continued use
							of the website after any such changes shall constitute your
							consent to such changes.
						</p>
					</section>

					<section id="services">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							3. Services Offered
						</h2>
						<p className="text-[#5f9494]">
							DevXplore offers a range of services, including but not limited
							to:
						</p>
						<ul className="list-disc list-inside ml-4 text-[#5f9494]">
							<li>Web Development</li>
							<li>Mobile App Development</li>
							<li>Web and Mobile Design</li>
						</ul>
					</section>

					<section id="intellectual-property">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							4. Intellectual Property
						</h2>
						<p className="text-[#5f9494]">
							All content, trademarks, and data on this website, including but
							not limited to text, designs, graphics, and logos, are the
							property of DevXplore or its content suppliers. You may not
							reproduce, duplicate, copy, sell, resell, or exploit any portion
							of the website without express written permission from us.
						</p>
					</section>

					<section id="user-responsibilities">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							5. User Responsibilities
						</h2>
						<p className="text-[#5f9494]">
							When using our website, you agree to:
						</p>
						<ul className="list-disc list-inside ml-4 text-[#5f9494]">
							<li>Provide accurate information as required.</li>
							<li>
								Not use the website for any illegal or unauthorized purposes.
							</li>
							<li>
								Respect all applicable local, state, national, and international
								laws and regulations.
							</li>
						</ul>
					</section>

					<section id="account-registration">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							6. Account Registration
						</h2>
						<p className="text-[#5f9494]">
							To access certain services, you may need to create an account. You
							are responsible for maintaining the confidentiality of your
							account information, including your password, and for all
							activities that occur under your account.
						</p>
					</section>

					<section id="limitation-of-liability">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							7. Limitation of Liability
						</h2>
						<p className="text-[#5f9494]">
							DevXplore shall not be liable for any direct, indirect,
							incidental, special, or consequential damages resulting from the
							use or inability to use the website or services, including but not
							limited to damages for loss of profits, use, data, or other
							intangibles.
						</p>
					</section>

					<section id="indemnification">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							8. Indemnification
						</h2>
						<p className="text-[#5f9494]">
							You agree to indemnify and hold harmless DevXplore, its
							affiliates, officers, directors, employees, agents, and third
							parties from any claims, losses, liability, damages, and/or costs
							arising from your use of our website or breach of these Terms.
						</p>
					</section>

					<section id="third-party-links">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							9. Third-Party Links
						</h2>
						<p className="text-[#5f9494]">
							Our website may contain links to third-party websites that are not
							owned or controlled by DevXplore. We have no control over, and
							assume no responsibility for, the content, privacy policies, or
							practices of any third-party websites.
						</p>
					</section>

					<section id="governing-law">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							10. Governing Law
						</h2>
						<p className="text-[#5f9494]">
							These Terms and Conditions are governed by the laws of India. Any
							legal action or proceeding relating to your access to or use of
							the website shall be instituted in a competent court in India.
						</p>
					</section>

					<section id="termination">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							11. Termination
						</h2>
						<p className="text-[#5f9494]">
							DevXplore reserves the right to terminate or suspend access to our
							website and services without prior notice or liability for any
							reason whatsoever, including without limitation if you breach
							these Terms and Conditions.
						</p>
					</section>

					<section id="contact">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							12. Contact Information
						</h2>
						<p className="text-[#5f9494] my-3">
							For any questions or concerns regarding these Terms and
							Conditions, please contact us at:
						</p>
						<div className="text-[#5f9494] flex flex-col gap-1">
							<strong>DevXplore</strong>
							<div>
								Email:{"  "}
								<Link
									href="mailto:solution@devxplore.tech"
									className="text-[#e5fffd] hover:underline text-sm"
								>
									solution@devxplore.tech
								</Link>
							</div>
							<div>
								Phone:{" "}
								<Link
									className="text-[#e5fffd] hover:underline text-sm"
									href="tel:+9163711 65893"
									target="_blank"
								>
									+91 63711 65893
								</Link>
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
};

export const metadata = {
	title: "Terms & Conditions | DevXplore",
	description:
		"Explore the Terms and Conditions for using DevXplore's website and services. Understand your rights and obligations as a user.",
	keywords: [
		"Terms and Conditions",
		"DevXplore terms",
		"DevXplore policies",
		"user agreement",
		"website usage terms",
		"DevXplore legal",
		"DevXplore conditions",
		"service terms",
		"DevXplore agreement",
		"legal terms",
		"privacy and terms",
		"web development terms",
		"app development terms",
		"software agreement",
		"DevXplore services",
		"DevXplore website terms",
		"terms of use",
		"DevXplore legal notice",
		"user terms",
		"DevXplore legal agreement",
		// Additional expanded keywords
		"website development agency",
		"web development agency",
		"mobile app development agency",
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
		"best website development agency in india",
	].join(", "),
	author: "DevXplore Team",
	robots: "index, follow",
	og: {
		title: "Terms & Conditions | DevXplore",
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
			"Terms & Conditions | DevXplore",
		description:
			"DevXplore offers premier web and mobile app development and design services. Transform your business with innovative digital solutions, catering to US, UK, and Indian markets.",
		image: favicon.src, // Use imported favicon
	},
};

export default TermsAndConditions;
