import type React from "react";
import { supportedLanguages } from "../constants";
import CustomSelector from "./custom-select";

const LanguageSelector: React.FC<
  React.SelectHTMLAttributes<HTMLSelectElement>
> = ({ ...props }) => {
  return (
    <CustomSelector id="language-selector" name="language" {...props}>
      {supportedLanguages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </CustomSelector>
  );
};

export default LanguageSelector;
