import React from 'react';
import styled from 'styled-components';
import {Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import AreaTit from '../../components/Texts/AreaTit';
import StateButton from '../../components/Buttons/StateButton';
import Inputs from '../../components/Inputs/Inputs';
import AreaSubTit from '../../components/Texts/AreaSubTit';

function MyPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Header>
            <Title>마이 페이지</Title>
          </Header>
          <Contents>
            <Inner>
              <SectionMyInfo>
                <Wrapper>
                  <TextArea>
                    <AreaTit style={styles.title}>나의정보</AreaTit>
                    <StageBox>
                      <StateButton>수정</StateButton>
                      <StateButton>수정</StateButton>
                    </StageBox>
                  </TextArea>
                  <InputArea>
                    <InputTit>아이디</InputTit>
                    <InputBox>
                      <Inputs placeholder="아이디" />
                    </InputBox>
                  </InputArea>
                  <InputArea>
                    <InputTit>이메일</InputTit>
                    <InputBox>
                      <Inputs placeholder="이메일" />
                    </InputBox>
                  </InputArea>
                  <InputArea>
                    <InputTit>이름</InputTit>
                    <InputBox>
                      <Inputs placeholder="이름" />
                    </InputBox>
                  </InputArea>
                  <InputArea>
                    <InputTit>휴대폰 번호</InputTit>
                    <InputBox>
                      <Inputs placeholder="휴대폰 번호" />
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
                    <InputBox>
                      <Inputs placeholder="주소" />
                    </InputBox>
                  </InputArea>
                </Wrapper>
              </SectionMyInfo>
              {/* ---------------------------- */}
              <SectionPayment>
                <Wrapper>
                  <TextArea>
                    <AreaTit style={styles.title}>나의 결제 정보</AreaTit>
                    <StageBox>
                      <StateButton>수정</StateButton>
                      <StateButton style={styles.removeBitton}>
                        삭제
                      </StateButton>
                    </StageBox>
                  </TextArea>
                  <AreaTextBox>
                    <AreaSubTit>카드별칭</AreaSubTit>
                    <AreaSubTit>카드별칭</AreaSubTit>
                  </AreaTextBox>
                  <InputArea>
                    <InputTit>이메일</InputTit>
                    <InputBox>
                      <Inputs placeholder="이메일" />
                    </InputBox>
                  </InputArea>
                  <InputArea>
                    <InputTit>이름</InputTit>
                    <InputBox>
                      <Inputs placeholder="이름" />
                    </InputBox>
                  </InputArea>
                  <InputArea>
                    <InputTit>휴대폰 번호</InputTit>
                    <InputBox>
                      <Inputs placeholder="휴대폰 번호" />
                    </InputBox>
                  </InputArea>
                </Wrapper>
              </SectionPayment>
            </Inner>
          </Contents>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyPage;

const styles = StyleSheet.create({
  title: {
    color: '#69727b',
  },
  removeBitton: {
    borderColor: '#ff6262',
    color: '#ff6262',
  },
});

const Container = styled.View`
  position: relative;
  height: 100%;
  background-color: #f6f8fa;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 13px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f7f7f7;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #48515a;
`;

const Contents = styled.View`
  position: relative;
  height: 100%;
  flex: 1;
`;

const Inner = styled.View``;

const SectionMyInfo = styled.View`
  background-color: #ffffff;
  margin-bottom: 10px;
`;

const Wrapper = styled.View`
  padding: 25px 20px 36px;
`;

const TextArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
`;

const StageBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InputArea = styled.View`
  padding: 7px 0;
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

const SectionPayment = styled(SectionMyInfo)``;

const AreaTextBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
