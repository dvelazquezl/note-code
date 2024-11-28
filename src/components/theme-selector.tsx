import React, { type SelectHTMLAttributes } from "react";
import CustomSelector from "./custom-select";

const ThemeSelector: React.FC<SelectHTMLAttributes<HTMLSelectElement>> = ({
  ...props
}) => {
  return (
    <CustomSelector name="theme" id="theme-selector" {...props}>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </CustomSelector>
  );
};

export default ThemeSelector;
