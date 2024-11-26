import React, { useEffect, useState } from "react";
import ChevronDown from "./icons/chevron-down";

const useTheme = () => {
  const [activeTheme, setTheme] = useState<string>(
    typeof window !== undefined
      ? localStorage.getItem("theme") || "dark"
      : "dark"
  );
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(selectedTheme);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      document.documentElement.classList.add(activeTheme);
    }
  }, [activeTheme]);

  const ThemeSelector: React.FC = () => {
    return (
      <div className="relative">
        <select
          name="theme"
          id="theme-selector"
          value={activeTheme}
          onChange={handleThemeChange}
          className="rounded-full pl-4 pr-5 py-0.5 bg-gray-0 appearance-none focus-visible:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-400 hover:dark:bg-gray-100 transition-colors"
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
          <ChevronDown />
        </div>
      </div>
    );
  };

  return { ThemeSelector, activeTheme };
};

export { useTheme };
