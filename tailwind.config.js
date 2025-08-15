const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // New Standardized Color Palette
        'primary-white': '#FCFCFC',
        'primary-red': '#ED0942',
        'primary-yellow': '#FCD549',
        'secondary-yellow': 'rgba(252, 240, 194, 0.6)', // #FCF0C2 at 60% opacity
        'primary-red': '#ED0942',
        'secondary-red': 'rgba(237, 9, 66, 0.4)', // Primary Red at 40%
        'primary-blue': '#002649',
        'secondary-blue': 'rgba(12, 42, 70, 0.8)',   // #0C2A46 at 80%
        'primary-gray': 'rgba(12, 42, 70, 0.6)',     // #0C2A46 at 60%
        'secondary-gray': 'rgba(12, 42, 70, 0.4)',   // #0C2A46 at 40%
        'primary-black': '#00061A',

        // Existing Theming Colors (untouched)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
