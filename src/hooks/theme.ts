import React, { useEffect, useState } from "react";

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

  return { activeTheme, handleThemeChange };
};

export { useTheme };
