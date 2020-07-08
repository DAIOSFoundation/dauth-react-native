/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './src/store/reducers';
import Index from './src/screens/index';

const store = createStore(rootReducer, composeWithDevTools());

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
