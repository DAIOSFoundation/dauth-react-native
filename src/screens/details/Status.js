import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

export default function Status({children}) {
  return (
    <StatusWrap>
      <StatusText>{children}</StatusText>
    </StatusWrap>
  );
}

const StatusWrap = styled.View`
  width: 40px;
  height: 18px;
  background-color: #ff6262;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: white;
`;
