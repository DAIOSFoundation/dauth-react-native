import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';
import box from '../../assets/Detail/box.png';

export default function EmptyCard() {
  return (
    <EmptyList>
      <Image source={box} />
      <EmptyText>내역이 존재하지 않습니다.</EmptyText>
    </EmptyList>
  );
}

const EmptyList = styled.View`
  margin: 0 10px;
  height: 148px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px;
`;

const EmptyText = styled.Text`
  font-size: 15px;
  color: #bfc8d1;
  padding-top: 15px;
`;
