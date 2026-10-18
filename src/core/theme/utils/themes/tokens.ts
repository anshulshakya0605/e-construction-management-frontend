export const colorTokens = {
  light: {
    primary: "#2563EB",
    primaryHover: "#1D4ED8",
    secondary: "#475569",
    background: "#F8FAFC",
    surface: "#FFFFFF",
    surfaceSecondary: "#F1F5F9",
    text: "#0F172A",
    textSecondary: "#64748B",
    border: "#E2E8F0",
    success: "#16A34A",
    warning: "#D97706",
    error: "#DC2626",
    info: "#0284C7",
  },

  dark: {
    primary: "#60A5FA",
    primaryHover: "#93C5FD",
    secondary: "#94A3B8",
    background: "#0F172A",
    surface: "#1E293B",
    surfaceSecondary: "#334155",
    text: "#F8FAFC",
    textSecondary: "#CBD5E1",
    border: "#334155",
    success: "#4ADE80",
    warning: "#FBBF24",
    error: "#F87171",
    info: "#38BDF8",
  },
} as const;

export const typographyTokens = {
  fontFamily: '"Inter", Arial, sans-serif',

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const spacingTokens = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
} as const;

export const radiusTokens = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
} as const;

export const shadowTokens = {
  sm: "0 1px 2px rgb(0 0 0 / 0.05)",
  md: "0 4px 6px rgb(0 0 0 / 0.08)",
  lg: "0 10px 25px rgb(0 0 0 / 0.12)",
} as const;