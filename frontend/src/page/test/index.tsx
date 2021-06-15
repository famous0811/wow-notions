import React, { useRef, useEffect, useMemo, useState } from "react";
import { Editor, EditorState, RichUtils, DraftEditorCommand } from "draft-js";
import "draft-js/dist/Draft.css";

const TextEditor = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const editor = useRef<Editor>(null);
  const [OnCtrl, SetOnCtrl] = useState(false);
  const [OnDownKey, SetOnDownKey] = useState(0);
  const downKeyCheck = useMemo(() => {
    if (OnCtrl) {
      if (OnDownKey === 172) {
        return "back";
      }
    }
    return "";
  }, [OnCtrl, OnDownKey]);

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command: DraftEditorCommand) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const handleTogggleClick = (e: React.MouseEvent, inlineStyle: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };
  const handleBlockClick = (e: React.MouseEvent, blockType: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };
  const test = () => {
    if (downKeyCheck === "back") {
      setEditorState(EditorState.undo(editorState));
    }
  };
  useEffect(() => {
    if (!wrapper.current || !editor.current || !editor) return;
    const Wrap: HTMLDivElement = wrapper.current;
    const Editor = editor.current;

    document.addEventListener("keydown", (e: any) => {
      alert(e.keyCode);
      //ctrl 27
      if (e.keyCode === 27) {
        SetOnCtrl(true);
      }
    });
    document.addEventListener("keyup", (e: any) => {
      //ctrl 27
      if (e.keyCode === 27) {
        SetOnCtrl(false);
        alert("Test");
      }
    });
    // Editor.
    // Editor.addEventListener("keydown", (e: any) => {
    //   SetOnDownKey(e.keyCode);
    //   test();
    // });
  }, []);
  return (
    <div ref={wrapper}>
      <button onMouseDown={(e) => handleBlockClick(e, "header-one")}>h1</button>
      <button onMouseDown={(e) => handleBlockClick(e, "header-two")}>h2</button>
      <button onMouseDown={(e) => handleBlockClick(e, "header-three")}>
        h3
      </button>
      <button onMouseDown={(e) => handleBlockClick(e, "unstyled")}>
        normal
      </button>

      <button onMouseDown={(e) => handleTogggleClick(e, "BOLD")}>bold</button>
      <button onMouseDown={(e) => handleTogggleClick(e, "ITALIC")}>
        italic
      </button>
      <button onMouseDown={(e) => handleTogggleClick(e, "STRIKETHROUGH")}>
        strikthrough
      </button>
      <button onMouseDown={(e) => handleBlockClick(e, "ordered-list-item")}>
        ol
      </button>
      <button onMouseDown={(e) => handleBlockClick(e, "unordered-list-item")}>
        ul
      </button>
      <button
        disabled={editorState.getUndoStack().size <= 0}
        onMouseDown={() => setEditorState(EditorState.undo(editorState))}
      >
        undo
      </button>
      <button
        disabled={editorState.getRedoStack().size <= 0}
        onMouseDown={() => setEditorState(EditorState.redo(editorState))}
      >
        redo
      </button>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        ref={editor}
      />
    </div>
  );
};
export default TextEditor;
