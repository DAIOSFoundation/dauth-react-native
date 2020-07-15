import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AreaTit from '../../components/Texts/AreaTit';
import AreaSubTit from '../../components/Texts/AreaSubTit';
import Inputs from '../../components/Inputs/Inputs';
import StateButton from '../../components/Buttons/StateButton';
import StageButton from '../../components/Buttons/StageButton';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import * as signupActions from '../../store/modules/signup/actions';
import * as loginActions from '../../store/modules/login/actions';

function Login() {
  const {account, password, loginSuccessMsg, jwt} = useSelector(
    state => ({
      account: state.login.account,
      password: state.login.password,
      loginSuccessMsg: state.login.loginSuccessMsg,
      jwt: state.login.jwt,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  const handleChange = e => {
    const {text, name} = e;
    console.log('value!!!', e);
    name === 'account'
      ? dispatch(loginActions.change_account(text))
      : dispatch(loginActions.change_password(text));
  };

  useEffect(() => {
    console.log('useEffect');
    if (loginSuccessMsg === 'postLoginSuccess' && jwt) {
      localStorage.setItem('access_token', jwt);
      dispatch(loginActions.reset_message());
      //history.push("/product/status");
    }
  }, [loginSuccessMsg, jwt]);

  // const handlePassword = e => {
  //   const {text} = e.nativeEvent;
  //   console.log('password: ', e.nativeEvent.text);
  //   dispatch(signupActions.change_password(text));
  // };

  const onLogin = useCallback(() => {
    const params = {
      account,
      password,
    };
    dispatch(signupActions.post_signup(params));
    Actions.Main();
  }, [account, password]);

  const goSignup = () => {
    Actions.Register();
  };

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <Title>로그인</Title>
          <TouchableOpacity>
            <CancleIcon
              source={require('../../assets/images/closeIcon/drawable-hdpi/icon_cancel_black.png')}
            />
          </TouchableOpacity>
        </Header>
        <Contents>
          <Inner>
            <TextArea>
              <AreaTit>DAuth에 오신 것을 환영합니다.</AreaTit>
              <AreaTextBox>
                <AreaSubTit>이미 계정이 있으시다면,</AreaSubTit>
                <AreaSubTit>
                  로그인 후 본인인증 시스템을 간편하게 이용해보세요.
                </AreaSubTit>
              </AreaTextBox>
            </TextArea>
            <Info>
              <InputArea>
                <InputTit>아이디</InputTit>
                <InputBox>
                  <Inputs
                    handleChange={handleChange}
                    name="account"
                    // value={account}
                    placeholder="아이디를 입력하세요"
                  />
                </InputBox>
              </InputArea>
              <InputArea>
                <InputTit>비밀번호</InputTit>
                <InputBox>
                  <Inputs
                    handleChange={handleChange}
                    type="password"
                    name="password"
                    secureTextEntry="true"
                    // value={password}
                    placeholder="비밀번호를 입력하세요"
                  />
                </InputBox>
              </InputArea>
              <ButtonWrap>
                <StateButton onPress={onLogin}>로그인</StateButton>
              </ButtonWrap>
            </Info>
          </Inner>
          <StageBox>
            <StageButton onPress={goSignup}>회원가입</StageButton>
          </StageBox>
        </Contents>
      </Container>
    </SafeAreaView>
  );
}

export default Login;

const Container = styled.View`
  position: relative;
  height: 100%;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 13px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f7f7f7;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #48515a;
`;

const CancleIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const Contents = styled.View`
  position: relative;
  height: 100%;
  flex: 1;
`;

const Inner = styled.View`
  padding: 0 20px;
`;

const TextArea = styled.View`
  margin: 26px 0 24px;
`;

const AreaTextBox = styled.View`
  margin-top: 8px;
`;

const Info = styled.View`
  margin-bottom: 36px;
`;

const InputArea = styled.View`
  padding: 10px 0;
`;

const InputTit = styled.Text`
  padding-bottom: 6px;
  font-size: 13px;
  color: #48515a;
  line-height: 20px;
`;

const InputBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StageBox = styled.View`
  flex: 1;
  height: 100%;
`;

const ButtonWrap = styled.View`
  align-items: center;
  justify-content: center;
  height: 100px;
`;
