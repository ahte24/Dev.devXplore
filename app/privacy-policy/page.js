// pages/privacy-policy.js
import Link from "next/link";
import React from "react";
import favicon from "@/public/favicon.ico"; // Import the favicon directly if it's in the same directory

const PrivacyPolicy = () => {
	const today = new Date().toLocaleDateString();

	return (
		<>
			<div className="min-h-screen bg-[#000e0f] p-2
            ">
				<header className="text-[#e5fffd] py-6">
					<div className="container mx-auto mt-20 flex md:flex-row flex-col  md:justify-between   md:items-center gap-3">
						<h1 className="text-3xl font-bold">Privacy Policy</h1>
						<p className="text-[#5e9393]">Last updated: {today}</p>
					</div>
				</header>

				<main className="container mx-auto space-y-14 p-4 mt-6 bg-[#000e0f] border-2 rounded-xl border-[#00484e] shadow-lg">
					<section id="introduction">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							1. Introduction
						</h2>
						<p className="text-[#5f9494]">
							DevXplore (&ldquo;we,&ldquo; &ldquo;our,&ldquo; or &ldquo;us&ldquo;) is committed to protecting your
							privacy. This Privacy Policy outlines how we collect, use, and
							safeguard your information when you visit our website
							(https://www.devxplore.tech) and use our services.
						</p>
					</section>

					<section id="information-we-collect">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							2. Information We Collect
						</h2>
						<p className="text-[#5f9494]">
							We collect various types of information from our users, including:
						</p>
						<ul className="list-disc list-inside ml-4 text-[#5f9494]">
							<li>
								Personal Information: Name, email address, phone number, etc.
							</li>
							<li>
								Technical Information: IP address, browser type, operating
								system.
							</li>
							<li>
								Usage Data: Pages visited, time spent on the site, and more.
							</li>
						</ul>
					</section>

					<section id="how-we-use-your-information">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							3. How We Use Your Information
						</h2>
						<p className="text-[#5f9494]">
							We use the collected information for various purposes, including:
						</p>
						<ul className="list-disc list-inside ml-4 text-[#5f9494]">
							<li>Providing and maintaining our services.</li>
							<li>Improving our website and services.</li>
							<li>Communicating with you, including customer support.</li>
							<li>Sending marketing and promotional materials.</li>
							<li>Analyzing usage patterns and trends.</li>
						</ul>
					</section>

					<section id="sharing-your-information">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							4. Sharing Your Information
						</h2>
						<p className="text-[#5f9494]">
							We may share your information with third parties under certain
							circumstances, such as:
						</p>
						<ul className="list-disc list-inside ml-4 text-[#5f9494]">
							<li>With your consent.</li>
							<li>For legal compliance.</li>
							<li>To protect our rights and property.</li>
							<li>With service providers for business purposes.</li>
						</ul>
					</section>

					<section id="data-security">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							5. Data Security
						</h2>
						<p className="text-[#5f9494]">
							We take reasonable measures to protect your information from
							unauthorized access, use, or disclosure. However, no method of
							transmission over the Internet or method of electronic storage is
							100% secure.
						</p>
					</section>

					<section id="cookies">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							6. Cookies
						</h2>
						<p className="text-[#5f9494]">
							Our website uses cookies to enhance your experience. You can
							choose to accept or decline cookies, but this may affect your
							ability to use certain features of our website.
						</p>
					</section>

					<section id="your-rights">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							7. Your Rights
						</h2>
						<p className="text-[#5f9494]">
							You have certain rights regarding your personal information,
							including the right to access, correct, or delete your data. To
							exercise these rights, please contact us at:
						</p>
						<address className="text-[#5f9494] flex flex-col gap-1">
							<strong>DevXplore</strong>
							<div>
								Email:{" "}
								<Link
									href="mailto:solution@devxplores.tech"
									className="text-[#e5fffd] hover:underline"
								>
									solution@devxplores.tech
								</Link>
							</div>
							<div>
								Phone:{" "}
								<Link
									className="text-[#e5fffd] hover:underline"
									href="tel:+916371165893"
									target="_blank"
								>
									+91 63711 65893
								</Link>
							</div>
						</address>
					</section>

					<section id="changes-to-policy">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							8. Changes to This Privacy Policy
						</h2>
						<p className="text-[#5f9494]">
							We may update this Privacy Policy from time to time. Any changes
							will be posted on this page with an updated date. Please review
							this policy periodically for any changes.
						</p>
					</section>

					<section id="contact">
						<h2 className="text-xl font-semibold mt-4 mb-2 text-[#e5fffd]">
							9. Contact Us
						</h2>
						<p className="text-[#5f9494]">
							If you have any questions or concerns about this Privacy Policy,
							please contact us at:
						</p>
						<address className="text-[#5f9494] flex flex-col gap-1">
							<strong>DevXplore</strong>
							<div>
								Email:{" "}
								<Link
									href="mailto:solution@devxplores.tech"
									className="text-[#e5fffd] hover:underline"
								>
									solution@devxplores.tech
								</Link>
							</div>
							<div>
								Phone:{" "}
								<Link
									className="text-[#e5fffd] hover:underline"
									href="tel:+916371165893"
									target="_blank"
								>
									+91 63711 65893
								</Link>
							</div>
						</address>
					</section>
				</main>
			</div>
		</>
	);
};

export const metadata = {
	title: "Privacy Policy | DevXplore",
	description:
		"Learn how DevXplore protects your privacy and manages your data. Explore our comprehensive Privacy Policy.",
	keywords: [
		"DevXplore privacy policy",
		"data protection",
		"user privacy",
		"DevXplore data policy",
		"data security",
		"cookie policy",
		"user rights",
		"data management",
		"information security",
		"data privacy",
		"online privacy policy",
	].join(", "),
	author: "DevXplore Team",
	robots: "index, follow",
	og: {
		title: "Privacy Policy | DevXplore",
		description:
			"Learn how DevXplore protects your privacy and manages your data. Explore our comprehensive Privacy Policy.",
		type: "website",
		url: "https://www.devxplore.tech/privacy-policy",
		image: favicon.src, // Use imported favicon
		site_name: "DevXplore.tech",
	},
	twitter: {
		card: "summary_large_image",
		site: "@DevXploreTech",
		title: "Privacy Policy | DevXplore",
		description:
			"Learn how DevXplore protects your privacy and manages your data. Explore our comprehensive Privacy Policy.",
		image: favicon.src, // Use imported favicon
	},
};

export default PrivacyPolicy;
