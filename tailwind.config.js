/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const { blue } = require('tailwindcss/colors');

const backfaceVisibility = plugin(function ({ addUtilities }) {
	addUtilities({
		'.backface-visible': {
			'backface-visibility': 'visible',
			'-moz-backface-visibility': 'visible',
			'-webkit-backface-visibility': 'visible',
			'-ms-backface-visibility': 'visible',
		},
		'.backface-hidden': {
			'backface-visibility': 'hidden',
			'-moz-backface-visibility': 'hidden',
			'-webkit-backface-visibility': 'hidden',
			'-ms-backface-visibility': 'hidden',
		},
	});
});

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-black': '#1b1b1b',
				'custom-white': '#faf1f1',
			},
			fontFamily: {
				poppins: ['Poppins', 'cursive'],
				Courgette: ['Courgette', 'cursive'],
			},
			animation: {
				slide: 'slide 30s linear infinite',
			},
			backgroundImage: {
				shard: `linear-gradient(to right, transparent, ${blue[400]}, transparent)`,
				'circle-fade-custom-white':
					'radial-gradient(circle,rgba(2,0,36,0) 0,#fff 100%)',
				'circle-fade-custom-black':
					'radial-gradient(circle,rgba(2,0,36,0) 0,#000 100%)',
			},
			keyframes: {
				slide: {
					'0%': {
						'-webkit-transform': 'translate3d(0, 0, 0)',
						'-moz-transform': 'translate3d(0, 0, 0)',
						transform: 'translate3d(0, 0, 0)',
					},
					'100%': {
						'-webkit-transform': 'translate3d(-100%,0,0)',
						'-moz-transform': 'translate3d(-100%,0,0)',
						transform: 'translate3d(-100%,0,0)',
					},
				},
			},
		},
	},
	plugins: [backfaceVisibility],
	darkMode: 'class',
};
