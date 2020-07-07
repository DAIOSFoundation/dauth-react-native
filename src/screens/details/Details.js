import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import styled from 'styled-components';
import pictogram from '../../assets/Detail/pictogram.png';
import DetailsCard from './DetailsCard';
import EmptyCard from './EmptyCard';

function Details() {
  const [pressTotal, setPressTotal] = useState(true);
  const [pressSearch, setPressSearch] = useState(false);
  const [pressAmend, setPressAmend] = useState(false);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '전체 내역'},
    {key: 'second', title: '조회'},
    {key: 'third', title: '변경'},
  ]);

  const FirstRoute = () => <EmptyCard />;

  const SecondRoute = () => (
    <CardList>
      <DetailsCard />
    </CardList>
  );

  const ThirdRoute = () => (
    <CardList>
      <DetailsCard />
    </CardList>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const handleClick = i => {
    setIndex(i);
    if (i === 0) {
      setPressTotal(true);
      setPressSearch(false);
      setPressAmend(false);
      console.log('전체 내역 : ', pressTotal);
    }
    if (i === 1) {
      setPressSearch(true);
      setPressTotal(false);
      setPressAmend(false);
      console.log('조회 : ', pressSearch);
    }
    if (i === 2) {
      setPressAmend(true);
      setPressTotal(false);
      setPressSearch(false);
      console.log('변경 : ', pressAmend);
    }
  };

  renderTabBar = props => {
    // const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <TabHeader>
        {props.navigationState.routes.map((route, i) => {
          // const color = Animated.color(
          //   Animated.round(
          //     Animated.interpolate(props.position, {
          //       inputRange,
          //       outputRange: inputRange.map(inputIndex =>
          //         inputIndex === i ? 255 : 0,
          //       ),
          //     }),
          //   ),
          //   0,
          //   0,
          // );

          return (
            <TabList onPress={() => handleClick(i)}>
              <TabTitle>{route.title}</TabTitle>
              <TotalOval pressTotal={pressTotal} />
            </TabList>
          );
        })}
      </TabHeader>
    );
  };

  const TabHeader = styled.View`
    flex-direction: row;
    height: 58px;
    justify-content: center;
    align-items: center;
  `;

  const TabList = styled.TouchableOpacity`
    width: 120px;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;

  const TabTitle = styled.Text`
    font-size: 15px;
    color: ${props => (props.pressTotal ? '#1d5187' : '#bfc8d1')};
    text-align: center;
    position: absolute;
  `;

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
          <TouchableWithoutFeedback>
            <TotalList>
              <TotalText pressTotal={pressTotal}>전체 내역</TotalText>
              <TotalOval pressTotal={pressTotal} />
            </TotalList>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <SearchList>
              <SearchText pressSearch={pressSearch}>조회</SearchText>
              <SearchOval pressSearch={pressSearch} />
            </SearchList>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <AmendList>
              <AmendText pressAmend={pressAmend}>변경</AmendText>
              <AmendOval pressAmend={pressAmend} />
            </AmendList>
          </TouchableWithoutFeedback>
        </TabBarMiddle>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          // renderTabBar={props => (
          //   <TabBar {...props} style={{backgroundColor: '#f6f8fa'}} />
          // )}
        />
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

const CardList = styled.View`
  margin: 0 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px;
`;
