import React, { useState } from "react";
import { EditorState } from "draft-js";
import styled, { css } from "styled-components";

const ToolbarWrap = styled.div<{ Toolfixing: boolean }>`
  &.toolbar_class {
    position: fixed;
    top: 50%;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    transition: height 0.7s, width 0.75s, border-radius 0.5s;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    &:hover {
      width: 400px;
      height: 120px;
      border-radius: 10px;
      overflow: visible;
      & > .toolbar_drag {
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }
    }
    ${(props) =>
      props.Toolfixing &&
      css`
        width: 400px;
        height: 120px;
        border-radius: 10px;
        overflow: visible;
      `}
  }
  & > .toolbar_drag {
    display: none;
    ${(props) =>
      props.Toolfixing &&
      css`
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: center;
        cursor: pointer;
      `}
  }
  & > .toolbar_item {
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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
  const [Toolfixing, SetToolfixing] = useState(false);

  return (
    <ToolbarWrap
      className="toolbar_class"
      Toolfixing={Toolfixing}
      onClick={(e) => SetToolfixing(!Toolfixing)}
    >
      <button
        onMouseDown={(e) => handleBlockClick(e, "header-one")}
        className="toolbar_item"
      >
        h1
      </button>
      <button
        onMouseDown={(e) => handleBlockClick(e, "header-two")}
        className="toolbar_item"
      >
        h2
      </button>
      <button
        onMouseDown={(e) => handleBlockClick(e, "header-three")}
        className="toolbar_item"
      >
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
      <div className="toolbar_drag">
        <span className="material-icons">minimize</span>
      </div>
    </ToolbarWrap>
  );
};

export default Toolbar;
