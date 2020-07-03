import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Signup from './signup/Signup';
import Payment from './signup/Payment';
import Main from './main/Main';
import Details from './details/Details';
import MyPage from './myPage/MyPage';
import {Image} from 'react-native';
import Complete from './signup/Complete';

function Index() {
  const tabBarIcon = ({title, focused}) => {
    const iconSize = 30;
    switch (title) {
      case 'Main':
        return (
          <Image
            resizeMode="contain"
            source={
              focused
                ? require('../assets/tabBar/icon_lock_pressed.png')
                : require('../assets/tabBar/icon_lock_normal.png')
            }
            style={{height: iconSize, width: iconSize}}
          />
        );
      case 'Details':
        return (
          <Image
            resizeMode="contain"
            source={
              focused
                ? require('../assets/tabBar/icon_log_pressed.png')
                : require('../assets/tabBar/icon_log_normal.png')
            }
            style={{height: iconSize, width: iconSize}}
          />
        );
      case 'MyPage':
        return (
          <Image
            resizeMode="contain"
            source={
              focused
                ? require('../assets/tabBar/icon_my_pressed.png')
                : require('../assets/tabBar/icon_my_normal.png')
            }
            style={{height: iconSize, width: iconSize}}
          />
        );
    }
  };

  return (
    <Router>
      <Stack key="root">
        {/* <Scene key="login" component={Login} title="Login" /> */}
        <Scene key="Register" component={Signup} hideNavBar />
        <Scene key="Payment" component={Payment} hideNavBar />
        <Scene key="Complete" component={Complete} hideNavBar />
        <Scene key="Mainpage" tabs={true} showLabel={false}>
          <Scene
            key="Main"
            title="Main"
            icon={tabBarIcon}
            hideNavBar
            component={Main}>
            {/* <Scene
              key="Main"
              component={Main}
              hideNavBar
              onEnter={onEnter}
            /> */}
          </Scene>
          <Scene
            key="Details"
            title="Details"
            Screentitle="Details"
            icon={tabBarIcon}
            component={Details}
            hideNavBar>
            {/* <Scene
              key="Details"
              component={Details}
              hideNavBar
              onEnter={onEnter}
            /> */}
          </Scene>
          <Scene
            key="MyPage"
            title="MyPage"
            Screentitle="MyPage"
            icon={tabBarIcon}
            component={MyPage}
            hideNavBar>
            {/* <Scene
              key="MyPage"
              component={MyPage}
              hideNavBar
              onEnter={onEnter}
            /> */}
          </Scene>
        </Scene>
      </Stack>
    </Router>
  );
}

export default Index;
