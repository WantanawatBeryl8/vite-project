/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [require("tailwindcss-animate")],
	theme: {
		extend: {
			borderRadius: {},
			colors: {}
		}
	}
}