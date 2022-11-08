
import React from 'react';
import RootNavigator from './src/router';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
  // <RootNavigator />;
  <Provider store={store}>
  <RootNavigator />
</Provider>
  )
};
export default App;