import React from 'react';
import styled from 'styled-components';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

function Signup() {
  return (
    <SafeAreaView>
      <ScrollView>
        <SignUpPage>
          <Header>
            <Title>회원가입</Title>
            <TouchableOpacity>
              <CancleIcon
                source={require('../../assets/images/closeIcon/drawable-hdpi/icon_cancel_black.png')}
              />
            </TouchableOpacity>
          </Header>
          <Container>
            <Inner>
              <TextArea>
                <AreaTit>DAuth 가입을 환영합니다.</AreaTit>
                <AreaTextBox>
                  <SubText>
                    간단한 가입 절차를 진행하시고 세상에서 가장 안전한
                  </SubText>
                  <SubText>본인인증 시스템을 경험해보세요.</SubText>
                </AreaTextBox>
              </TextArea>
              <Info>
                {/* Input 컴포넌트 시킬 예정 */}
                <InputArea>
                  <InputTit>아이디</InputTit>
                  <InputBox>
                    <Input placeholder="사용하실 아이디를 입력하세요" />
                    {/* InputButton 컴포넌트 시킬 예정 */}
                    <InputButton>
                      <ButtonText>중복확인</ButtonText>
                    </InputButton>
                    {/* InputButton 컴포넌트 시킬 예정 */}
                  </InputBox>
                </InputArea>
                {/* Input 컴포넌트 시킬 예정 */}
                <InputArea>
                  <InputTit>이메일</InputTit>
                  <InputBox>
                    <Input placeholder="이메일 주소를 입력하세요" />
                  </InputBox>
                </InputArea>
                <InputArea>
                  <InputTit>이름</InputTit>
                  <InputBox>
                    <Input placeholder="이름을 입력하세요" />
                  </InputBox>
                </InputArea>
                <InputArea>
                  <InputTit>휴대폰 번호</InputTit>
                  <InputBox>
                    <Input placeholder="'-' 구분 없이 입력하세요" />
                  </InputBox>
                </InputArea>
                <InputArea>
                  <InputTit>주민번호</InputTit>
                  <InputBox>
                    <Input placeholder="앞 여섯자리 숫자" />
                    <InputText>-</InputText>
                    <Input placeholder="뒤 일곱자리 숫자" />
                  </InputBox>
                </InputArea>
                <InputArea>
                  <InputTit>주소</InputTit>
                  <InputBox style={styles.inputMargin}>
                    <Input placeholder="우편주소" />
                    <InputButton>
                      <ButtonText>주소찾기</ButtonText>
                    </InputButton>
                  </InputBox>
                  <InputBox style={styles.inputMargin}>
                    <Input placeholder="기본 주소" />
                  </InputBox>
                  <InputBox style={styles.inputMargin}>
                    <Input placeholder="상세 주소를 입력하세요" />
                  </InputBox>
                </InputArea>
                <AreaTextBox>
                  <SubText style={styles.notice}>
                    입력하신 모든 개인 정보는 회원가입을 위한 절차이며,
                  </SubText>
                  <SubText style={styles.notice}>
                    다른 용도로 사용되지 않습니다.
                  </SubText>
                </AreaTextBox>
              </Info>
            </Inner>
            <StageButton>
              <StageText>다음</StageText>
            </StageButton>
          </Container>
        </SignUpPage>
      </ScrollView>
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

const SignUpPage = styled.View`
  height: 100%;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 13px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f7f7f7;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #48515a;
`;

const CancleButton = styled.TouchableOpacity``;

const CancleIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const Container = styled.View`
  height: 100%;
`;

const Inner = styled.View`
  padding: 0 20px;
`;

const TextArea = styled.View`
  margin: 26px 0 24px;
`;

const AreaTit = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #1d5187;
`;

const AreaTextBox = styled.View`
  margin-top: 8px;
`;
const SubText = styled.Text`
  font-size: 13px;
  color: #48515a;
  line-height: 20px;
`;

const Info = styled.View`
  margin-bottom: 36px;
`;

const InputArea = styled.View`
  padding: 10px 0;
`;

const InputTit = styled(SubText)`
  font-size: 13px;
  padding-bottom: 6px;
`;

const InputBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.TextInput`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #cbd0d5;
  font-size: 16px;
  padding-bottom: 4px;
`;

const InputText = styled.Text`
  padding: 0 12px;
  color: #48515a;
`;

const InputButton = styled.TouchableOpacity`
  width: 74px;
  height: 29px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #1d5187;
  border-top-right-radius: 18px;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;
  margin-left: 10px;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  color: #1d5187;
`;

const StageButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  background-color: #1d5187;
`;

const StageText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
