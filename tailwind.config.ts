import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        tggBold: ["Tgglifko Bold", "sans-serif"],
        tggBoldItalic: ["Tgglifko Bold Italic", "sans-serif"],
        tggExtraBold: ["Tgglifko ExtraBold", "sans-serif"],
        tggExtraBoldItalic: ["Tgglifko ExtraBold Italic", "sans-serif"],
        tggItalic: ["Tgglifko Italic", "sans-serif"],
        tggLight: ["Tgglifko Light", "sans-serif"],
        tggLightItalic: ["Tgglifko Light Italic", "sans-serif"],
        tggMedium: ["Tgglifko Medium", "sans-serif"],
        tggMediumItalic: ["Tgglifko Medium Italic", "sans-serif"],
        tggRegular: ["Tgglifko Regular", "sans-serif"],
        tggSemiBold: ["Tgglifko SemiBold", "sans-serif"],
        tggSemiBoldItalic: ["Tgglifko SemiBold Italic", "sans-serif"],
        tggUltraLight: ["Tgglifko UltraLight", "sans-serif"],
        tggUltraLightItalic: ["Tgglifko UltraLight Italic", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
