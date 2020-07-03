import React from 'react';
import styled from 'styled-components';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AreaTit from '../../components/Texts/AreaTit';
import AreaSubTit from '../../components/Texts/AreaSubTit';
import Inputs from '../../components/Inputs/Inputs';
import StateButton from '../../components/Buttons/StateButton';
import StageButton from '../../components/Buttons/StageButton';

function Signup() {
  const onPress = () => {
    Actions.Payment();
  };
  return (
    <SafeAreaView>
      <Container>
        <Header>
          <Title>회원가입</Title>
          <TouchableOpacity>
            <CancleIcon
              source={require('../../assets/images/closeIcon/drawable-hdpi/icon_cancel_black.png')}
            />
          </TouchableOpacity>
        </Header>
        <Contents>
          <Inner>
            <TextArea>
              <AreaTit>DAuth 가입을 환영합니다.</AreaTit>
              <AreaTextBox>
                <AreaSubTit>
                  간단한 가입 절차를 진행하시고 세상에서 가장 안전한
                </AreaSubTit>
                <AreaSubTit>본인인증 시스템을 경험해보세요.</AreaSubTit>
              </AreaTextBox>
            </TextArea>
            <Info>
              <InputArea>
                <InputTit>아이디</InputTit>
                <InputBox>
                  <Inputs placeholder="사용하실 아이디를 입력하세요" />
                  <StateButton>중복확인</StateButton>
                </InputBox>
              </InputArea>
              <InputArea>
                <InputTit>이름</InputTit>
                <InputBox>
                  <Inputs placeholder="이름을 입력하세요" />
                </InputBox>
              </InputArea>
              <InputArea>
                <InputTit>휴대폰 번호</InputTit>
                <InputBox>
                  <Inputs placeholder="'-' 구분 없이 입력하세요" />
                </InputBox>
              </InputArea>
              <InputArea>
                <InputTit>주민번호</InputTit>
                <InputBox>
                  <Inputs placeholder="앞 여섯자리 숫자" />
                  <InputText>-</InputText>
                  <Inputs placeholder="뒤 일곱자리 숫자" />
                </InputBox>
              </InputArea>
              <InputArea>
                <InputTit>주소</InputTit>
                <InputBox style={styles.inputMargin}>
                  <Inputs placeholder="우편주소" />
                  <StateButton>주소찾기</StateButton>
                </InputBox>
                <InputBox style={styles.inputMargin}>
                  <Inputs placeholder="기본 주소" />
                </InputBox>
                <InputBox style={styles.inputMargin}>
                  <Inputs placeholder="상세 주소를 입력하세요" />
                </InputBox>
              </InputArea>
              <AreaTextBox>
                <AreaSubTit style={styles.notice}>
                  입력하신 모든 개인 정보는 회원가입을 위한 절차이며,
                </AreaSubTit>
                <AreaSubTit style={styles.notice}>
                  다른 용도로 사용되지 않습니다.
                </AreaSubTit>
              </AreaTextBox>
            </Info>
          </Inner>
          <StageBox>
            <StageButton onPress={onPress}>다음</StageButton>
          </StageBox>
        </Contents>
      </Container>
    </SafeAreaView>
  );
}

export default Signup;

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
  justify-content: space-between;
  padding: 13px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f7f7f7;
`;

const Title = styled.Text`
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
