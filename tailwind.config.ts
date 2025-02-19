import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
	"./app/**/*.{ts,tsx,mdx}", 
	"./src/**/*.{ts,tsx,mdx}"
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			fill: {
  				'1': 'rgba(255, 255, 255, 0.10)'
  			},
  			bankGradient: '#0179FE',
  			indigo: {
  				'500': '#6172F3',
  				'700': '#3538CD'
  			},
  			success: {
  				'25': '#F6FEF9',
  				'50': '#ECFDF3',
  				'100': '#D1FADF',
  				'600': '#039855',
  				'700': '#027A48',
  				'900': '#054F31'
  			},
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
			mediaAnimation:{
				'50%':{transform:"translateY(-1rem)"}
			},
			
  			
			'showContent':{
				to:{transform:"translateY(0)", opacity:'1', filter:'blur(0)'}
			}
  		},
  		animation: {

  			'mediaAnimation':"mediaAnimation 3s linear infinite",
			'showContent':'showContent .5s .7s ease-in-out 1 forwards'
  		},
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
