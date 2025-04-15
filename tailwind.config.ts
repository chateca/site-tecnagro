/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["media", "class"], // ou "class"
	content: [
	  "./pages/**/*.{ts,tsx}",
	  "./components/**/*.{ts,tsx}",
	  "./app/**/*.{ts,tsx,mdx}",
	  "./src/**/*.{ts,tsx,mdx}",
	  "./constants/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: {
    			DEFAULT: '1rem',
    			sm: '2rem',
    			lg: '3rem',
    			xl: '4rem',
    			'2xl': '5rem'
    		}
    	},
    	fontSize: {
    		'xs': '.75rem',
    		'sm': '.875rem',
    		'base': '1rem',
    		'lg': '1.125rem',
    		'xl': '1.25rem',
    		'2xl': '1.5rem',
    		'3xl': '1.875rem',
    		'4xl': '2.25rem',
    		'5xl': '3rem',
    		'6xl': '4rem',
    		'7xl': '5rem',
    		'8xl': '6rem'
    	},
    	extend: {
    		colors: {
    			black: {
    				'1': '#00214F',
    				'2': '#344054',
    				'3': '#1D1D1B'
    			},
    			green: {
    				'1': '#13A538',
    				'2': '#6FD904',
    				'3': '#00533E'
    			},
    			gray: {
    				'25': '#FCFCFD',
    				'200': '#EAECF0',
    				'300': '#D0D5DD',
    				'500': '#667085',
    				'600': '#475467',
    				'700': '#344054',
    				'900': '#101828'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		keyframes: {
    			mediaAnimation: {
    				'50%': {
    					transform: 'translateY(-1rem)'
    				}
    			},
    			showContent: {
    				to: {
    					transform: 'translateY(0)',
    					opacity: '1',
    					filter: 'blur(0)'
    				}
    			}
    		},
    		animation: {
    			mediaAnimation: 'mediaAnimation 3s linear infinite',
    			showContent: 'showContent .5s .7s ease-in-out 1 forwards'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [import("tailwindcss-animated"), require("tailwindcss-animate")],
}

