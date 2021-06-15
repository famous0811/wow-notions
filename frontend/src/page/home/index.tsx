import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import UseStore from "../../store";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
<<<<<<< HEAD
<<<<<<< e1e0c1f0a41ffd56a338110597cd1ff3349325ef
<<<<<<< e1e0c1f0a41ffd56a338110597cd1ff3349325ef
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
=======
=======
>>>>>>> master
  max-width: 80%;
  margin: 20px auto;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
<<<<<<< HEAD
>>>>>>> textediter fixed
=======
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
>>>>>>> draft-js toolbar setting
=======
>>>>>>> master
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
<<<<<<< HEAD
<<<<<<< e1e0c1f0a41ffd56a338110597cd1ff3349325ef
<<<<<<< e1e0c1f0a41ffd56a338110597cd1ff3349325ef
`;

function Home() {
=======
=======
>>>>>>> master
  .toolbar-class {
    position: fixed;
    top: 50%;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    transition: height 0.5s, width 0.55s, border-radius 0.5s;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    &:hover {
      width: 400px;
      height: 120px;
      border-radius: 10px;
      overflow: visible;
    }
    &:focus {
      background: red;
    }
  }
  .editor {
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .wrapper-class {
    text-align: center;
  }
`;

function Home() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState(undefined);
  const onEditorStateChange = (editorState: any) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };
<<<<<<< HEAD
>>>>>>> textediter fixed
=======
  .toolbar-class {
    position: fixed;
    top: 50%;
    left: 0;
    /* width: 100px; */
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    transition: height 0.5s, width 0.55s, border-radius 0.5s;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    /* border-color: red; */
    &:hover {
      width: 300px;
      height: 70px;
      border-radius: 10px;
    }
  }
  .editor {
    height: calc(100vh - 54px);
  }
  .wrapper-class {
    width: 100%;
    /* height: 100%; */
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
  }
`;

function Home() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState: any) => {
    // editorState에 값 설정
    console.log(editorState);
    setEditorState(editorState);
  };
>>>>>>> draft-js toolbar setting
=======
>>>>>>> master
  if (UseStore.UserStore.token)
    return (
      <Layout title={title === "" ? undefined : title}>
        <Wrapper>
<<<<<<< HEAD
<<<<<<< e1e0c1f0a41ffd56a338110597cd1ff3349325ef
<<<<<<< e1e0c1f0a41ffd56a338110597cd1ff3349325ef
          <div>로그인 완료</div>
=======
=======
>>>>>>> master
          <input
            type="text"
            className="title"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
<<<<<<< HEAD
=======
          {/* <div>로그인 완료</div> */}
>>>>>>> draft-js toolbar setting
=======
>>>>>>> master
          <Editor
            // 에디터와 툴바 모두에 적용되는 클래스
            wrapperClassName="wrapper-class"
            // 에디터 주변에 적용된 클래스
            editorClassName="editor"
            // 툴바 주위에 적용된 클래스
            toolbarClassName="toolbar-class"
            // 툴바 설정
            toolbar={{
              // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: false },
            }}
            placeholder="내용을 작성해주세요."
            // 한국어 설정
            localization={{
              locale: "ko",
            }}
            // 초기값 설정
            editorState={editorState}
            // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
            onEditorStateChange={onEditorStateChange}
          />
<<<<<<< HEAD
<<<<<<< e1e0c1f0a41ffd56a338110597cd1ff3349325ef
>>>>>>> textediter fixed
=======
>>>>>>> draft-js toolbar setting
=======
>>>>>>> master
        </Wrapper>
      </Layout>
    );
  else
    return (
      <Layout>
        <Wrapper>
          <div>로그인 후 이용해주세요</div>
        </Wrapper>
      </Layout>
    );
}
export default Home;
