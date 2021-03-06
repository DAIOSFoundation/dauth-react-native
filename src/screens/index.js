import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Signup from './signup/Signup';
import Payment from './signup/Payment';
import Complete from './signup/Complete';
import Main from './main/Main';
import Details from './details/Details';
import MyPage from './myPage/MyPage';
import Login from './login/Login';
import Modified from './myPage/Modified/Modified';
import {Image} from 'react-native';
import Terms from './main/webView/Terms';

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
<<<<<<< HEAD
        {/* <Scene key="login" component={Login} title="Login" /> */}
=======
        <Scene key="login" component={Login} title="Login" />
>>>>>>> 26790f30... [Add] login, signup 페이지 리덕스 구현
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
            {/* <Scene key="Terms" title="Terms" component={Terms} hideNavBar /> */}
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
            hideNavBar
          />
        </Scene>
        <Scene key="Terms" title="Terms" component={Terms} hideNavBar />
        <Scene key="Modified" component={Modified} hideNavBar />
      </Stack>
    </Router>
  );
}

export default Index;
