import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components';
import pictogram from '../../assets/Detail/pictogram.png';
import box from '../../assets/Detail/box.png';
import DetailsCard from './DetailsCard';

function Details() {
  const [pressTotal, setPressTotal] = useState(true);
  const [pressSearch, setPressSearch] = useState(false);
  const [pressAmend, setPressAmend] = useState(false);

  const handleTotal = () => {
    setPressTotal(true);
    setPressSearch(false);
    setPressAmend(false);
    console.log('전체 내역 : ', pressTotal);
  };

  const handleSearch = () => {
    setPressSearch(true);
    setPressTotal(false);
    setPressAmend(false);

    console.log('조회 : ', pressSearch);
  };

  const handleAmend = () => {
    setPressAmend(true);
    setPressTotal(false);
    setPressSearch(false);
    console.log('변경 : ', pressAmend);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f7f9'}}>
      <ScrollView>
        <HeaderWrap>
          <View>
            <GreetingText>송정엽 님, 안녕하세요.</GreetingText>
            <GreetingText>나의 인증내역을 확인하세요.</GreetingText>
            <TotalQty>최근 인증 내역 2건</TotalQty>
          </View>
          <View>
            <Image source={pictogram} />
          </View>
        </HeaderWrap>
        <TabBarMiddle>
          <TouchableWithoutFeedback onPress={handleTotal}>
            <TotalList>
              <TotalText pressTotal={pressTotal}>전체 내역</TotalText>
              <TotalOval pressTotal={pressTotal} />
            </TotalList>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleSearch}>
            <SearchList>
              <SearchText pressSearch={pressSearch}>조회</SearchText>
              <SearchOval pressSearch={pressSearch} />
            </SearchList>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleAmend}>
            <AmendList>
              <AmendText pressAmend={pressAmend}>변경</AmendText>
              <AmendOval pressAmend={pressAmend} />
            </AmendList>
          </TouchableWithoutFeedback>
        </TabBarMiddle>
        <EmptyList>
          <Image source={box} />
          <EmptyText>내역이 존재하지 않습니다.</EmptyText>
        </EmptyList>
        <CardList>
          <DetailsCard />
          <DetailsCard />
          <DetailsCard />
        </CardList>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Details;

const HeaderWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px 23px 20px;
  height: 128px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px;
`;

const GreetingText = styled.Text`
  font-size: 14px;
  color: #69727b;
  margin-bottom: 2px;
`;

const TotalQty = styled.Text`
  font-size: 20px;
  color: #1d5187;
  font-weight: 700;
  margin-top: 15px;
`;

const TabBarMiddle = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 58px;
`;

const TotalList = styled.View`
  width: 120px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TotalText = styled.Text`
  text-align: center;
  position: absolute;
  font-size: 15px;
  color: ${props => (props.pressTotal ? '#1d5187' : '#bfc8d1')};
`;

const TotalOval = styled.View`
  width: 5px;
  height: 5px;
  margin-top: 30px;
  border-radius: 50px;
  background-color: #1d5187;
  display: ${props => (props.pressTotal ? 'flex' : 'none')};
`;

const SearchList = styled(TotalList)``;

const SearchText = styled(TotalText)`
  color: ${props => (props.pressSearch ? '#1d5187' : '#bfc8d1')};
`;

const SearchOval = styled(TotalOval)`
  display: ${props => (props.pressSearch ? 'flex' : 'none')};
`;

const AmendList = styled(TotalList)``;

const AmendText = styled(TotalText)`
  color: ${props => (props.pressAmend ? '#1d5187' : '#bfc8d1')};
`;

const AmendOval = styled(TotalOval)`
  display: ${props => (props.pressAmend ? 'flex' : 'none')};
`;

const EmptyList = styled.View`
  margin: 0 10px;
  height: 148px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px;
`;

const EmptyText = styled.Text`
  font-size: 15px;
  color: #bfc8d1;
  padding-top: 15px;
`;

const CardList = styled.View`
  margin: 0 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px;
`;
