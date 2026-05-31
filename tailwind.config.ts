import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A1F44",
        slate: {
          DEFAULT: "#64748B",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          500: "#64748B",
          700: "#334155"
        },
        mist: "#F6F8FB",
        brand: {
          50: "#EAF5FF",
          100: "#D5EAFF",
          500: "#1D78D0",
          600: "#145FA8",
          700: "#0D4A79"
        },
        gold: {
          50: "#FFF8E7",
          100: "#F7EAC3",
          500: "#C7A14A",
          600: "#A9862F",
          700: "#765D1F"
        },
        navy: {
          600: "#123E78",
          700: "#0D315F",
          900: "#071A33"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(10, 31, 68, 0.10)",
        card: "0 14px 40px rgba(10, 31, 68, 0.08)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top left, rgba(199,161,74,0.18), transparent 32%), radial-gradient(circle at top right, rgba(29,120,208,0.13), transparent 30%), linear-gradient(180deg, #f8fafc 0%, #ffffff 56%, #f6f8fb 100%)"
      }
    }
  },
  plugins: []
};

export default config;
