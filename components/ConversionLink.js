// components/ConversionLink.js

"use client";

import Link from "next/link";

export default function ConversionLink() {
	const handleLinkClick = (url) => (event) => {
		event.preventDefault();
		gtag_report_conversion(url);
	};

	return (
		<Link
			href="http://www.devxplore.tech"
			onClick={handleLinkClick("http://www.devxplore.tech")}
		>
			<a>Visit Our Website</a>
		</Link>
	);
}
