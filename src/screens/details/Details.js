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
import {TabView, SceneMap} from 'react-native-tab-view';
import styled from 'styled-components';
import pictogram from '../../assets/Detail/pictogram.png';
import DetailsCard from './DetailsCard';
import EmptyCard from './EmptyCard';

function Details() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '전체 내역', id: 0},
    {key: 'second', title: '조회', id: 1},
    {key: 'third', title: '변경', id: 2},
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

  const renderTabBar = props => {
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
            <TabList key={i} onPress={() => setIndex(i)}>
              <TabTitle index={index} id={route.id}>
                {route.title}
              </TabTitle>
              <Oval index={index} id={route.id} />
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
    text-align: center;
    position: absolute;
    color: ${props => (props.index === props.id ? '#1d5187' : '#bfc8d1')};
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
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
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

const Oval = styled.View`
  width: 5px;
  height: 5px;
  margin-top: 30px;
  border-radius: 50px;
  background-color: #1d5187;
  display: ${props => (props.index === props.id ? 'flex' : 'none')};
`;

const CardList = styled.View`
  margin: 0 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px;
`;
