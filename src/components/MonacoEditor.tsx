import { Editor } from "@monaco-editor/react";
import Share from "./icons/share";
import ChevronDown from "./icons/chevron-down";

const MonacoEditor = () => {
  return (
    <div className="w-full h-full min-w-[600px] max-w-[1080px] rounded-xl bg-light dark:bg-dark px-4 pt-4 pb-20 mx-auto">
      <Editor
        theme="vs-dark"
        defaultLanguage="html"
        defaultValue={defaultCodeValue}
      />
      <div className="flex justify-between px-4 pt-4 font-semibold">
        <div className="flex items-center gap-2 text-[10px]">
          <div className="relative">
            <select
              name="theme"
              id="theme-selector"
              className="rounded-full pl-4 pr-5 py-0.5 bg-gray-0 appearance-none focus-visible:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-400 hover:dark:bg-gray-100 transition-colors"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
              <ChevronDown />
            </div>
          </div>
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
