import { Icon } from "@iconify/react";
import { useDarkMode } from "../../hooks/useDarkMode";

export function ThemeToggle() {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg text-slate-500 hover:text-teal-600 hover:bg-teal-50 dark:text-slate-400 dark:hover:text-teal-400 dark:hover:bg-teal-900/30 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Icon icon="solar:sun-bold-duotone" className="w-5 h-5" />
      ) : (
        <Icon icon="solar:moon-bold-duotone" className="w-5 h-5" />
      )}
    </button>
  );
}
