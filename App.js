/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import Index from './src/screens/index';
import configure from './src/store/configure';

const store = configure();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
