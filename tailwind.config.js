/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				lmb: "#fafafa",
				dmb: "#202c37",
				lElement: "#111517",
				dElement: "#2b3945",
				dg: "#858585",
			},
		},
	},
	plugins: [],
};
