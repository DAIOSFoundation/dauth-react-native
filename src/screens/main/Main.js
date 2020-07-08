import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styled from 'styled-components';
import MainCard from '../../components/MainCard';

function Main() {
  const goTerms = () => {
    Actions.Terms();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f6f8fa'}}>
      <ScrollView>
        <HeaderWrap>
          <HeaderText>개인키 관리</HeaderText>
        </HeaderWrap>
        <BodyWrap>
          <TitleWrap>
            <TitleText>정보 관리</TitleText>
          </TitleWrap>
          <MainCard>니모닉 관리</MainCard>
          <MainCard>비밀번호 관리</MainCard>

          <TitleWrap>
            <TitleText>이용 약관</TitleText>
          </TitleWrap>
          <MainCard goTerms={goTerms}>약관 및 이용 동의</MainCard>
          <MainCard>개인정보 수집 및 이용 동의</MainCard>
          <MainCard>서비스 이용정책 및 이용 동의</MainCard>

          <TitleWrap>
            <TitleText>계정활동</TitleText>
          </TitleWrap>
          <MainCard>로그아웃</MainCard>
          <MainCard>탈퇴하기</MainCard>
        </BodyWrap>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Main;

const HeaderWrap = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  background-color: white;
`;

const HeaderText = styled.Text`
  width: 238px;
  height: 24px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #48515a;
`;

const TitleWrap = styled.View`
  height: 42px;
  justify-content: center;
`;

const TitleText = styled.Text`
  margin-left: 20px;
  font-size: 13px;
  font-weight: 800;
  color: #69727b;
  padding-top: 15px;
`;

const BodyWrap = styled.View``;
