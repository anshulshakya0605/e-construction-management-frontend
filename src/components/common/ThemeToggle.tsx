
import { IconButton, Tooltip } from "@mui/material";
import { useThemeMode } from "../../core/theme/useThemeMode";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  const isDark = mode === "dark";

  return (
    <Tooltip title={`Switch to ${isDark ? "light" : "dark"} mode`}>
      <IconButton
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        color="inherit"
      >
        {isDark ? (
          <span className="text-2xl">🌞</span>
        ) : (
          <span className="text-2xl">🌜</span>
        )}
      </IconButton>
    </Tooltip>
  );
}
