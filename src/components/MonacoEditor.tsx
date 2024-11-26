import { Editor } from "@monaco-editor/react";
import Share from "./icons/share";
import { useTheme } from "./theme-selector";
import { useLanguageSelector } from "./language-selector";

const MonacoEditor = () => {
  const { ThemeSelector, activeTheme } = useTheme();
  const { LanguageSelector, activeLanguage } = useLanguageSelector();

  return (
    <div className="w-full h-full min-w-[600px] max-w-[1080px] rounded-xl bg-light dark:bg-dark px-4 pt-4 pb-20 mx-auto">
      <Editor
        theme={activeTheme === "dark" ? "vs-dark" : "light"}
        defaultLanguage="html"
        language={activeLanguage}
        defaultValue={defaultCodeValue}
      />
      <div className="flex justify-between px-4 pt-4 font-semibold">
        <div className="flex items-center gap-2 text-[10px]">
          <ThemeSelector />
          <LanguageSelector />
        </div>
        <button className="flex items-center gap-2 text-base text-white px-4 py-2 rounded-full bg-blue-0 dark:bg-gray-500 focus:ring-2 focus:ring-blue-700 focus:dark:ring-gray-300 hover:bg-blue-500 hover:dark:bg-gray-400 transition-colors">
          <Share />
          Share
        </button>
      </div>
    </div>
  );
};

const defaultCodeValue = `
<html>
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
