
import {
  useCallback,
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
import { ThemeContext } from "./ThemeContext";
import type { ThemeMode } from "./themeTypes";

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
      // The theme still works for the current session.
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode, setMode]);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      mode === "dark"
    );
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const muiTheme = useMemo(() => createAppTheme(mode), [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      toggleTheme,
      setMode,
    }),
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
