import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";

import type { MonacoCode, MonacoProps } from "../types";
import { useLanguageSelector } from "../hooks/language";
import { useTheme } from "../hooks/theme";
import LanguageSelector from "./language-selector";
import ThemeSelector from "./theme-selector";
import Share from "./icons/share";

const MonacoEditor: React.FC<MonacoProps> = ({ id }) => {
  const { activeTheme, handleThemeChange } = useTheme();
  const { activeLanguage, handleLanguageChange } = useLanguageSelector();
  const [code, setCode] = useState<MonacoCode>(defaultCodeValue);

  return (
    <div className="w-full h-full min-w-[600px] max-w-[1080px] rounded-xl bg-light dark:bg-dark px-4 pt-4 pb-20 mx-auto">
      <Editor
        theme={activeTheme === "dark" ? "vs-dark" : "light"}
        defaultLanguage="html"
        language={activeLanguage}
        value={code}
        onChange={setCode}
      />
      <div className="flex justify-between px-4 pt-4 font-semibold">
        <div className="flex items-center gap-2 text-[10px]">
          <ThemeSelector value={activeTheme} onChange={handleThemeChange} />
          <LanguageSelector
            value={activeLanguage}
            onChange={handleLanguageChange}
          />
        </div>
        <button className="flex items-center gap-2 text-base text-white px-4 py-2 rounded-full bg-blue-0 dark:bg-gray-500 focus:ring-2 focus:ring-blue-700 focus:dark:ring-gray-300 hover:bg-blue-500 hover:dark:bg-gray-400 transition-colors">
          <Share />
          Share
        </button>
      </div>
    </div>
  );
};

const defaultCodeValue = `<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <style type='text/css'>
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type='text/javascript'>
      alert('I am a sample... visit devChallengs.io for more projects');
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type='button' value='Click me' />
  </body>
</html>`;

export default MonacoEditor;
