import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components';
import cardIcon from '../assets/Main/icon_jumparrow.png';

export default function MainCard({children, goTerms}) {
  return (
    <TouchableWithoutFeedback onPress={goTerms}>
      <CardWrap>
        <CardText>{children}</CardText>
        <CardIcon source={cardIcon} />
      </CardWrap>
    </TouchableWithoutFeedback>
  );
}

const CardWrap = styled.View`
  height: 42px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const CardText = styled.Text`
  height: 19px;
  margin-left: 20px;
  font-size: 13px;
  color: #48515a;
`;

const CardIcon = styled.Image`
  margin-right: 20px;
`;
