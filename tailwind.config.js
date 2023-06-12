const colors = require('tailwindcss/colors');

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#0F1E32	',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
				'custom-c':"#262D35"
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
 
	plugins: ['	@tailwindcss/forms'],
};
