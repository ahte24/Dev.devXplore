/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".no-scrollbar::-webkit-scrollbar": { display: "none" },
				".no-scrollbar": {
					"-ms-overflow-style": "none" /* IE and Edge */,
					"scrollbar-width": "none" /* Firefox */,
				},
				".border-image-custom": {
					borderWidth: "1px",
					borderStyle: "solid",
					borderImage:
						"linear-gradient(0deg, #00393D, #00393D), radial-gradient(30% 30% at 49.49% 100%, #00998A 0%, rgba(0, 153, 138, 0) 59.79%) 1",
				},
			};
			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};
