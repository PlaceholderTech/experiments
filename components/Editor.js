import React from 'react';
import dynamic from 'next/dynamic';
import 'codemirror/lib/codemirror.css';
import('codemirror/theme/material.css');
// import('codemirror/mode/css/css');
// import('codemirror/mode/xml/xml');
// import('codemirror/mode/javascript/javascript');
let modeLoaded = false;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  import('codemirror/mode/javascript/javascript');
  import('codemirror/mode/xml/xml');
  import('codemirror/mode/css/css');

  modeLoaded = true;
}
import { Controlled as ControlledEditor } from 'react-codemirror2';

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;
  function handleChange(editor, data, value) {
    onChange(value);
  }
  const optionsCodemirror = {
    lineWrapping: true,
    lint: true,
    mode: language,
    theme: 'material',
    lineNumbers: true
  };

  if (modeLoaded) optionsCodemirror.mode = language;
  // console.log(optionsCodemirror);

  return (
    <div className="editor-container">
      <div className="editor-title">
        <button>{displayName}</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className=""
        options={optionsCodemirror}
      />
    </div>
  );
}
