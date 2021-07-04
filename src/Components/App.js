import React, { useEffect, useState } from "react";
import "../index.css";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const css_defaults = `body{
  	        font-family: 'Segoe UI', sans-serif;
}

h1{
      color: teal;
}`;
  const [html, setHtml] = useLocalStorage("html", "<h1>This Is A H1 Tag</h1>");
  const [css, setCss] = useLocalStorage("css", css_defaults);
  const [js, setJs] = useLocalStorage(
    "js",
    "document.body.style.background  =  'aqua';"
  );

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script crossorigin>${js}</script>
    </html>
  `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane bottom-pane">
        <iframe
          sandbox="allow-modals"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
