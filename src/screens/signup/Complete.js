import React from 'react';
import styled from 'styled-components';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import StageButton from '../../components/Buttons/StageButton';

function Complete() {
  const onPress = () => {
    Actions.Mainpage();
  };
  return (
    <SafeAreaView>
      <Container>
        <Contents>
          <Innter>
            <CompleteImg
              source={require('../../assets/images/completeIcon/drawable-hdpi/icon_check_white.png')}
            />
            <TextArea>
              <AreaTitle>회원가입이 완료 되었습니다</AreaTitle>
              <SubDesc>DAuth를 통해 세상에서 가장 안전한</SubDesc>
              <SubDesc>본인인증 시스템을 경험해보세요!</SubDesc>
            </TextArea>
          </Innter>
          <StageBox>
            <StageButton style={styles.completeBtn} onPress={onPress}>
              확인
            </StageButton>
          </StageBox>
        </Contents>
      </Container>
    </SafeAreaView>
  );
}

export default Complete;

const styles = StyleSheet.create({
  completeBtn: {
    backgroundColor: '#ffffff',
    color: '#1d5187',
    borderBottomWidth: 1,
    borderColor: '#B6B6B6',
  },
});

const Container = styled.View`
  position: relative;
  height: 100%;
`;

const Contents = styled.View`
  position: relative;
  height: 100%;
  flex: 1;
  background-color: #1d5187;
`;

const Innter = styled.View`
  padding: 128px 65px 0;
  justify-content: center;
  align-items: center;
`;

const CompleteImg = styled.ImageBackground`
  width: 62px;
  height: 62px;
`;

const TextArea = styled.View`
  margin: 16px 0;
`;

const AreaTitle = styled.Text`
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 12px;
`;

const SubDesc = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

const StageBox = styled.View`
  flex: 1;
  height: 100%;
`;
