import { Icon } from "@iconify/react";
import { useDarkMode } from "../../hooks/useDarkMode";

export function ThemeToggle() {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg text-[#5C768D] hover:text-[#1166B3] hover:bg-[#E9F0F6] dark:text-[#D9E4EC] dark:hover:text-[#ABDAF0] dark:hover:bg-[#27465F] transition-colors"
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
