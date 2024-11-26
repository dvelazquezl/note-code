import type React from "react";
import { useState } from "react";
import { supportedLanguages } from "../constants";
import CustomSelector from "./custom-select";

const useLanguageSelector = () => {
  const [activeLanguage, setLanguage] = useState<string>("html");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
  };

  const LanguageSelector: React.FC = () => {
    return (
      <CustomSelector
        id="language-selector"
        name="language"
        value={activeLanguage}
        onChange={handleLanguageChange}
      >
        {supportedLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </CustomSelector>
    );
  };

  return { LanguageSelector, activeLanguage };
};

export { useLanguageSelector };
