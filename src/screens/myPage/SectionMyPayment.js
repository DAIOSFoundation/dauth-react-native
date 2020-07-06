import React from 'react';
import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import AreaTit from '../../components/Texts/AreaTit';
import StateButton from '../../components/Buttons/StateButton';
import Inputs from '../../components/Inputs/Inputs';
import AreaSubTit from '../../components/Texts/AreaSubTit';

function SectionMyPayment() {
  return (
    <Payment>
      <Wrapper>
        <TextArea>
          <AreaTit style={styles.title}>나의 결제 정보</AreaTit>
          <StageBox>
            <StateButton>수정</StateButton>
            <StateButton style={styles.removeBitton}>삭제</StateButton>
          </StageBox>
        </TextArea>
        <AreaTextBox>
          <AreaSubTit>카드별칭</AreaSubTit>
          <Contour />
          <AreaSubTit>KB 국민카드 그린카드</AreaSubTit>
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
    </Payment>
  );
}

export default SectionMyPayment;

const styles = StyleSheet.create({
  title: {
    color: '#69727b',
    fontWeight: 'bold',
  },
  removeBitton: {
    borderColor: '#ff6262',
    color: '#ff6262',
  },
});

const Payment = styled.View`
  background-color: #ffffff;
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

const AreaTextBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const Contour = styled.View`
  height: 10px;
  margin: 0 6px;
  border-width: 1px;
  border-color: #bfc8d1;
`;
