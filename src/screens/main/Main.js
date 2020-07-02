import React from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styled from 'styled-components';

function Main() {
  return (
    <SafeAreaView>
      <TitleWrap>
        <TitleText>개인키 관리</TitleText>
      </TitleWrap>
      <View>
        <Text>정보관리</Text>
      </View>
    </SafeAreaView>
  );
}

export default Main;

const TitleWrap = styled.View`
  height: 50px;
  justify-content: center;
`;

const TitleText = styled.Text`
  width: 238px;
  height: 24px;
  padding-left: 20px;
  font-size: 16px;
  color: #48515a;
`;
