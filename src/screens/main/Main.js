import React from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

function Main() {
  return (
    <SafeAreaView>
      <View>
        <Text>Main</Text>
        <Button title="Press me" />
      </View>
    </SafeAreaView>
  );
}

export default Main;
