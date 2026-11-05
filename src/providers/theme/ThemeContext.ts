
import { createContext, useContext } from "react";
import type { ThemeMode } from "./themeTypes";

export type ThemeContextValue = {
  mode: ThemeMode;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
};

export const ThemeContext = createContext<
  ThemeContextValue | undefined
>(undefined);

export function useThemeMode() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeMode must be used inside AppThemeProvider"
    );
  }

  return context;
}
