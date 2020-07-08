import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

export default function Oval({pressTotal, pressSearch, pressAmend}) {
  return <OvalView />;
}

const OvalView = styled.View`
  width: 5px;
  height: 5px;
  margin-top: 30px;
  border-radius: 50px;
  background-color: #1d5187;
  /* display: ${props => (props.pressTotal ? 'flex' : 'none')}; */
`;
