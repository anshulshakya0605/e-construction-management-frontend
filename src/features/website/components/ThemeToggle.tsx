
import { Moon, Sun } from "lucide-react";
import { useThemeMode } from "../../../hooks/useThemeMode";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  const isDark = mode === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-text transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {isDark ? (
        <Sun size={19} strokeWidth={2} />
      ) : (
        <Moon size={19} strokeWidth={2} />
      )}
    </button>
  );
}
