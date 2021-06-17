import React, { useState } from "react";
import { EditorState } from "draft-js";
import styled, { css } from "styled-components";

const toolbar_box = css`
  width: 400px;
  height: 120px;
  border-radius: 10px;
  overflow: visible;
  /* baise style */
`;
const toolbar_drag_box = css`
  width: 100%;
  height: 20px;
  display: flex !important;
  justify-content: center;
  cursor: pointer;
`;

const ToolbarWrap = styled.div<{ Toolfixing: boolean }>`
  //before hover & click
  position: fixed;
  top: 50%;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  transition: height 0.7s, width 0.75s, border-radius 0.5s;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  line-height: 1.4rem;
  z-index: 20;

  &:hover {
    ${toolbar_box}

    &>.toolbar_drag {
      ${toolbar_drag_box};
    }
    & > .toolbar_item {
      display: flex;
    }
  }
  ${(props) => props.Toolfixing && toolbar_box}

  //drage button desain
  & > .toolbar_drag {
    display: none;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0px 0px 10px 10px;
    ${(props) => props.Toolfixing && toolbar_drag_box}
    //material icon setting
      & > span {
      margin-top: -10px;
    }
  }

  //functions button desain
  & > .toolbar_item {
    ${(props) =>
      props.Toolfixing &&
      css`
        display: flex !important;
      `}
    border: none;
    display: none;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 0 2px;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;

    &:hover {
      background-color: white;
    }
    &:nth-child(1) {
      display: flex;
    }
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
      <button
        onMouseDown={(e) => handleBlockClick(e, "unstyled")}
        className="toolbar_item"
      >
        normal
      </button>

      <button
        onMouseDown={(e) => handleTogggleClick(e, "BOLD")}
        className="toolbar_item"
      >
        bold
      </button>
      <button
        onMouseDown={(e) => handleTogggleClick(e, "ITALIC")}
        className="toolbar_item"
      >
        italic
      </button>
      <button
        onMouseDown={(e) => handleTogggleClick(e, "STRIKETHROUGH")}
        className="toolbar_item"
      >
        strikthrough
      </button>
      <button
        onMouseDown={(e) => handleBlockClick(e, "ordered-list-item")}
        className="toolbar_item"
      >
        ol
      </button>
      <button
        onMouseDown={(e) => handleBlockClick(e, "unordered-list-item")}
        className="toolbar_item"
      >
        ul
      </button>
      {/* <button
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
      </button> */}
      <div className="toolbar_drag">
        <span className="material-icons">minimize</span>
      </div>
    </ToolbarWrap>
  );
};

export default Toolbar;
