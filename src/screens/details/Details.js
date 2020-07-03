import React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import pictogram from '../../assets/Detail/pictogram.png';
import styled from 'styled-components';

function Details() {
  return (
    <SafeAreaView>
      <HeaderWrap>
        <View>
          <Text>강수민 님, 안녕하세요.</Text>
          <Text>나의 인증내역을 확인하세요.</Text>
          <Text>최근 인증 내역 2건</Text>
        </View>
        <View>
          <Image source={pictogram} />
        </View>
      </HeaderWrap>
    </SafeAreaView>
  );
}

export default Details;

const HeaderWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px 23px 20px;
`;
