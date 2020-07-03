import React from 'react';
import styled from 'styled-components';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AreaTit from '../../components/Texts/AreaTit';
import AreaSubTit from '../../components/Texts/AreaSubTit';
import Inputs from '../../components/Inputs/Inputs';
import StageButton from '../../components/Buttons/StageButton';

function Payment() {
  const onPress = () => {
    Actions.Complete();
  };

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <TouchableOpacity onPress={Actions.pop}>
            <CancleIcon
              source={require('../../assets/images/backIcon/drawable-hdpi/icon_back.png')}
            />
          </TouchableOpacity>
          <Title>결제 정보 입력</Title>
        </Header>
        <Contents>
          <Inner>
            <TextArea>
              <AreaTit>결제 수단을 등록합니다.</AreaTit>
              <AreaTextBox>
                <AreaSubTit>
                  등록된 결제 수단을 통해 간편하게 결제를 하실 수 있습니다.
                </AreaSubTit>
              </AreaTextBox>
            </TextArea>
            <Info>
              <InputArea>
                <InputTit>카드번호</InputTit>
                <InputBox>
                  <Inputs placeholder="'-' 구분 없이 입력하세요" />
                </InputBox>
              </InputArea>
              <InputArea>
                <InputTit>유효기간</InputTit>
                <InputBox>
                  <Inputs placeholder="MM / YY" />
                </InputBox>
              </InputArea>
              <InputArea>
                <InputTit>CVC</InputTit>
                <InputBox>
                  <Inputs placeholder="카드 뒷면 마지막 3자리를 입력하세요" />
                </InputBox>
              </InputArea>
              <InputArea>
                <InputTit>카드 별칭</InputTit>
                <InputBox>
                  <Inputs placeholder="선택 입력" />
                </InputBox>
              </InputArea>
            </Info>
          </Inner>
          <StageBox>
            <StageButton onPress={onPress}>회원가입</StageButton>
          </StageBox>
        </Contents>
      </Container>
    </SafeAreaView>
  );
}

export default Payment;

const styles = StyleSheet.create({
  inputMargin: {
    marginBottom: 12,
  },
  notice: {
    color: '#1d5187',
  },
});

const Container = styled.View`
  position: relative;
  height: 100%;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 13px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f7f7f7;
`;

const Title = styled.Text`
  margin-left: 14px;
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
  height: 100%;
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

const InputText = styled.Text`
  padding: 0 12px;
  color: #48515a;
`;

const StageBox = styled.View`
  flex: 1;
  height: 100%;
`;
