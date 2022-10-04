/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import {
  Sandpack,
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackProvider,
} from "./index";

export default {
  title: "Bug reports/Issues",
};

export const PackageJsonDep = (): JSX.Element => {
  return (
    <Sandpack
      files={{
        "/App.js": {
          code: `export default function App() {
  return <h1>Hello World</h1>
}
`,
        },
        "/index.js": {
          code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
        },
        "/package.json": JSON.stringify({
          main: "/index.js",
          dependencies: {
            react: "^18.0.0",
            "react-dom": "^18.0.0",
            "react-scripts": "^4.0.0",
          },
        }),
      }}
    />
  );
};

export const Issue482 = (): JSX.Element => {
  const [hidden, setHidden] = useState(false);

  const toggleHidden = (): void => {
    setHidden((prevHidden) => !prevHidden);
  };

  return (
    <>
      <button onClick={toggleHidden}>toggle hidden</button>
      <SandpackProvider
        customSetup={{
          entry: "/index.js",
        }}
        files={{
          "/index.js": {
            code: "// index.js",
            active: true,
          },
          "/index2.js": {
            code: "// index2.js",
          },
          "/src/index.js": {
            code: "// this file is generated by vanilla template, but it is not needed",
            hidden: true,
          },
          "/hidden.js": {
            code: "// hidden.js",
            hidden: true,
          },
        }}
        options={{
          visibleFiles: ["/index.js", "/hidden.js"],
          activeFile: "/index.js",
        }}
        template={"vanilla"}
      >
        <SandpackLayout>
          <SandpackFileExplorer autoHiddenFiles={hidden} />
          <SandpackCodeEditor />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
};

export const Issue454 = (): JSX.Element => {
  const [readOnly, setReadOnly] = useState(false);

  return (
    <>
      <button
        className="trigger"
        onClick={(): any => setReadOnly((prev) => !prev)}
      >
        click
      </button>
      <Sandpack options={{ readOnly }} />
    </>
  );
};

export const FileTab = (): JSX.Element => {
  return (
    <Sandpack
      options={{ visibleFiles: ["/App.js", "/styles.css"] }}
      template="react"
    />
  );
};