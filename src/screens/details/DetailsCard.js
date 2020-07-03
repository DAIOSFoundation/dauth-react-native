import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import Status from './Status';

export default function DetailsCard() {
  return (
    <CardWrap>
      <TitleWrap>
        <Title>중고나라</Title>
        <Status>조회</Status>
      </TitleWrap>
      <SubText>접근 IP: 192.156.0.1</SubText>
      <SubText>접근 ID: x1hide</SubText>
      <SubText>조회항목: 생년월일, 전화번호, 이름</SubText>
      <DateInfoWrap>
        <Date>2019.12.24</Date>
        <Break>|</Break>
        <Time>오후 10시 30분 51초</Time>
      </DateInfoWrap>
    </CardWrap>
  );
}

const CardWrap = styled.View`
  height: 148px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const TitleWrap = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #1d5187;
  padding-right: 10px;
`;

const SubText = styled.Text`
  font-size: 13px;
  color: #48515a;
  padding-bottom: 5px;
`;

const DateInfoWrap = styled.View`
  flex-direction: row;
`;

const Date = styled.Text`
  font-size: 12px;
  color: #a6b3bf;
  padding-right: 5px;
`;

const Break = styled.Text`
  font-size: 12px;
  color: #a6b3bf;
`;

const Time = styled.Text`
  font-size: 12px;
  color: #a6b3bf;
  padding-left: 5px;
`;
