import React, { useRef, useEffect, useState, useCallback } from "react";
import { Editor, EditorState, RichUtils, DraftEditorCommand } from "draft-js";
import styled from "styled-components";

import Layout from "../../components/Layout";
import ToolBar from "../../components/ui/Toolbar";

import "draft-js/dist/Draft.css";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 80%;
  margin: 20px auto;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  line-height: 1.8rem;
  & > .title {
    font-size: 1.5em;
    outline: none;
    border: none;
  }
  & > a {
    position: relative;
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0px;
      height: 3px;
      background: black;
      content: "";
      transition: width 0.5s;
    }
    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
`;

const TextEditor = () => {
  const editor = useRef<Editor>(null);
  const [OnCtrl, SetOnCtrl] = useState(false);

  const [title, setTitle] = useState(undefined);

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

  const ShortcutKey = (command: string) => {
    if (!OnCtrl) {
      if (command === "back") setEditorState(EditorState.undo(editorState));
    } else {
      console.log("not onclicked ctrl");
    }
  };

  const onOffCtrl = useCallback((e: any) => {
    //ctrl 17
    if (e.keyCode === 17) SetOnCtrl(!OnCtrl);
  }, []);

  useEffect(() => {
    if (!editor.current) return;

    const Editor = editor.current;
    Editor.focus();

    document.addEventListener("keydown", onOffCtrl);
    document.addEventListener("keyup", onOffCtrl);
    // Editor.
    window.addEventListener("keydown", (e: any) => {
      if (e.keyCode === 90) {
        ShortcutKey("back");
      }
    });

    window.addEventListener("beforeunload", (e: any) => {
      e.preventDefault();
      e.returnValue = false;
      if (!window.confirm("저장되지 않은 정보는 사라집니다!")) {
        return;
      }
    });
  }, []);

  return (
    <Layout title={title === "" ? undefined : title}>
      <Wrapper>
        <input
          type="text"
          className="title"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
        />

        <ToolBar
          editorState={editorState}
          handleBlockClick={handleBlockClick}
          handleTogggleClick={handleTogggleClick}
          setEditorState={setEditorState}
        />

        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder="내용을 작성해주세요."
          handleKeyCommand={handleKeyCommand}
          ref={editor}
        />
      </Wrapper>
    </Layout>
  );
};
export default TextEditor;
