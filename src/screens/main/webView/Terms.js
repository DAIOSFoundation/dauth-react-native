import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Terms() {
  // const prohibitZoom =
  //   "const meta = document.createElement('meta'); meta.setAttribute('content', 'initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: 'https://daios.io/termsOfService'}}
        // originWhitelist={['*']}
        // javaScriptEnabledAndroid={true}
        // javaScriptEnable={true}
        // startInLoadingState={true}
        // scalesPageToFit={true}
        // injectJavaScript={prohibitZoom}
      />
    </SafeAreaView>
  );
}
