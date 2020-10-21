import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { Resizable } from "re-resizable";

function Editor(props) {
  const { displayName, language, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  const [open, setOpen] = useState(true);

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <div className={`editor-container ${open ? "" : "collapsed"}`}>
        <div className="editor-title">
          {displayName}
          <button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            type="button"
            className="expand-collapse-button"
          >
            <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
          </button>
        </div>

        <ControlledEditor
          onBeforeChange={handleChange}
          value={open ? value : ""}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: "material",
            autofocus: true,
            autocorrect: true,
            autoCloseTags: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            extraKeys: {
              "Ctrl-Space": "autocomplete",
            },
            autoScroll: true,
            autoCursor: true,
          }}
        />
      </div>
    </>
  );
}

export default Editor;
