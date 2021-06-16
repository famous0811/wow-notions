import React from "react";
import { EditorState } from "draft-js";
import styled from "styled-components";

interface ToolbarProps {
  editorState: EditorState;
  setEditorState: (test: any) => void;
  handleTogggleClick: (e: React.MouseEvent, inlineStyle: string) => void;
  handleBlockClick: (e: React.MouseEvent, inlineStyle: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  handleTogggleClick,
  handleBlockClick,
  setEditorState,
  editorState,
}) => {
  return (
    <div className="toolbar-class">
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
    </div>
  );
};

export default Toolbar;
