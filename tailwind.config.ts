import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))",
        "surface-hover": "hsl(var(--surface-hover))",
        border: "hsl(var(--border))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        amber: {
          DEFAULT: "hsl(var(--amber))",
        },
        danger: "hsl(var(--danger))",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(hsl(var(--border) / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.35) 1px, transparent 1px)",
        "glow-radial":
          "radial-gradient(circle at 50% 0%, hsl(var(--accent) / 0.18), transparent 60%)",
      },
      backgroundSize: {
        grid: "42px 42px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ripple-effect": {
          "0%": { transform: "scale(0)", opacity: "0.55" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
        sparkle: {
          "0%": { transform: "scale(0) rotate(0deg) translateY(0)", opacity: "1" },
          "50%": { transform: "scale(1) rotate(90deg) translateY(-6px)", opacity: "1" },
          "100%": { transform: "scale(0) rotate(180deg) translateY(-18px)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blink: "blink 1.1s step-start infinite",
        marquee: "marquee 28s linear infinite",
        ripple: "ripple-effect 0.6s ease-out",
        sparkle: "sparkle 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
