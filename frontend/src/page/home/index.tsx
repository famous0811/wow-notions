import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import UseStore from "../../store";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
        </Wrapper>
      </Layout>
    );
}
export default Home;
