import React from 'react';
import { useEffect } from "react";
import {
    PastePlugin,
    IEditor,
    AutoFormatPlugin,
    MarkdownPlugin,
    EditPlugin,
    ShortcutPlugin,
    TableEditPlugin,
    WatermarkPlugin,
    ImageEditPlugin,
    getDarkColor,
    Editor,
    insertLink,
  } from "roosterjs";

const Rooster: React.FC = () => {
    const editorDivRef = React.useRef<HTMLDivElement>(null);
    const [editor, setEditor] = React.useState<IEditor>({} as IEditor);

    useEffect(() => {
        if (editorDivRef.current) {
            const plugins = [
                new AutoFormatPlugin({
                  autoBullet: true,
                  autoLink: true,
                  autoNumbering: true,
                  autoUnlink: false,
                  autoHyphen: true,
                  autoFraction: true,
                  autoOrdinals: true,
                }),
                new EditPlugin(),
                new PastePlugin(),
                new TableEditPlugin(),
                new ShortcutPlugin(),
                new WatermarkPlugin("Type content here ..."),
                new MarkdownPlugin({
                  bold: true,
                  italic: true,
                  strikethrough: true,
                  codeFormat: {},
                }),
                new ImageEditPlugin()               
              ];
        
              const defaultSegmentFormat = {
                fontFamily: "Calibri",
                fontSize: "11pt",
                textColor: "#000000",
              };
              const options = {
                plugins: plugins,
                defaultSegmentFormat: defaultSegmentFormat,
                getDarkColor: getDarkColor,
              };
              const editor = new Editor(editorDivRef.current, options);
              setEditor(editor);
              return () => {
                if (editor) {
                  editor.dispose();
                }
              };
        }
    }, [editorDivRef]);

    const insertLinkButton = () => {
        if (editorDivRef.current) {
                        
            insertLink(editor, "https://www.bing.com", "Bing");
            
        }
    };

    return (
        <div className="editor-wrapper">
            <h2>Rooster Editor</h2>
            <button onClick={insertLinkButton}>Insert Link</button>
            <div className="editor"
                ref={editorDivRef}
                tabIndex={-1} // Make the div focusable to capture blur events
            ></div>

        </div>
    );
};

export default Rooster;