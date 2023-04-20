/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				deram:
					'linear-gradient(269.58deg, #285A43 16.82%, rgba(47, 98, 70, 0.975088) 32.45%, rgba(71, 125, 80, 0.893056) 56.81%, rgba(105, 166, 94, 0.771528) 76.58%, rgba(140, 206, 108, 0.65) 88.99%)',
			},
			colors: {
				plantation: '#285A43',
				celadon: '#B4E0A0',
			},
		},
	},
	plugins: [],
}
