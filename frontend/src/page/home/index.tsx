import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import UseStore from "../../store";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
<<<<<<< e1e0c1f0a41ffd56a338110597cd1ff3349325ef
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
=======
  max-width: 80%;
  margin: 20px auto;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
>>>>>>> textediter fixed
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
<<<<<<< e1e0c1f0a41ffd56a338110597cd1ff3349325ef
`;

function Home() {
=======
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
>>>>>>> textediter fixed
  if (UseStore.UserStore.token)
    return (
      <Layout title={title === "" ? undefined : title}>
        <Wrapper>
<<<<<<< e1e0c1f0a41ffd56a338110597cd1ff3349325ef
          <div>로그인 완료</div>
=======
          <input
            type="text"
            className="title"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
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
>>>>>>> textediter fixed
        </Wrapper>
      </Layout>
    );
  else
    return (
      <Layout>
        <Wrapper>
          <div>로그인 후 이용해주세요</div>
          <Link to="/login">로그인하러 가기</Link>
        </Wrapper>
      </Layout>
    );
}
export default Home;
