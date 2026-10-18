import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from "@mui/material";

import { createAppTheme } from "./muiTheme";

export type ThemeMode = "light" | "dark";


type ThemeContextValue = {
  mode: ThemeMode;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "econstruction-theme";

function getInitialMode(): ThemeMode {
  try {
    const savedMode = localStorage.getItem(STORAGE_KEY);

    if (savedMode === "light" || savedMode === "dark") {
      return savedMode;
    }
  } catch {
    // Storage may be unavailable; use the default theme.
  }

  return "light";
}

type Props = {
  children: ReactNode;
};

export function AppThemeProvider({ children }: Props) {
  const [mode, setModeState] = useState<ThemeMode>(getInitialMode);

  const setMode = useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode);

    try {
      localStorage.setItem(STORAGE_KEY, nextMode);
    } catch {
      // Theme still works for the current session.
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const muiTheme = useMemo(() => createAppTheme(mode), [mode]);

  const contextValue = useMemo(
    () => ({ mode, toggleTheme, setMode }),
    [mode, toggleTheme, setMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeMode must be used inside AppThemeProvider"
    );
  }

  return context;
}