import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Archivo', 'Archivo Fallback', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      // Escala fechada de SEIS valores. text-xl e text-3xl..9xl deixam de
      // existir de propósito: se o build reclamar de uma delas, escolha um
      // destes seis em vez de reabrir a escala.
      //
      // `lg` e `2xl` são apelidos para dois valores da própria escala, e
      // existem só porque src/components/ui/ é código shadcn gerado e os
      // usa — não os use em código de aplicação.
      fontSize: {
        xs: ["var(--text-xs)", { lineHeight: "1.5" }],
        sm: ["var(--text-sm)", { lineHeight: "1.6" }],
        base: ["var(--text-base)", { lineHeight: "1.65" }],
        lead: ["var(--text-lead)", { lineHeight: "1.6" }],
        title: ["var(--text-title)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        display: ["var(--text-display)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        lg: ["var(--text-lead)", { lineHeight: "1.6" }],
        "2xl": ["var(--text-title)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      fontWeight: {
        normal: "var(--weight-regular)",
        medium: "var(--weight-medium)",
        bold: "var(--weight-bold)",
      },
      // Só nomes semânticos. A escala numérica do Tailwind (base 4px) já é
      // consistente e é usada pelo shadcn — sobrescrever 1..6 aqui quebraria
      // px-2 / p-4 / p-6 em todo o ui/.
      spacing: {
        section: "var(--section-y)",
        "section-tight": "var(--section-y-tight)",
      },
      transitionTimingFunction: {
        "out-quart": "var(--ease-out-quart)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
      },
      colors: {
        border: "hsl(var(--border))",
        "border-strong": "hsl(var(--border-strong))",
        surface: "hsl(var(--surface))",
        "surface-raised": "hsl(var(--surface-raised))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
