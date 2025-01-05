import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        dark_red: "var(--dark-red)",
        light_red: "var(--light-red)",
        mid_red: "var(--mid-red)",
      },
      fontFamily: {
        // sans: "var(--font-sans)",
        // mono: "var(--font-mono)",
        ps2p: ["var(--font-press-start-2p)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
