import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import UseStore from "../../store";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8rem;
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

function Home() {
  if (UseStore.LoginStore.token)
    return (
      <Layout>
        <Wrapper>
          <div>로그인 완료</div>
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
