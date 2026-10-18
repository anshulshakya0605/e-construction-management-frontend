import { IconButton, Tooltip } from "@mui/material";
import { useThemeMode } from "../../core/theme/utils/themes/ThemeProvider";

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
        {isDark ? <h1 className="text-2xl">🌞</h1> : <h1 className="text-2xl">🌜</h1>}
      </IconButton>
    </Tooltip>
  );
}