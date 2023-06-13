import React from 'react';
import {Provider} from 'react-redux';

import {setupStore} from './src/store';
import MainNavigation from './src/navigation/MainNavigation';

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
