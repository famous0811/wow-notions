import { inject, observer } from 'mobx-react';
import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import LoginStore from "../../store/LoginStore";


const Wrapper=styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


interface HomeProps{
  LoginStore:LoginStore;
}
@inject('LoginStore')
@observer
export default class Home extends Component<HomeProps> {
  render(){
    if(!this.props.LoginStore.token)
    return (
          <Layout>
              <Wrapper>
                <div>로그인 후 이용해주세요</div>
              </Wrapper>
        </Layout>
        );
    else{
      return (
        <Layout>
            <Wrapper>
              <div>로그인 완료 해으응</div>
            </Wrapper>
      </Layout>
      );
    }
    }
}



