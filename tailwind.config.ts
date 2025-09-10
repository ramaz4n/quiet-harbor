import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
  theme: {
    extend: {
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        in: "animate-in 0.25s ease-out",
        out: "animate-out 0.25s ease-out",
        "slide-up": "animate-slide-up 0.25s ease-out",
        "slide-x": "animate-slide-x 2s ease-out infinite",
      },
      borderColor: {
        primary: "hsl(var(--primary))",
      },
      borderRadius: {
        50: "50%",
        sheet: "26px",
        xl: "52px",
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
        },
        foreground: "var(--foreground)",
        "modal-bg": "rgba(0, 0, 0, 0.7)",
        yellow: {
          DEFAULT: "#d4af37",
        },
      },
      fontSize: {
        "3.5xl": "2rem",
      },
      keyframes: {
        "animate-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "animate-out": {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
        "animate-slide-up": {
          from: {
            transform: "translateY(-100%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
        "animate-slide-x": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      letterSpacing: {
        widest: "5px",
      },
      lineHeight: {
        "5.5": "1.4rem",
      },
      opacity: {
        disabled: ".6",
      },
      screens: {
        md: "600px",
      },
      spacing: {
        5.5: "22px",
        6.5: "26px",
        13: "3.25rem",
        container: "var(--container-width)",
        "d-sheet": "23.25rem",
        modal: "36rem",
        sheet: "37.5rem",
      },
      zIndex: {
        layout: "999",
        overlay: "9999",
        "p-overlay": "9997",
        popover: "9998",
      },
    },
  },
};
export default config;
