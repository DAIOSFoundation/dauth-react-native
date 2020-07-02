import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Main from './main/Main';
import Details from './details/Details';
import MyPage from './myPage/MyPage';
import {Image} from 'react-native';

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
        {/* <Scene key="login" component={Login} title="Login" />
        <Scene key="register" component={Register} title="Register" /> */}
        <Scene tabs={true} showLabel={false}>
          <Scene key="Main" title="Main" icon={tabBarIcon}>
            <Scene
              key="Main"
              component={Main}
              hideNavBar
              // onEnter={onEnter}
            />
          </Scene>
          <Scene
            key="Details"
            title="Details"
            Screentitle="Details"
            icon={tabBarIcon}>
            <Scene
              key="Details"
              component={Details}
              hideNavBar
              // onEnter={onEnter}
            />
          </Scene>
          <Scene
            key="MyPage"
            title="MyPage"
            Screentitle="MyPage"
            icon={tabBarIcon}>
            <Scene
              key="MyPage"
              component={MyPage}
              hideNavBar
              // onEnter={onEnter}
            />
          </Scene>
        </Scene>
      </Stack>
    </Router>
  );
}

export default Index;
