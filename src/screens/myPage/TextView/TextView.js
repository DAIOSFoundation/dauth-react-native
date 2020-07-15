import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';

function TextView({text}) {
  console.log('text: ', text);
  return (
    <TextViews>
      <Text>{text}</Text>
    </TextViews>
  );
}

export default TextView;

const TextViews = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #cbd0d5;
  font-size: 16px;
  padding-bottom: 4px;
`;
