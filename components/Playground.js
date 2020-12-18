import React from 'react';
import Editor from './Editor';

import '@styles/playground.module.css';

import { useState } from 'react';
export default function Playground() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const srcDoc = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `;
  return (
    <div className="">
      <div className="pane left-pane">
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
        <Editor language="js" displayName="JS" value={js} onChange={setJs} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}
