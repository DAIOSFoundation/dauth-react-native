import React from 'react';
import styled from 'styled-components';
import {Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import SectionMyInfo from '../SectionMyInfo';
import SectionPayment from '../SectionMyPayment';

function Modified() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Header>
            <Title>마이 페이지</Title>
          </Header>
          <Contents>
            <Inner>
              <SectionMyInfo />
              {/* ---------------------------- */}
              <SectionPayment />
            </Inner>
          </Contents>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Modified;

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
