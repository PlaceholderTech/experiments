import React from 'react';
import { ControlledEditor } from '@monaco-editor/react';

export default function MonacoEditor(props) {
  const { language, displayName, value, onChange, height, width } = props;
  function handleChange(ev, value) {
    onChange(value);
  }
  return (
    <div className="editor-container">
      <div className="editor-title">
        <button>{displayName}</button>
      </div>
      <ControlledEditor
        // onBeforeChange={handleChange}
        value={value}
        className=""
        height={height}
        width={width}
        language={language}
        onChange={handleChange}
        // theme="vs-dark"
      />
    </div>
  );
}
