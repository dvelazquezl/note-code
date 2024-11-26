import type React from "react";
import { useState } from "react";
import ChevronDown from "./icons/chevron-down";
import { supportedLanguages } from "../constants";

const useLanguageSelector = () => {
  const [activeLanguage, setLanguage] = useState<string>("html");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
  };

  const LanguageSelector: React.FC = () => {
    return (
      <div className="relative">
        <select
          name="language"
          id="language-selector"
          value={activeLanguage}
          onChange={handleLanguageChange}
          className="rounded-full pl-4 pr-5 py-0.5 bg-gray-0 appearance-none focus-visible:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-400 hover:dark:bg-gray-100 transition-colors"
        >
          {supportedLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
          <ChevronDown />
        </div>
      </div>
    );
  };

  return { LanguageSelector, activeLanguage };
};

export { useLanguageSelector };
