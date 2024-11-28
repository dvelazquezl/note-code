import type React from "react";
import { useState } from "react";

const useLanguageSelector = () => {
  const [activeLanguage, setLanguage] = useState<string>("html");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
  };

  return { activeLanguage, handleLanguageChange };
};

export { useLanguageSelector };
