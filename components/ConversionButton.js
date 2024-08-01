// components/ConversionButton.js

"use client";

export default function ConversionButton() {
	const handleClick = (event) => {
		event.preventDefault();
		gtag_report_conversion("http://www.devxplore.tech");
	};

	return <button onClick={handleClick}>Get Started</button>;
}
